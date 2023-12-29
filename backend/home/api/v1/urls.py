from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    register_by_access_token
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")

urlpatterns = [
    path("", include(router.urls)),
    re_path('api/register-by-access-token/' + r'social/(?P<backend>[^/]+)/$', register_by_access_token),
]
