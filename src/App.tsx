import { useState, useEffect } from 'react';
import { LeftNav } from './components/LeftNav';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Resume } from './components/Resume';
import { ExtraCredit } from './components/ExtraCredit';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'resume', 'extra', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-950' 
        : 'bg-slate-100'
    }`}>
      <LeftNav activeSection={activeSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="flex-1 ml-0 lg:ml-24">
        <Landing isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Resume isDarkMode={isDarkMode} />
        <ExtraCredit isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}