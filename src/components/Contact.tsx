import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import { sendEmail } from '../services/email_service';

interface ContactProps {
  isDarkMode: boolean;
}

export function Contact({ isDarkMode }: ContactProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const processReCaptcha = () => {
    setIsSubmitDisabled(false);
  };

  const getInputClasses = () => `w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${isDarkMode
    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
    }`

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 pb-24 lg:pb-8 transition-colors duration-300">
      <div className="max-w-5xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border-2 transition-colors duration-300 ${isDarkMode
            ? 'bg-indigo-900/30 text-[#c7d2fe] border-indigo-500'
            : 'bg-indigo-100 text-indigo-700 border-indigo-300'
            }`}
            style={{
              color: isDarkMode ? '#c7d2fe' : undefined,
              borderColor: isDarkMode ? '#6366f1' : undefined
            }}
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            Contact Me Module
          </div>
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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info Module */}
          <div className={`p-8 rounded-2xl border-2 space-y-6 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-700'
            : 'bg-white border-slate-200 shadow-lg'
            }`}
            style={{ borderColor: isDarkMode ? '#334155' : undefined }}
          >
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border-2 ${isDarkMode
                ? 'bg-indigo-900/30 text-[#c7d2fe] border-indigo-500'
                : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                }`}
                style={{
                  color: isDarkMode ? '#c7d2fe' : undefined,
                  borderColor: isDarkMode ? '#6366f1' : undefined
                }}
              >
                Info Module
              </div>

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
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border-2 ${isDarkMode
                ? 'bg-indigo-900/30 text-[#c7d2fe] border-indigo-500'
                : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                }`}
                style={{
                  color: isDarkMode ? '#c7d2fe' : undefined,
                  borderColor: isDarkMode ? '#6366f1' : undefined
                }}
              >
                Social Module
              </div>
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
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-2 border-2 ${isDarkMode
              ? 'bg-indigo-900/30 text-[#c7d2fe] border-indigo-500'
              : 'bg-indigo-100 text-indigo-700 border-indigo-300'
              }`}
              style={{
                color: isDarkMode ? '#c7d2fe' : undefined,
                borderColor: isDarkMode ? '#6366f1' : undefined
              }}
            >
              Form Module
            </div>

            <div>
              <label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={getInputClasses()}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={getInputClasses()}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${getInputClasses()} resize-none`}
                placeholder="Enter your message here..."
              />
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-xl transition-colors border-2 ${isSubmitDisabled
                ? 'bg-stone-600 border-indigo-500 text-white'
                : isDarkMode
                  ? 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700'
                  : 'bg-indigo-500 text-white border-indigo-400 hover:bg-indigo-600 shadow-md'
                }`}
              disabled={isSubmitDisabled}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                borderColor: isDarkMode ? '#6366f1' : undefined,
                backgroundColor: isSubmitDisabled
                  ? '#57534e'
                  : (isHovered ? '#4f46e5' : '#6366f1'),
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {isSubmitDisabled ? '↓ Are You Human?' : 'Send Message'}
            </button>

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