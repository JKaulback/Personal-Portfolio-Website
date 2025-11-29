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
      about: { light: '#fefce8', dark: '#713f12' }, // Yellow-50/900 to match Cream theme
      skills: { light: '#cffafe', dark: '#164e63' },
      work: { light: '#ecfdf5', dark: '#064e3b' },
      resume: { light: '#fff7ed', dark: '#7c2d12' }, // Orange-50/900 to match Peach theme
      extra: { light: '#fdf2f8', dark: '#831843' },
      contact: { light: '#e0e7ff', dark: '#312e81' },
    };
    const bg = backgrounds[section] || backgrounds.home;
    return isDark ? bg.dark : bg.light;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

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
        className="lg:ml-[12rem] min-w-0 transition-colors duration-300 pt-20 lg:pt-0"
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