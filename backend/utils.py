from sendgrid.helpers.mail import Mail, Email, To, Content
from lawrence_west_app_44469.settings import (
    DEFAULT_SENDER_EMAIL
)

def compose_email_body(
    to_email : str,
    subject : str,
    content : str,
    from_email=DEFAULT_SENDER_EMAIL
):
    from_email = Email(from_email)
    to_email = To(to_email)
    content = Content("text/plain", content)
    mail = Mail(from_email, to_email, subject, content)

    mail_json = mail.get()

    return mail_json