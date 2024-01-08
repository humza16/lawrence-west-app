from django.urls import path
from users.views import (
    # user_redirect_view,
    # user_update_view,
    # user_detail_view,
    UserDetailView,
    UserRegistrationView,
    CustomTokenObtainPairView,
    GoogleTokenObtainView,
    PasswordResetView,
    PasswordResetConfirmView,
    ProfileUpdateView,
)

app_name = "users"
urlpatterns = [
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
    path('user/info/', UserDetailView.as_view(), name='user-info'),
    path('signup/', UserRegistrationView.as_view(), name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/google/', GoogleTokenObtainView.as_view(), name='google-token-obtain'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile-update'),
]
