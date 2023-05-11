from django.shortcuts import render

from .models import Producto

from rest_framework.generics import ListAPIView

class ProductoList(ListAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


from django.urls import path, include
from rest_framework import routers
from .views import ProductoViewSet

router = routers.DefaultRouter()
router.register('productos', ProductoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
from django.shortcuts import render
from django.http import JsonResponse
from .models import Game

def game_list(request):
    games = Game.objects.all()
    data = {'games': list(games.values())}
    return JsonResponse(data)

def game_detail(request, pk):
    game = Game.objects.get(pk=pk)
    data = {'game': {
        'title': game.title,
        'platform': game.platform,
        'genre': game.genre,
        'price': game.price,
    }}
    return JsonResponse(data)
