# accounts/urls.py

from django.urls import path, include
from .views import RegisterAPI, UserAPI #, LoginAPI
from knox import views as knox_views

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    # path('login/', LoginAPI.as_view(), name='login'), # Если добавил LoginAPI
    path('user/', UserAPI.as_view(), name='user'), # Для получения информации о текущем пользователе
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'), # Выйти со всех устройств
    # Knox предоставляет и другие URL для управления токенами,
    # но для базовой регистрации они не обязательны
    # path('api/auth/', include('knox.urls')), # Это если хочешь все URL'ы от Knox
]