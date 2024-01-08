from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.password_validation import validate_password
from django.core.validators import validate_email
from django.utils.http import urlsafe_base64_decode
from rest_framework import serializers, exceptions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

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
        fields = ['email', 'password', 'password2']
        extra_kwargs = {'password': {'write_only': True}}

    # def validate_email(self, value):
    #     if not value:
    #         raise serializers.ValidationError("Email is required")
    #     return value

    def validate(self, data):
        email = data.get("email", "")
        if not email:
            raise serializers.ValidationError("Email is required")
        password = data.get("password")
        password2 = data.get("password2")
        if password != password2:
            raise serializers.ValidationError({"password2": "Password fields didn't match."})
        validate_email(data.get("email"))
        validate_password(data['password'])
        return data

    def create(self, validated_data):
        validated_data.pop('password2', None)
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password']
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
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("User with this email does not exist.")
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