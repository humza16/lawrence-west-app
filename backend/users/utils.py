from django.contrib.auth import get_user_model
from google.oauth2 import id_token
from rest_framework_simplejwt.tokens import RefreshToken
from lawrence_west_app_44469.settings import GOOGLE_OAUTH2_CLIENT_ID, GOOGLE_OAUTH2_CLIENT_SECRET

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

    tokens = {
        'refresh': str(RefreshToken.for_user(user)),
        'access': str(RefreshToken.for_user(user).access_token),
        'is_first_login': created  # True if user was created now (first login)
    }
    return tokens