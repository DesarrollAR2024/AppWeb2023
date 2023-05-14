from .models import Producto
from rest_framework import serializers
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

from rest_framework import serializers
from .models import usuarios

class usuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = usuarios
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = usuarios(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return usuarios

