from django.urls import path, include
from rest_framework.routers import DefaultRouter

from modules.django_contact_us.contact_us.viewsets import ContactRequestViewSet

router = DefaultRouter()
router.register("", ContactRequestViewSet)

urlpatterns = [
    path("", include(router.urls)),
]