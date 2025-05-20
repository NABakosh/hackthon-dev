from rest_framework import serializers
from .models import List

class ListSerialazer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only = True)
    class Meta:
        model = List
        fields= '__all__'

