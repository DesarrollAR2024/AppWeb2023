from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuariosSerializer, ProductoSerializer
from .models import Usuarios, Producto
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset= Usuarios.objects.all()
    serializer_class=UsuariosSerializer

class verProductos(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer