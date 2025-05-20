from django.shortcuts import render
from rest_framework import viewsets
from .serialazer import List, ListSerialazer


class ListViewset(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerialazer
