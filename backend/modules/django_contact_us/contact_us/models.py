from django.db import models

class ContactRequest(models.Model):
    
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    help_request = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)