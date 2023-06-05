from django.urls import path, include
from rest_framework import routers
#from Usuarios.views import UsuariosViewSet
from GameMate7  import views

router= routers.DefaultRouter()
router.register(r'usuarios',views.UsuariosViewSet)
router.register(r'productos',views.verProductos)
#----
urlpatterns = [
     path('', include(router.urls)),
]