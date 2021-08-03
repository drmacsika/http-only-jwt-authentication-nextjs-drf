from django.contrib.auth.models import User
from rest_framework import authentication, permissions, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer


class RegisterView(APIView):
    permission_classes = [
        AllowAny,
    ]

    def get(self, request, format=None):
        content = {"status": "request was permitted"}
        return Response(content)

    def post(self, request):

        try:
            data = request.data

            first_name = data["first_name"]
            last_name = data["last_name"]
            username = data["username"]
            password = data["password"]
            re_password = data["re_password"]

            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(username=username).exists():
                        user = User.objects.create_user(
                            first_name=first_name, last_name=last_name, username=username, password=password
                        )
                        user.save()
                        if User.objects.filter(username=username).exists():
                            return Response(
                                {"Success": "Accounts created successfully."}, status=status.HTTP_201_CREATED
                            )
                        else:
                            return Response(
                                {"error": "Something went wrong when trying to create account"},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            )
                    else:
                        return Response({"error": "Username is in use."}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response(
                        {"error": "Password must be at least 8 characters in length."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
            else:
                return Response({"error": "Passwords do not match"}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response(
                {"error": "Something went wrong when trying to register account."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class LoadUserView(APIView):
    permission_classes = [
        IsAuthenticated,
    ]

    def get(self, request, format=None):
        try:
            user = request.user
            user = UserSerializer(user)
            return Response({"user": user.data}, status=status.HTTP_200_OK)
        except:
            return Response(
                {"error": "Something went wrong when trying to load user."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
