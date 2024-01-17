from django.contrib.auth import get_user_model, authenticate, password_validation
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.password_validation import validate_password
from django.core.validators import validate_email
from django.utils.http import urlsafe_base64_decode
from rest_framework import serializers, exceptions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from users.utils import (
    validate_facebook_auth_token,
    facebook_create_or_authenticate_user,
)

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(source='name')
    profile_picture_url = serializers.ImageField(source='profile_picture')

    class Meta:
        model = User
        fields = ('email', 'username', 'name', 'profile_picture_url', 'bio')

    def get_name(self, obj):
        return obj.get_full_name()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'password2', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    # def validate_email(self, value):
    #     if not value:
    #         raise serializers.ValidationError("Email is required")
    #     return value

    def validate(self, data):
        email = data.get("email", "")
        first_name = data.get("first_name", "")
        last_name = data.get("last_name", "")
        password = data.get("password")
        password2 = data.get("password2")
        if not email:
            raise serializers.ValidationError("Email is required")
        if not (first_name and last_name):
            raise serializers.ValidationError("Both first name and last name are required.")
        if not (password and password2):
            raise serializers.ValidationError("Both password and password2 are required.")
        
        if password != password2:
            raise serializers.ValidationError({"password2": "Password fields didn't match."})
        validate_email(data.get("email"))
        validate_password(data['password'])
        return data

    def create(self, validated_data):
        validated_data.pop('password2', None)
        user = User.objects.create_user(
            **validated_data
        )
        return user
    

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")

        user = authenticate(username=username, password=password)

        # If authentication fails, attempt to authenticate with email
        if user is None:
            user = authenticate(email=username, password=password)

        if user is None:
            raise exceptions.AuthenticationFailed(
                'No active account found with the given credentials'
            )

        # Add custom claims or additional data if needed here

        data = super().validate(attrs)

        return data
    
class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        user = User.objects.get(email=value)
        if not user:
            raise serializers.ValidationError("User with this email does not exist.")
        registration_method = user.registration_method
        if registration_method != "email":
            raise serializers.ValidationError(f"User with this email is registered via {registration_method}.")
        return value
    
class PasswordResetConfirmSerializer(serializers.Serializer):
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(write_only=True)

    def validate(self, data):
        try:
            uid = urlsafe_base64_decode(data.get('uid')).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, data.get('token')):
            return data
        else:
            raise serializers.ValidationError('Invalid token or user ID')

    def save(self):
        user = User.objects.get(pk=urlsafe_base64_decode(self.validated_data.get('uid')).decode())
        user.set_password(self.validated_data.get('new_password'))
        user.save()

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['profile_picture', 'bio']

class GoogleAuthCodeSerializer(serializers.Serializer):
    auth_code = serializers.CharField(required=True)

class FacebookSocialAuthSerializer(serializers.Serializer):
    """Handles serialization of facebook related data"""
    access_token = serializers.CharField()

    # def validate_auth_token(self, auth_token):
    #     user_data = validate_facebook_auth_token(auth_token)

    #     try:
    #         user_id = user_data['id']
    #         email = user_data['email']
    #         first_name = user_data['first_name']
    #         last_name = user_data['last_name']
    #     except:
    #         raise serializers.ValidationError(
    #             'The token  is invalid or expired. Please login again.'
    #         )
    #     return facebook_create_or_authenticate_user(user_data)

class UserEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name']

    def validate_email(self, value):
        if User.objects.exclude(pk=self.instance.pk).filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
    
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect.")
        return value

    def validate(self, data):
        if data['new_password'] != data['new_password2']:
            raise serializers.ValidationError({"new_password2": "Password fields didn't match."})
        password_validation.validate_password(data['new_password'], self.context['request'].user)
        return data