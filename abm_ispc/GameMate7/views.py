from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuariosSerializer, ProductoSerializer
from .models import Usuarios, Producto
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

#Se agrega para gestionar vista de login y logout
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset= Usuarios.objects.all()
    serializer_class=UsuariosSerializer

class verProductos(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

# Se agregan las clase de login y logount

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email',None)
        pasword = request.data.get('password', None)
        user = authenticate (email=email, pasword=pasword)

        if user:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
         
        return Response(status=status.HTTP_404_NOT_FOUND)

class LogoutView(APIView):
    def post(self, request):
        logout(request)

        return Response(status=status.HTTP_200_OK)