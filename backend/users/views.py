from django.contrib.auth import get_user_model
# from django.contrib.auth.mixins import LoginRequiredMixin
# from django.urls import reverse
# from django.views.generic import DetailView, RedirectView, UpdateView
from django.contrib.auth.tokens import default_token_generator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import send_mail
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.views import View
from rest_framework import generics, status, serializers
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import (
    UserSerializer,
    UserRegistrationSerializer,
    CustomTokenObtainPairSerializer,
    PasswordResetSerializer,
    PasswordResetConfirmSerializer,
    ProfileUpdateSerializer,
    GoogleAuthCodeSerializer,
    FacebookSocialAuthSerializer,
    UserEditSerializer,
    ChangePasswordSerializer
)
from lawrence_west_app_44469.settings import SENDGRID_CLIENT, LOGIN_REDIRECT_URL
from utils import compose_email_body
from users.utils import (
    validate_google_token,
    create_or_update_user,
    exchange_auth_code_for_token,
    get_id_token_from_response,
    validate_facebook_auth_token,
    facebook_create_or_authenticate_user,
)

User = get_user_model()


# class UserDetailView(LoginRequiredMixin, DetailView):
#     model = User
#     slug_field = "username"
#     slug_url_kwarg = "username"


# user_detail_view = UserDetailView.as_view()


# class UserUpdateView(LoginRequiredMixin, UpdateView):
#     model = User
#     fields = ["name"]

#     def get_success_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})

#     def get_object(self):
#         return User.objects.get(username=self.request.user.username)


# user_update_view = UserUpdateView.as_view()


# class UserRedirectView(LoginRequiredMixin, RedirectView):
#     permanent = False

#     def get_redirect_url(self):
#         return reverse("users:detail", kwargs={"username": self.request.user.username})


# user_redirect_view = UserRedirectView.as_view()

class UserDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
    
class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def perform_create(self, serializer):
        serializer.save()

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class GoogleTokenObtainView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    
@method_decorator(csrf_exempt, name='dispatch')
class PasswordResetView(APIView):
    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
            user = User.objects.get(email=serializer.validated_data['email'])
        except (User.DoesNotExist, serializers.ValidationError):
            return Response({"error": "Invalid email address."}, status=status.HTTP_400_BAD_REQUEST)
        
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_link = f"{LOGIN_REDIRECT_URL}/reset-password?uid={uid}&token={token}"

        subject = "Reset password with Reel Moment"
        content = f'Please use the following link to reset your password: {reset_link}'

        mail_json = compose_email_body(
            to_email=user.email,
            subject=subject,
            content=content
        )

        response = SENDGRID_CLIENT.client.mail.send.post(request_body=mail_json)

        if response.status_code != 202:
            return Response({"error": "Failed to send email."}, status=response.status_code)
        
        return Response({"message": "Password reset email sent."}, status=status.HTTP_200_OK)
    
@method_decorator(csrf_exempt, name='dispatch')
class PasswordResetConfirmView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Password has been reset successfully."}, status=status.HTTP_200_OK)
    
class ProfileUpdateView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileUpdateSerializer

    def get_object(self):
        return self.request.user


@method_decorator(csrf_exempt, name='dispatch')
class ReceiveGoogleTokenView(APIView):

    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = GoogleAuthCodeSerializer(data=request.data)
        if serializer.is_valid():
            auth_code = serializer.validated_data['auth_code']
            google_response = exchange_auth_code_for_token(auth_code)
            token = get_id_token_from_response(google_response)
            if token:
                id_info = validate_google_token(token)
                if id_info:
                    tokens = create_or_update_user(id_info)
                    return Response(tokens)
                return Response({"error": "Invalid token"}, status=400)
            
            return Response({"error": "Unable to retrieve token"}, status=400)
        
        return Response(serializer.errors, status=400)

# @method_decorator(csrf_exempt, name='dispatch')
# class FacebookAuthView(APIView):
#     def post(self, request, *args, **kwargs):
#         fb_code = request.data.get('code')
#         token_info = exchange_facebook_code_for_token(fb_code)
#         access_token = token_info.get('access_token')

#         fb_user_info = get_facebook_user_info(access_token)
#         jwt_tokens = facebook_create_or_authenticate_user(fb_user_info)

#         return Response(jwt_tokens)
    
class FacebookSocialAuthView(GenericAPIView):

    serializer_class = FacebookSocialAuthSerializer
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        access_token = serializer.validated_data['access_token']
        user_data = validate_facebook_auth_token(access_token)
        data = facebook_create_or_authenticate_user(user_data)
        return Response(data, status=status.HTTP_200_OK)
@method_decorator(csrf_exempt, name='dispatch')
class UserEditView(generics.UpdateAPIView):
    serializer_class = UserEditSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
    # def get_serializer(self, *args, **kwargs):
    #     kwargs['partial'] = True
    #     return super().get_serializer(*args, **kwargs)

@method_decorator(csrf_exempt, name='dispatch')
class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.validated_data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # Set new password
            self.object.set_password(serializer.validated_data.get("new_password"))
            self.object.save()
            return Response({"status": "success"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)