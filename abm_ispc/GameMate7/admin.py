from django.contrib import admin
from .models import Categoria, Cliente, Compatibilidad, Direccion, Dispositivos, Envio, Facturacion, Galeria, Juegos, Jugar, Orden, Pedido, Producto, Proveedor, Redes, Usuarios



# Register your models here.

from django.contrib import admin
from .models import Categoria, Cliente, Proveedor, Direccion, Usuarios, Juegos, Jugar, Dispositivos, Compatibilidad, Envio, Orden, Facturacion, Galeria, Pedido, Producto, Redes

class ClienteAdmin(admin.ModelAdmin):
    list_display = ("id_cliente", "nombre_completo", "apellido", "dni", "telefono", "nickname")

admin.site.register(Categoria)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Proveedor)
admin.site.register(Direccion)
admin.site.register(Usuarios)
admin.site.register(Juegos)
admin.site.register(Jugar)
admin.site.register(Dispositivos)
admin.site.register(Compatibilidad)
admin.site.register(Envio)
admin.site.register(Orden)
admin.site.register(Facturacion)
admin.site.register(Galeria)
admin.site.register(Pedido)
admin.site.register(Producto)
admin.site.register(Redes)

















