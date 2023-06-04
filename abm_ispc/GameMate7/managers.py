from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, first_name, last_name, password = None):
        if not email:
            raise ValueError('El email debe ser establecido')
        #email = self.normalize_email(email)
        user = self.model(email= self.normalize_email(email), username=username, first_name=first_name, last_name=last_name)
        user.set_password(password)
        #user.save(using=self._db)
        return user

    def create_superuser(self, email, username,first_name, last_name, password):
        user = self.create_user(email, username,first_name, last_name, password=password)
        #ser.is_staff = True
        #user.set_is_staff(True)
        user.is_superuser = True
        #user.save(using=self._db)
        user.usuario_administrado = True
        user.save()
        return user
        

