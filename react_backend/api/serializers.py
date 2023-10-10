from rest_framework import serializers
from .models import python_React

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = python_React
        fields = '__all__'