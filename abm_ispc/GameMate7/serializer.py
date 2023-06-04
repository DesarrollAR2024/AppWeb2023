from rest_framework import serializers
from .models import Usuarios, Producto

class UsuariosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Usuarios 
  fields='__all__'
  #fields=('nombre','observacion')

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'