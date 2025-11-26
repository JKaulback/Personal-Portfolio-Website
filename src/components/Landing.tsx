import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingProps {
  isDarkMode: boolean;
}

export function Landing({ isDarkMode }: LandingProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center p-8 relative transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Profile Photo - Modular Block */}
        <div className="flex justify-center mb-8">
          <div className={`relative p-2 rounded-3xl border-4 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-900 border-slate-800' 
              : 'bg-white border-purple-200 shadow-lg shadow-purple-200/50'
          }`}>
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Decorative corner modules */}
              <div className={`absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 ${
                isDarkMode ? 'border-purple-400' : 'border-purple-500'
              }`} />
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 ${
                isDarkMode ? 'border-purple-400' : 'border-purple-500'
              }`} />
            </div>
          </div>
        </div>

        {/* Main Heading - Modular Block */}
        <div className="space-y-4">
          <div className={`inline-block px-4 py-2 rounded-lg text-sm border-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-900 text-purple-300 border-purple-800' 
              : 'bg-purple-50 text-purple-700 border-purple-300 shadow-sm'
          }`}>
            <span className="inline-block mr-2">👋</span>
            <span>Welcome to my portfolio</span>
          </div>
          
          <h1 className={`transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Hi, I'm Alex Morgan
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Full Stack Developer crafting beautiful digital experiences with modern web technologies
          </p>
        </div>

        {/* CTA Buttons - Modular Blocks */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a 
            href="#projects" 
            className={`px-8 py-4 rounded-lg transition-all hover:scale-105 border-2 ${
              isDarkMode 
                ? 'bg-purple-600 text-white border-purple-500 hover:bg-purple-700 shadow-lg shadow-purple-900/20' 
                : 'bg-purple-500 text-white border-purple-400 hover:bg-purple-600 shadow-lg shadow-purple-500/20'
            }`}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className={`px-8 py-4 border-2 rounded-lg transition-all hover:scale-105 ${
              isDarkMode 
                ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-purple-600 hover:text-purple-400' 
                : 'bg-white border-purple-300 text-purple-900 hover:border-purple-500 hover:text-purple-700 shadow-md'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links - Modular Blocks */}
        <div className="flex gap-4 justify-center pt-8">
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Mail, label: 'Email', href: '#contact' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110 border-2 ${
                isDarkMode 
                  ? 'bg-slate-900 text-slate-400 hover:bg-purple-600 hover:text-white border-slate-800 hover:border-purple-500' 
                  : 'bg-white text-purple-700 hover:bg-purple-500 hover:text-white border-purple-200 hover:border-purple-400 shadow-md'
              }`}
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${
          isDarkMode ? 'text-purple-400' : 'text-purple-500'
        }`}
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}