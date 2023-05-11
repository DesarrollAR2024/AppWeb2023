from backend.gamemateapi.views import ProductoViewSet

router.register('api/productos', ProductoViewSet)

from django.urls import path, include
from rest_framework import routers
from .views import ProductoViewSet

router = routers.DefaultRouter()
router.register('productos', ProductoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

from django.urls import path
from .views import ProductoList, ProductoDetail

urlpatterns = [
    path('productos/', ProductoList.as_view()),
    path('productos/<int:pk>/', ProductoDetail.as_view()),
]
