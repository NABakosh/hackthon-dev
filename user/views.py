# accounts/views.py

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny] # Разрешаем доступ всем для регистрации

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True) # Если не валидно, вернет 400
        user = serializer.save()
        token = AuthToken.objects.create(user)[1] # Создаем токен для пользователя
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        }, status=status.HTTP_201_CREATED)


# (Опционально) Login API - если захочешь сделать и логин
# from django.contrib.auth import authenticate
# from knox.views import LoginView as KnoxLoginView
#
# class LoginAPI(KnoxLoginView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, format=None):
#         # Этот метод наследуется от KnoxLoginView и уже обрабатывает логин
#         # Он использует 'knox.serializers.AuthTokenSerializer' по умолчанию,
#         # который ожидает username и password.
#         # Если пользователь успешно аутентифицирован, KnoxLoginView вернет токен.
#         # Можно кастомизировать, если нужно логиниться по email, например.
#         return super().post(request, format=None)


# (Опционально) Get User API - для получения данных текущего пользователя по токену
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated] # Только для аутентифицированных
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user