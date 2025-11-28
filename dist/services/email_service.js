import emailjs from 'emailjs-com';
emailjs.init('OGP_SQIceRym5TK8n'); // Replace with your public key
export function sendEmail(formData) {
    return emailjs.send('service_1fxmv5f', 'template_28r23ui', {
        name: formData.name,
        message: formData.message,
        email: formData.email
    });
}
