from rest_framework import serializers
from .models import Usuarios, Producto, Categoria, Proveedor, Facturacion, CustomUser

class UsuariosSerializer(serializers.ModelSerializer):
 class Meta:
  model= CustomUser 
  fields='__all__'
  #fields=('nombre','observacion')

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'

class FacturacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facturacion
        fields = '__all__'