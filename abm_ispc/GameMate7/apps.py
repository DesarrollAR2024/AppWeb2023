from django.apps import AppConfig


class Gamemate7Config(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'GameMate7'
    verbose_name='GameMate7'

    def ready(self): 
        import GameMate7.signals