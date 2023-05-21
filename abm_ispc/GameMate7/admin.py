from django.contrib import admin
from .models import Categoria, Cliente, Proveedor, Direccion, Usuarios, Juegos, Jugar, Dispositivos, Compatibilidad, Envio, Orden, Facturacion, Galeria, Pedido, Producto, Redes, Registro , Login 


# Register your models here.

class ClienteAdmin(admin.ModelAdmin):
    list_display = ("id_cliente", "nombre_completo", "apellido", "dni", "telefono", "nickname")
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id_categoria", "nombre", "informacion")
class ProveedorAdmin(admin.ModelAdmin):
    list_display = ("id_proveedor", "nombre", "telefono", "cuil", "telefono", "email")
class DireccionAdmin(admin.ModelAdmin):
    list_display = ("id_direccion", "direccion", "cod_post", "provincia", "localidad")
class UsuariosAdmin(admin.ModelAdmin):
    list_display = ("nickname", "nombre", "apellido", "fecha_nac", "provincia", "email")
class JuegosAdmin(admin.ModelAdmin):
    list_display = ("id_juego", "juego")
class JugarAdmin(admin.ModelAdmin):
    list_display = ("nivel_jugador",)
class DispositivosAdmin(admin.ModelAdmin):
    list_display = ("id_dispositivos", "pc")
class EnvioAdmin(admin.ModelAdmin):
    list_display = ("id_envio", "fecha_envio", "localidad", "provincia", "cod_post", "estado_envio", "direccion_envio", "metodo_envio")
class OrdenAdmin(admin.ModelAdmin):
    list_display = ("id_orden", "fecha", "monto_total", "precio_unitario", "cantidad_pedido")
class FacturacionAdmin(admin.ModelAdmin):
    list_display = ("numero_factura", "metodo_pago", "costo_envio", "fecha_factura", "fecha_pago", "monto_total", "estado_pago")
class PedidoAdmin(admin.ModelAdmin):
    list_display = ("id_pedido", "fecha_pedido", "estado_pedido")
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("id_producto", "precio", "nombre", "descripcion")
class RegistroAdmin(admin.ModelAdmin):
    list_display = ( "nombre", "apellido", 'nombre_usuario', "email" )


admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Proveedor, ProveedorAdmin)
admin.site.register(Direccion, DireccionAdmin)
admin.site.register(Usuarios, UsuariosAdmin)
admin.site.register(Juegos, JuegosAdmin)
admin.site.register(Jugar, JugarAdmin)
admin.site.register(Dispositivos, DispositivosAdmin)
admin.site.register(Compatibilidad)
admin.site.register(Envio, EnvioAdmin)
admin.site.register(Orden, OrdenAdmin)
admin.site.register(Facturacion, FacturacionAdmin)
admin.site.register(Galeria)
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Redes)
admin.site.register(Registro, RegistroAdmin)
admin.site.register(Login )


















