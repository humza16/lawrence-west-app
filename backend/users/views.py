from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import DetailView, RedirectView, UpdateView
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import BasePermission, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from home.api.v1.serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt

User = get_user_model()


class UserDetailView(LoginRequiredMixin, DetailView):
    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, UpdateView):
    model = User
    fields = ["name"]

    def get_success_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})

    def get_object(self):
        return User.objects.get(username=self.request.user.username)


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):
    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()

class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user

class UserUpdateView(UpdateAPIView):
    # model = User
    # fields = ["name"]

    # def get_success_url(self):
    #     return reverse("users:detail", kwargs={"username": self.request.user.username})

    # def get_object(self):
    #     return User.objects.get(username=self.request.user.username)
    permission_classes = [IsAuthenticated, IsOwner]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @csrf_exempt
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)

        instance = self.get_object()

        if 'profile_picture' in request.FILES:
            instance.profile_photo.delete()
        
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()
