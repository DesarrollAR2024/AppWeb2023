from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from rest_framework import status, generics
from .serializer import UsuariosSerializer, ProductoSerializer, CategoriaSerializer, ProveedorSerializer, FacturacionSerializer
from .models import Usuarios, Producto, Categoria, Proveedor, Facturacion, CustomUser
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
<<<<<<< HEAD
=======
from rest_framework.response import Response
from rest_framework.views import APIView
>>>>>>> 7145f9b056f1e38c670511a727951b5fa9c0101b

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

<<<<<<< HEAD
# Se agregan las clase de login y logount

class LoginView(APIView):
=======
class verCategorias(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class verProveedores(viewsets.ModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

class agregarProducto(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                        status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#PAGOS    
class FacturacionViewSet(viewsets.ModelViewSet):
    queryset=Facturacion.objects.all()
    serializer_class=FacturacionSerializer
    def perform_create(self, serializer):
        usuario_id = self.request.data.get('usuario') # aquí obtenemos el id del usuario
        usuario = Usuarios.objects.get(id=usuario_id) # y lo buscamos en la base de datos
        serializer.save(usuario=usuario) # pasamos el objeto encontrado al serializer

#VISTA DE LOS USUARIOS REGISTRADOS   
class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated] #Solo usuarios logueados pueden ver.
    serializer_class = UsuariosSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user

# Se agregan las clase de login y logout

class LoginView(APIView):
    permission_classes = [AllowAny] 
>>>>>>> 7145f9b056f1e38c670511a727951b5fa9c0101b
    def post(self, request):
        email = request.data.get('email',None)
        pasword = request.data.get('password', None)
        user = authenticate (email=email, pasword=pasword)

        if user:
            login(request, user)
<<<<<<< HEAD
            return Response(status=status.HTTP_200_OK)
=======
            return Response(UsuariosSerializer(user).data,status=status.HTTP_200_OK)
>>>>>>> 7145f9b056f1e38c670511a727951b5fa9c0101b
         
        return Response(status=status.HTTP_404_NOT_FOUND)

class LogoutView(APIView):
<<<<<<< HEAD
    def post(self, request):
        logout(request)

        return Response(status=status.HTTP_200_OK)
=======
    permission_classes = [AllowAny] 
    def post(self, request):
        logout(request)

        return Response(status=status.HTTP_200_OK)
    
class SignupView(generics.CreateAPIView):
    serializer_class = UsuariosSerializer

class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UsuariosSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UsuariosSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)
>>>>>>> 7145f9b056f1e38c670511a727951b5fa9c0101b
