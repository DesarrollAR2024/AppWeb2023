from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from GameMate7.serializers import RegistroUsuarioSerializer, LoginUsuarioSerializer
from django.http import HttpResponse

# Create your views here.
class RegistroUsuarioView(generics.CreateAPIView):
    serializer_class = RegistroUsuarioSerializer
    permission_classes = (permissions.AllowAny,)

class LoginUsuarioView(generics.GenericAPIView):
    serializer_class = LoginUsuarioSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(
            request,
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password']
        )
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
