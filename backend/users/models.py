from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from cities_light.models import City, Country

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        # Ensure these values are set
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        # Since we are using email as the username field, provide it as the username
        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """

    # First Name and Last Name do not cover name patterns
    # around the globe.
    # name = models.CharField(_("Name of User"), blank=True, null=True, max_length=255)
    objects = CustomUserManager()
    @property
    def name(self):
        return f"{self.first_name} {self.last_name}".strip()
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    date_of_birth = models.DateField(null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, default='male')
    address = models.TextField(null=True)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    REGISTRATION_METHODS = [
        ("email", "Email"),
        ("google", "Google"),
        ("facebook", "Facebook"),
    ]
    registration_method = models.CharField(
        max_length=10,
        choices=REGISTRATION_METHODS,
        default='email'
    )
    bio = models.TextField(blank=True, null=True)

    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['username']

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
