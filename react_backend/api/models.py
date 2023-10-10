from django.db import models


class python_React(models.Model):
    user = models.CharField(max_length=100)
    task = models.CharField(max_length=100)

    def __str__(self):
        return f"post:{self.title}"


# Create your models here.
