"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Landing = Landing;
const lucide_react_1 = require("lucide-react");
const ImageWithFallback_1 = require("./figma/ImageWithFallback");
const profile_picture_jpg_1 = require("../assets/profile-picture.jpg");
const react_1 = require("react");
function Landing({ isDarkMode }) {
    const [showScrollIndicator, setShowScrollIndicator] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            }
            else {
                setShowScrollIndicator(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<section id="home" className="min-h-screen flex items-center justify-center p-8 relative transition-colors duration-300">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Profile Photo - Modular Block */}
        <div className="flex justify-center mb-8">
          <div className={`relative p-2 rounded-3xl border-4 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-800 shadow-lg'
            : 'bg-white border-purple-200 shadow-lg shadow-purple-200/50'}`}>
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden">
              <ImageWithFallback_1.ImageWithFallback src={profile_picture_jpg_1.default} alt="Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        {/* Main Heading - Modular Block */}
        <div className="space-y-4">
          
          <h1 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Hi, I'm Justin Kaulback
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Junior Developer creating scalable, well organized solutions with modern technologies
          </p>
        </div>

        {/* CTA Buttons - Modular Blocks */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button onClick={() => {
            const element = document.getElementById('work');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }} className={`px-8 py-4 rounded-lg transition-all hover:scale-105 border-2 cursor-pointer ${isDarkMode
            ? 'bg-purple-600 text-white border-purple-500 hover:bg-purple-700 '
            : 'bg-purple-500 text-white border-purple-400 hover:bg-purple-600 '}`}>
            View My Work
          </button>
          <button onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }} className={`px-8 py-4 border-2 rounded-lg transition-all hover:scale-105 cursor-pointer ${isDarkMode
            ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-purple-600 hover:text-purple-400'
            : 'bg-white border-purple-300 text-purple-900 hover:border-purple-500 hover:text-purple-700'}`}>
            Get In Touch
          </button>
        </div>

        {/* Social Links - Modular Blocks */}
        <div className="flex gap-4 justify-center pt-8">
          {[
            { icon: lucide_react_1.Github, label: 'GitHub', href: 'https://github.com/JKaulback' },
            { icon: lucide_react_1.Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kaulback-832b8314b/' },
            { icon: lucide_react_1.Mail, label: 'Email', href: '#contact' },
        ].map(({ icon: Icon, label, href }) => (<a key={label} href={href} className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110 border-2 ${isDarkMode
                ? 'bg-slate-900 text-slate-400 hover:bg-purple-600 hover:text-white border-slate-800 hover:border-purple-500'
                : 'bg-white text-purple-700 hover:bg-purple-500 hover:text-white border-purple-200 hover:border-purple-400'}`} aria-label={label}>
              <Icon className="w-5 h-5"/>
            </a>))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (<button onClick={scrollToAbout} className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`}>
          <lucide_react_1.ArrowDown className="w-6 h-6"/>
        </button>)}
    </section>);
}
