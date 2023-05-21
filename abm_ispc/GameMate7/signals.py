from django.contrib.auth.models import Group
from django.dispatch import receiver
from django.db.models.signals import post_save

from .models import Usuarios 

@receiver(post_save , sender=Usuarios) 
def add_user_to_usuariosregistrados_group(sender , instance , create , **kwargs):
    if create:
        try:    
            Usuariosregistrados= Group.objects.get(name="Usuariosregistrados")
        except Group.DoesNotExist:
            Usuariosregistrados=Group.objects.create(name='Usuariosregistrados')
            Usuariosregistrados=Group.objects.create(name='Clientes')
            Usuariosregistrados=Group.objects.create(name='Provedores')
            Usuariosregistrados=Group.objects.create(name='Administradores')
            Usuariosregistrados=Group.objects.create(name='Productos en Stock')

        instance.user.groups.add(Usuariosregistrados)
