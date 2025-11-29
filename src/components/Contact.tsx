import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha'
import { sendEmail } from '../services/email_service';
import { useTheme } from '../context/ThemeContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { SectionBadge } from './ui/SectionBadge';

export function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(true);
  }, [isDarkMode]);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jtkaulback@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Bridgewater, NS' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/JKaulback' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kaulback-832b8314b/' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(formData).then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const processReCaptcha = () => {
    setIsSubmitDisabled(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 pb-24 lg:pb-8 transition-colors duration-300">
      <div className="max-w-5xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <div className="flex flex-col items-start">
            <SectionBadge label="Contact Me Module" color="blue" className="mb-3" hideDot />
            <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Get In Touch
            </h2>
            <p className={`transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-600'
              }`}
              style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
            >
              Get in touch with me here. I stay up-to-date with my emails and will get back to you promptly
            </p>
          </div>

        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info Module */}
          <div className={`p-8 rounded-2xl border-2 space-y-6 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-700'
            : 'bg-white border-slate-200 shadow-lg'
            }`}
            style={{ borderColor: isDarkMode ? '#334155' : undefined }}
          >
            <div>
              <SectionBadge label="Info Module" color="blue" className="mb-4" hideDot />

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className={`flex items-start gap-4 p-4 rounded-xl border-2 ${isDarkMode
                    ? 'bg-indigo-900/20 border-indigo-500/50'
                    : 'bg-indigo-50 border-indigo-200'
                    }`}
                    style={{ borderColor: isDarkMode ? 'rgba(99, 102, 241, 0.5)' : undefined }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-300 ${isDarkMode
                      ? 'bg-indigo-900/50 text-[#c7d2fe] border-indigo-500'
                      : 'bg-indigo-100 text-indigo-600 border-indigo-300'
                      }`}
                      style={{
                        color: isDarkMode ? '#c7d2fe' : undefined,
                        borderColor: isDarkMode ? '#6366f1' : undefined
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-[#cbd5e1]' : 'text-slate-600'
                        }`}
                        style={{ color: isDarkMode ? '#cbd5e1' : undefined }}
                      >
                        {label}
                      </p>
                      <p className={`transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-900'
                        }`}
                        style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionBadge label="Social Module" color="blue" className="mb-4" hideDot />
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 cursor-pointer ${isDarkMode
                      ? 'bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white border-slate-600 hover:border-indigo-400'
                      : 'bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border-indigo-200 hover:border-indigo-500'
                      }`}
                    aria-label={label}
                    style={{ borderColor: isDarkMode ? '#475569' : undefined }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Module */}
          <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border-2 space-y-4 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-700'
            : 'bg-white border-slate-200 shadow-lg'
            }`}
            style={{ borderColor: isDarkMode ? '#334155' : undefined }}
          >
            <SectionBadge label="Form Module" color="blue" className="mb-2" hideDot />

            <div>
              <label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className={isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Enter your message here..."
                className={`resize-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
              />
            </div>

            <Button
              type="submit"
              className={`w-full px-6 py-3 rounded-xl transition-colors border-2 ${isSubmitDisabled
                ? 'bg-slate-600 border-purple-500 text-white'
                : isDarkMode
                  ? 'bg-purple-600 text-white border-purple-500 hover:bg-purple-700'
                  : 'bg-purple-500 text-white border-purple-400 hover:bg-purple-600 shadow-md'
                }`}
              disabled={isSubmitDisabled}
              style={{
                borderColor: isDarkMode ? '#6366f1' : undefined,
                backgroundColor: isSubmitDisabled
                  ? '#57534e'
                  : undefined, // Let tailwind handle hover states
                color: '#ffffff',
                cursor: isSubmitDisabled ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitDisabled ? '↓ Are You Human?' : 'Send Message'}
            </Button>

            <ReCAPTCHA
              key={isDarkMode ? "dark" : "light"}
              sitekey="6Lc7FhosAAAAAKLBzv3reVs6b__-OPzrBDomfcUk"
              onChange={processReCaptcha}
              onExpired={() => setIsSubmitDisabled(true)}
              theme={isDarkMode ? "dark" : "light"}
            />

          </form>
        </div>
      </div>
    </section>
  );
}