from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=100)
    platform = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.title

