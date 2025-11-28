import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '../services/email_service';
export function Contact({ isDarkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'jtkaulback@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Bridgewater, NS' },
    ];
    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/JKaulback' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kaulback-832b8314b/' },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData).then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
            .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message. Please try again.');
        });
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const processReCaptcha = () => {
        setIsSubmitDisabled(false);
    };
    const getInputClasses = () => `w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDarkMode
        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`;
    return (_jsx("section", { id: "contact", className: "min-h-screen flex items-center justify-center p-8 pb-24 lg:pb-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-5xl w-full", children: [_jsxs("div", { className: `mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200 shadow-lg'}`, children: [_jsxs("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
                                ? 'bg-blue-900/30 text-blue-300 border-blue-800'
                                : 'bg-blue-100 text-blue-700 border-blue-300'}`, children: [_jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }), "Contact Me Module"] }), _jsx("h2", { className: `mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`, children: "Get In Touch" }), _jsx("p", { className: `transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`, children: "Get in touch with me here. I stay up-to-date with my emails and will get back to you promptly" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: `p-8 rounded-2xl border-2 space-y-6 transition-colors duration-300 ${isDarkMode
                                ? 'bg-slate-900 border-slate-800'
                                : 'bg-white border-slate-200 shadow-lg'}`, children: [_jsxs("div", { children: [_jsx("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${isDarkMode
                                                ? 'bg-blue-900/30 text-blue-300 border-blue-800'
                                                : 'bg-blue-100 text-blue-700 border-blue-300'}`, children: "Info Module" }), _jsx("div", { className: "space-y-4", children: contactInfo.map(({ icon: Icon, label, value }) => (_jsxs("div", { className: `flex items-start gap-4 p-4 rounded-xl border-2 ${isDarkMode
                                                    ? 'bg-blue-900/20 border-blue-800/50'
                                                    : 'bg-blue-50 border-blue-200'}`, children: [_jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-300 ${isDarkMode
                                                            ? 'bg-blue-900/50 text-blue-300 border-blue-800'
                                                            : 'bg-blue-100 text-blue-600 border-blue-300'}`, children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("p", { className: `text-sm transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`, children: label }), _jsx("p", { className: `transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-900'}`, children: value })] })] }, label))) })] }), _jsxs("div", { children: [_jsx("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${isDarkMode
                                                ? 'bg-blue-900/30 text-blue-300 border-blue-800'
                                                : 'bg-blue-100 text-blue-700 border-blue-300'}`, children: "Social Module" }), _jsx("div", { className: "flex gap-3", children: socialLinks.map(({ icon: Icon, label, href }) => (_jsx("a", { href: href, className: `w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 ${isDarkMode
                                                    ? 'bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white border-slate-700 hover:border-blue-500'
                                                    : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border-blue-200 hover:border-blue-500'}`, "aria-label": label, children: _jsx(Icon, { className: "w-5 h-5" }) }, label))) })] })] }), _jsxs("form", { onSubmit: handleSubmit, className: `p-8 rounded-2xl border-2 space-y-4 transition-colors duration-300 ${isDarkMode
                                ? 'bg-slate-900 border-slate-800'
                                : 'bg-white border-slate-200 shadow-lg'}`, children: [_jsx("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-2 border ${isDarkMode
                                        ? 'bg-blue-900/30 text-blue-300 border-blue-800'
                                        : 'bg-blue-100 text-blue-700 border-blue-300'}`, children: "Form Module" }), _jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: `block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`, children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: getInputClasses(), placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: `block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`, children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: getInputClasses(), placeholder: "your.email@example.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: `block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`, children: "Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 5, className: `${getInputClasses()} resize-none`, placeholder: "Enter your message here..." })] }), _jsx("button", { type: "submit", className: `w-full px-6 py-3 rounded-xl transition-colors border-2 ${isSubmitDisabled
                                        ? 'bg-stone-600 border-blue-500 text-white'
                                        : isDarkMode
                                            ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700'
                                            : 'bg-blue-500 text-white border-blue-400 hover:bg-blue-600 shadow-md'}`, disabled: isSubmitDisabled, children: isSubmitDisabled ? '↓ Are You Human?' : 'Send Message' }), _jsx(ReCAPTCHA, { sitekey: "6Lc7FhosAAAAAKLBzv3reVs6b__-OPzrBDomfcUk", onChange: processReCaptcha, theme: isDarkMode ? "dark" : "light" }, isDarkMode ? "dark" : "light")] })] })] }) }));
}
