from allauth.socialaccount.signals import social_account_added
from django.dispatch import receiver

@receiver(social_account_added)
def set_registration_method(sender, request, sociallogin, **kwargs):
    user = sociallogin.user
    if user:
        user.registration_method = "google"
        user.save()