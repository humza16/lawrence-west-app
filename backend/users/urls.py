from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
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
    ReceiveGoogleTokenView,
    FacebookSocialAuthView,
    UserEditView,
    ChangePasswordView,
    LogoutView,
)

app_name = "users"
urlpatterns = [
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
    path('user-info/', UserDetailView.as_view(), name='user-info'),
    path('signup/', UserRegistrationView.as_view(), name='signup'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('login/google/', GoogleTokenObtainView.as_view(), name='google-token-obtain'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    # path('profile/update/', ProfileUpdateView.as_view(), name='profile-update'),
    path('edit-profile/', UserEditView.as_view(), name='edit-profile'),
    path('login/google/', ReceiveGoogleTokenView.as_view(), name='google-auth'),
    path('login/facebook/', FacebookSocialAuthView.as_view(), name='facebook-auth'),
]
