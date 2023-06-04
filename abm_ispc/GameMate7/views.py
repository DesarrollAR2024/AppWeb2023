from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuariosSerializer
from .models import Usuarios
# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset= Usuarios.objects.all()
    serializer_class=UsuariosSerializer