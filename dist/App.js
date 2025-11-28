import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { LeftNav } from './components/LeftNav';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const getSectionBackground = (section, isDark) => {
        const backgrounds = {
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
    return (_jsxs("div", { className: "flex min-h-screen transition-colors duration-500", style: { backgroundColor: bgColor }, children: [_jsx(LeftNav, { activeSection: activeSection, isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode }), _jsxs("main", { className: "flex-1 ml-0 lg:ml-48 transition-colors duration-300", style: { backgroundColor: bgColor }, children: [_jsx(Landing, { isDarkMode: isDarkMode }), _jsx(About, { isDarkMode: isDarkMode }), _jsx(Skills, { isDarkMode: isDarkMode }), _jsx(Work, { isDarkMode: isDarkMode }), _jsx(Resume, { isDarkMode: isDarkMode }), _jsx(Contact, { isDarkMode: isDarkMode })] })] }));
}
