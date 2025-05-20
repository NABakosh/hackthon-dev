from django.db import models
import uuid
class List(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=200)
    complete = models.BooleanField()
    mail = models.EmailField()  
    password = models.CharField(max_length=255,null= False)
