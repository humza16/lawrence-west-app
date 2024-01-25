from rest_framework import serializers
from django.core.validators import EmailValidator
from .models import ContactRequest

class ContactRequestSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[EmailValidator()])
    subject = serializers.CharField(required=True)
    help_request = serializers.CharField(required=True)

    class Meta:
        model = ContactRequest
        fields = ['email', 'subject', 'help_request']

    def validate(self, data):
        """
        Check that subject and help_request are not empty.
        """
        if not data.get('email') or not data.get('subject') or not data.get('help_request'):
            raise serializers.ValidationError("All fields are required.")
        return data