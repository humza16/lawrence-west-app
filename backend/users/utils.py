from django.contrib.auth import get_user_model
from google.oauth2 import id_token
import facebook
from sendgrid.helpers.mail import Mail, Email, To, Content
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import AuthenticationFailed
from lawrence_west_app_44469.settings import (
    GOOGLE_OAUTH2_CLIENT_ID,
    GOOGLE_OAUTH2_CLIENT_SECRET,
    DEFAULT_SENDER_EMAIL
)

User = get_user_model()

def get_id_token_from_response(response):
    if response and 'id_token' in response:
        return response['id_token']
    return None

def exchange_auth_code_for_token(auth_code):
    import requests
    token_url = 'https://oauth2.googleapis.com/token'

    data = {
        'code': auth_code,
        'client_id': GOOGLE_OAUTH2_CLIENT_ID,
        'client_secret': GOOGLE_OAUTH2_CLIENT_SECRET,
        'redirect_uri': 'postmessage',
        'grant_type': 'authorization_code'
    }

    response = requests.post(token_url, data=data)

    if response.status_code == 200:
        return response.json()
    else:
        return None

def validate_google_token(token):
    from google.auth.transport import requests
    id_info = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_OAUTH2_CLIENT_ID)

    return id_info

def create_or_update_user(id_info):
    email = id_info['email']
    first_name = id_info['given_name']
    last_name = id_info['family_name']
    google_id = id_info['sub']
    
    user, created = User.objects.get_or_create(
        email=email,
        first_name=first_name,
        last_name=last_name,
        external_id=google_id,
        defaults={'registration_method': 'google'}
    )
    if not created and user.registration_method != 'google':
        user.registration_method = 'google'
        user.save()
    
    is_first_login = created
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'is_first_login': is_first_login
    }

# def get_facebook_user_info(access_token):
#     import requests
#     user_info_url = 'https://graph.facebook.com/me'
#     params = {
#         'fields': 'id,first_name,last_name,email,picture.type(large)',
#         'access_token': access_token
#     }
#     response = requests.get(user_info_url, params=params)
#     return response.json()

def facebook_create_or_authenticate_user(fb_user_info):
    email = fb_user_info['email']
    first_name = fb_user_info['first_name']
    last_name = fb_user_info['last_name']
    faceboook_id = fb_user_info['id']

    user, created = User.objects.get_or_create(
        email=email,
        first_name=first_name,
        last_name=last_name,
        external_id=faceboook_id,
        defaults={'registration_method': 'facebook'}
    )
    if not created and user.registration_method != 'facebook':
        user.registration_method = 'facebook'
        user.save()

    is_first_login = created

    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'is_first_login': is_first_login,
    }

# def exchange_facebook_code_for_token(code):
#     import requests
#     token_url = 'https://graph.facebook.com/v12.0/oauth/access_token'

#     params = {
#         'client_id': 'YOUR_FACEBOOK_APP_ID',
#         # 'redirect_uri': 'http://127.0.0.1:8000/api/v1/facebook-auth/callback/',
#         'redirect_uri': 'postmessage',
#         'client_secret': 'YOUR_FACEBOOK_APP_SECRET',
#         'code': code,
#     }

#     response = requests.get(token_url, params=params)
#     return response.json()

# def get_facebook_user_info(access_token):
#     import requests
#     graph = facebook.GraphAPI(access_token=access_token)
#     profile = graph.request('/me?fields=name,email')
#     user_info_url = 'https://graph.facebook.com/me'
#     params = {'fields': 'id,first_name,last_name,email', 'access_token': access_token}
#     return requests.get(user_info_url, params=params).json()

def validate_facebook_auth_token(access_token):
    try:
        graph = facebook.GraphAPI(access_token=access_token)
        profile = graph.request('/me?fields=first_name,last_name,email,id')
        return profile
    except:
        return "The token is invalid or expired."


def compose_email_body(
    to_email : str,
    subject : str,
    content : str,
    from_email=DEFAULT_SENDER_EMAIL
):
    from_email = Email(from_email)
    to_email = To(to_email)
    content = Content("text/plain", content)
    mail = Mail(from_email, to_email, subject, content)

    mail_json = mail.get()

    return mail_json