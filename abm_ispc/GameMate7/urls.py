from django.urls import path
from GameMate7.views import RegistroUsuarioView, LoginUsuarioView

app_name = 'GameMate7'

urlpatterns = [
    path('registro/', RegistroUsuarioView.as_view(), name='registro'),
    path('login/', LoginUsuarioView.as_view(), name='login'),
    # Otras rutas URL de la aplicación GameMate7...
]

