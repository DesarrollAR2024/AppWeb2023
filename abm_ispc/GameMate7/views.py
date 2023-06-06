from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from rest_framework import status, generics
from .serializer import UsuariosSerializer, ProductoSerializer, CategoriaSerializer, ProveedorSerializer
from .models import Usuarios, Producto, Categoria, Proveedor
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

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

class verCategorias(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verProveedores(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

# Se agregan las clase de login y logout

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        email = request.data.get('email',None)
        pasword = request.data.get('password', None)
        user = authenticate (email=email, pasword=pasword)

        if user:
            login(request, user)
            return Response(UsuariosSerializer(user).data,status=status.HTTP_200_OK)
         
        return Response(status=status.HTTP_404_NOT_FOUND)

class LogoutView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        logout(request)

        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UsuariosSerializer