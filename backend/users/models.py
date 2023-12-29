from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from cities_light.models import Country, City


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
    name = models.CharField(_("Name of User"), null=True, max_length=255)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField(null=True)
    profile_picture = models.ImageField(null=True, upload_to='profile_pictures/')
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, null=True)
    address = models.TextField(null=True)
    country = models.ForeignKey(Country, null=True, on_delete=models.SET_NULL)
    city = models.ForeignKey(City, null=True, on_delete=models.SET_NULL)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
