from django.urls import path, include
from rest_framework import routers
#from Usuarios.views import UsuariosViewSet
from GameMate7 import views
#Se configura url de la app
from.views import LoginView, LogoutView

router= routers.DefaultRouter()
router.register(r'usuarios',views.UsuariosViewSet)
router.register(r'productos',views.verProductos)
router.register(r'categorias',views.verCategorias)
router.register(r'proveedores',views.verProveedores)
#----
urlpatterns = [
     path('', include(router.urls)),
     path('auth/login/', LoginView.as_view(), name='auth_login'),
     path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
]