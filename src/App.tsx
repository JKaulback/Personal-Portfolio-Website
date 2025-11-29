import { useState, useEffect } from 'react';
import { LeftNav } from './components/LeftNav';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { LearningNarrative } from './components/LearningNarrative';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getSectionBackground = (section: string, isDark: boolean) => {
    const backgrounds: { [key: string]: { light: string; dark: string } } = {
      home: { light: '#faf5ff', dark: '#3b0764' },
      about: { light: '#fff7ed', dark: '#7c2d12' },
      skills: { light: '#ecfdf5', dark: '#064e3b' },
      work: { light: '#f0f9ff', dark: '#082f49' },
      resume: { light: '#fefce8', dark: '#713f12' },
      extra: { light: '#fdf2f8', dark: '#831843' },
      contact: { light: '#eff6ff', dark: '#172554' },
    };
    const bg = backgrounds[section] || backgrounds.home;
    return isDark ? bg.dark : bg.light;
  };

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

  const bgColor = getSectionBackground(activeSection, isDarkMode);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <LeftNav activeSection={activeSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main
        className="lg:ml-[12rem] min-w-0 transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <Landing isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Resume isDarkMode={isDarkMode} />
        <LearningNarrative isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}