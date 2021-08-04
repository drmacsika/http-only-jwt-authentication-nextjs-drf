from django.urls import path

from .views import LoadUserView, RegisterView

urlpatterns = [
    path("signup/", RegisterView.as_view()),
    path("user/", LoadUserView.as_view()),
]
