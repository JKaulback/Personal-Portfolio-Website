
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

emailjs.init('OGP_SQIceRym5TK8n'); // Replace with your public key

interface FormData {
    name: string;
    email: string;
    message: string;
}

export function sendEmail(formData: FormData): Promise<EmailJSResponseStatus> {
  return emailjs.send('service_1fxmv5f', 'template_28r23ui', {
    name: formData.name,
    message: formData.message,
    email: formData.email
  })
}

