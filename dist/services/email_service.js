"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const emailjs_com_1 = require("emailjs-com");
emailjs_com_1.default.init('OGP_SQIceRym5TK8n'); // Replace with your public key
function sendEmail(formData) {
    return emailjs_com_1.default.send('service_1fxmv5f', 'template_28r23ui', {
        name: formData.name,
        message: formData.message,
        email: formData.email
    });
}
