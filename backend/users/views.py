from django.contrib.auth import get_user_model
# from django.contrib.auth.mixins import LoginRequiredMixin
# from django.urls import reverse
# from django.views.generic import DetailView, RedirectView, UpdateView
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
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
    

class PasswordResetView(APIView):
    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.get(email=serializer.validated_data['email'])
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_link = f"{request.build_absolute_uri('/reset-password/')}?uid={uid}&token={token}"
        send_mail(
            'Password Reset Request',
            f'Please use the following link to reset your password: {reset_link}',
            'from@example.com',
            [user.email],
            fail_silently=False,
        )
        return Response({"message": "Password reset email sent."}, status=status.HTTP_200_OK)
    
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