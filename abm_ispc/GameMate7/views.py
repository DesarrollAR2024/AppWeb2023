from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework import viewsets
from rest_framework import status, generics
from .serializer import UserSerializer, ProductoSerializer, CategoriaSerializer, ProveedorSerializer, FacturacionSerializer, AgregarProductoSerializer
from .models import Usuarios, Producto, Categoria, Proveedor, Facturacion, CustomUser
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
#MERCADO PAGO
import mercadopago
import json
from django.shortcuts import get_object_or_404

# Se agrega para gestionar vista de login y logout
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission

# Create your views here.


class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class verProductos(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    # permission_classes = [IsAuthenticated]
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    http_method_names = ['get']


class agregarProducto(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = AgregarProductoSerializer
    http_method_names = ['get', 'post']
   # permission_classes = [IsAdminUser]
    permission_classes = [AllowAny]

    def get_objet(self):
        queryset = self.get_queryset()
        serializer = AgregarProductoSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)


class modificarProducto(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = AgregarProductoSerializer
    #permission_classes = [IsAdminUser]
    permission_classes = [AllowAny]


class verCategorias(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class verProveedores(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

# PAGOS


class FacturacionViewSet(viewsets.ModelViewSet):
    queryset = Facturacion.objects.all()
    serializer_class = FacturacionSerializer

    def perform_create(self, serializer):
        # aquí obtenemos el id del usuario
        usuario_id = self.request.data.get('usuario')
        # y lo buscamos en la base de datos
        usuario = Usuarios.objects.get(id=usuario_id)
        # pasamos el objeto encontrado al serializer
        serializer.save(usuario=usuario)

# VISTA DE LOS USUARIOS REGISTRADOS


class ProfileView(generics.RetrieveUpdateAPIView):
    # Solo usuarios logueados pueden ver.
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']

    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user

# Se agregan las clase de login y logout


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        if user:
            login(request, user)
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)


class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)

        return Response(status=status.HTTP_200_OK)


class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer


class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get', 'post']
    permission_classes = [IsAdminUser]
    # permission_classes = [AllowAny]

    def get_objet(self):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)


class modificarUsuario(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]
    # permission_classes = [AllowAny]

class ProcessPaymentAPIView(APIView):
    def post(self, request):
        try:
            request_values = json.loads(request.body)
            payment_data = {
                "transaction_amount": float(request_values["transaction_amount"]),
                "token": request_values["token"],
                "installments": int(request_values["installments"]),
                "payment_method_id": request_values["payment_method_id"],
                "issuer_id": request_values["issuer_id"],
                "payer": {
                    "email": request_values["payer"]["email"],
                    "identification": {
                        "type": request_values["payer"]["identification"]["type"],
                        "number": request_values["payer"]["identification"]["number"],
                    },
                },
            }

            sdk = mercadopago.SDK("")

            payment_response = sdk.payment().create(payment_data)

            payment = payment_response["response"]
            status = {
                "id": payment["id"],
                "status": payment["status"],
                "status_detail": payment["status_detail"],
            }

            return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
        except Exception as e:
            return Response(data={"body": payment_response}, status=400)

class retornarPagado(APIView):  # Retornar custom json 
    def get(self, request):
        return Response({"respuesta": "aprobado"})
    

#Return Custom json, reduzca el stock segun lo enviado.
class customjsonybajarstock(APIView):
    permission_classes = [IsAdminUser] #Solo permito admins.
    def patch(self, request, pk, cantidad): #Utilizo patch para la modificacion parcial.
        model = get_object_or_404(Producto, pk=pk) #Pido el objeto mandandole el ID. 
        data = {"cantidad": model.cantidad - int(cantidad)} #Del json, le resto la cantidad.
        serializer = ProductoSerializer(model, data=data, partial=True) #Paso la data al serializer.

        if serializer.is_valid(): #Si es valido lo que mande
            serializer.save() #Guardo el response (va a mandar el json del producto con la cantidad actualizada)
            agregarcustomjson={"respuesta": "aprobado"}
            agregarcustomjson.update(serializer.data)  #A ese json anterior, le agrego la respuesta de la transaccion.
            return Response(agregarcustomjson)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)