from django.db import models

# Create your models here.
class Questions(models.Model):
    truth_dare = models.CharField(max_length=255)
    level = models.CharField(max_length=255)
    question = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'questions'