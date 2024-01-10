from django.dispatch import receiver
from allauth.socialaccount.signals import social_account_added
from allauth.account.signals import user_logged_in

from users.models import AuthToken

@receiver(social_account_added)
def set_registration_method(sender, request, sociallogin, **kwargs):
    user = sociallogin.user
    if user:
        user.registration_method = "google"
        user.save()