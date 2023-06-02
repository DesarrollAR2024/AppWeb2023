"""
URL configuration for abm_ispc project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.urls import include
from django.urls import path, include
from django.contrib import admin
from django.urls import path
from GameMate7.views import RegistroUsuarioView, LoginUsuarioView

urlpatterns = [
    path('registro/', RegistroUsuarioView.as_view(), name='registro'),
    path('login/', LoginUsuarioView.as_view(), name='login'),
]


urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns = [
    # Otras rutas URL de tu proyecto...

    path('game_mate/', include('GameMate7.urls')),
]
