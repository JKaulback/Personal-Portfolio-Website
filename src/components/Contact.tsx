import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
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

    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const processReCaptcha = () => {
    setIsSubmitDisabled(false);
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8 pb-24 lg:pb-8 transition-colors duration-300">
      <div className="max-w-5xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
              : 'bg-blue-100 text-blue-700 border-blue-300'
          }`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Contact Me Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Get in touch with me here. I stay up-to-date with my emails and will get back to you promptly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info Module */}
          <div className={`p-8 rounded-2xl border-2 space-y-6 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-900 border-slate-800' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}>
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${
                isDarkMode 
                  ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
                  : 'bg-blue-100 text-blue-700 border-blue-300'
              }`}>
                Info Module
              </div>
              
              <div className="space-y-4">
                <div className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'bg-blue-900/20 border-blue-800/50' 
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-blue-900/50 text-blue-300 border-blue-800' 
                      : 'bg-blue-100 text-blue-600 border-blue-300'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-500' : 'text-slate-600'
                    }`}>
                      Email
                    </p>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-900'
                    }`}>
                      jtkaulback@gmail.com
                    </p>
                  </div>
                </div>

                <div className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'bg-blue-900/20 border-blue-800/50' 
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-blue-900/50 text-blue-300 border-blue-800' 
                      : 'bg-blue-100 text-blue-600 border-blue-300'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-500' : 'text-slate-600'
                    }`}>
                      Location
                    </p>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-900'
                    }`}>
                      Bridgewater, NS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${
                isDarkMode 
                  ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
                  : 'bg-blue-100 text-blue-700 border-blue-300'
              }`}>
                Social Module
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/JKaulback' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kaulback-832b8314b/' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 ${
                      isDarkMode 
                        ? 'bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white border-slate-700 hover:border-blue-500' 
                        : 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border-blue-200 hover:border-blue-500'
                    }`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Module */}
          <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border-2 space-y-4 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-900 border-slate-800' 
              : 'bg-white border-slate-200 shadow-lg'
          }`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-2 border ${
              isDarkMode 
                ? 'bg-blue-900/30 text-blue-300 border-blue-800' 
                : 'bg-blue-100 text-blue-700 border-blue-300'
            }`}>
              Form Module
            </div>

            <div>
              <label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
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
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
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
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
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
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
                placeholder="Enter your message here..."
              />
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-xl transition-colors border-2 ${
                  !isSubmitDisabled && isDarkMode 
                  ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700' 
                  : !isSubmitDisabled && !isDarkMode
                  ? 'bg-blue-500 text-white border-blue-400 hover:bg-blue-600 shadow-md'
                  : isDarkMode
                  ? 'bg-stone-600 text-white border-blue-500'
                  : 'bg-stone-600 border-blue-500'
              }`}
              disabled={isSubmitDisabled}

            >
              {isSubmitDisabled
              ? '↓ Are You Human?'
              : 'Send Message'}
            </button>
            
            <ReCAPTCHA 
              key={isDarkMode ? "dark" : "light"}
              sitekey="6Lc7FhosAAAAAKLBzv3reVs6b__-OPzrBDomfcUk" 
              onChange={processReCaptcha}
              theme={isDarkMode ? "dark" : "light"}
            />
              
          </form>
        </div>
      </div>
    </section>
  );
}