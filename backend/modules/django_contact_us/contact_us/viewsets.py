from django.conf import settings
from django.core.exceptions import ValidationError
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, status, serializers, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from sendgrid.helpers.mail import Mail
from .models import ContactRequest
from .serializers import ContactRequestSerializer
from utils import compose_email_body


# class ContactUs(APIView):
#     def post(self, request, *args, **kwargs):
#         """
#         Sends a message and name of the sender as mail to to your email that you have configured in settings.py as 'TO_EMAILS'.
#         """
#         email = request.data.get("email")
#         name = request.data.get("name")
#         message = request.data.get("message")

#         if email and email != "":
#             try:
#                 if email:
#                     message = Mail(
#                         from_email=email,
#                         to_emails=settings.TO_EMAILS,
#                         subject="Contact Us",
#                         html_content="<strong>{}, {}</strong>".format(name, message),
#                     )
#                     try:
#                         sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
#                         sg.send(message)
#                     except Exception as e:
#                         print(e)
#                     return Response(
#                         {
#                             "message": "Your query has been sent to admin",
#                             "status": status.HTTP_200_OK,
#                         },
#                         status=status.HTTP_200_OK,
#                     )
#             except:
#                 return Response(
#                     {
#                         "message": "Something went Wrong",
#                         "status": status.HTTP_404_NOT_FOUND,
#                     },
#                     status=status.HTTP_404_NOT_FOUND,
#                 )
@method_decorator(csrf_exempt, name='dispatch')
class ContactRequestViewSet(viewsets.ModelViewSet):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        try:
            serializer.is_valid(raise_exception=True)
        except serializers.ValidationError:
            return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            self.send_emails(serializer.validated_data)
        except ValidationError as e:
            return Response({"error": e.message}, status=status.HTTP_400_BAD_REQUEST)
        
        self.perform_create(serializer)
            
        return Response({'message': 'Your request has been submitted and emails sent.'}, status=status.HTTP_201_CREATED)

    def send_emails(self, data):
        sendgrid_client = settings.SENDGRID_CLIENT

        from_email = settings.DEFAULT_SUPPORT_EMAIL
        to_email = settings.DEFAULT_CONTACT_EMAIL
        subject = f"New Contact Request from {data['email']}"
        content = f"Email: {data['email']}\n\nSubject:\n{data['subject']}\n\nData Request:\n{data['help_request']}"

        mail_json = compose_email_body(
            to_email=to_email,
            subject=subject,
            content=content,
            from_email=from_email
        )

        response = sendgrid_client.client.mail.send.post(request_body=mail_json)

        if response.status_code != 202:
            raise ValidationError("Email not sent due to error. Please try again.")

        from_email = settings.DEFAULT_SUPPORT_EMAIL
        to_email = data['email']
        subject = f"We have received your request."
        content = f"Thank you for contacting us. We have received your request and will get back to you soon."

        mail_json = compose_email_body(
            to_email=to_email,
            subject=subject,
            content=content,
            from_email=from_email
        )

        response = sendgrid_client.client.mail.send.post(request_body=mail_json)

        if response.status_code != 202:
            raise ValidationError("Email not sent due to error. Please try again.")
        
    def get_permissions(self):
        if self.action in ['list', 'retrieve', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]