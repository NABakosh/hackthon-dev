from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ListViewset

router = DefaultRouter()

router.register(r'lists',ListViewset,basename= 'list' )

urlpatterns = [
    path('',include(router.urls) ),
]