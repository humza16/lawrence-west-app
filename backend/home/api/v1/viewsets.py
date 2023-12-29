from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomAuthTokenSerializer
from rest_framework.authentication import TokenAuthentication

from social_django.utils import psa

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)
from django.middleware.csrf import get_token


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = CustomAuthTokenSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        csrf = get_token(request)
        return Response({"token": token.key, "user": user_serializer.data, "csrftoken": csrf})

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([AllowAny])
@psa()
@csrf_exempt
def register_by_access_token(request, backend):
    token = request.data.get('access_token')
    user = request.backend.do_auth(token)
    # print(request)
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response(
            {
                'token': token.key
            },
            status=status.HTTP_200_OK,
            )
    else:
        return Response(
            {
                'errors': {
                    'token': 'Invalid token'
                    }
            },
            status=status.HTTP_400_BAD_REQUEST,
        )