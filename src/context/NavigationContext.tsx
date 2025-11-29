import React, { createContext, useContext, useEffect, useState } from 'react';
import { SECTION_BACKGROUNDS } from '../config/theme';
import { useTheme } from './ThemeContext';

interface NavigationContextType {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState('home');
    const { isDarkMode, setSectionBackground } = useTheme();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if we're at the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
                return;
            }

            const sections = Object.keys(SECTION_BACKGROUNDS);
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

    useEffect(() => {
        const bg = SECTION_BACKGROUNDS[activeSection] || SECTION_BACKGROUNDS.home;
        setSectionBackground(isDarkMode ? bg.dark : bg.light);
    }, [activeSection, isDarkMode, setSectionBackground]);

    return (
        <NavigationContext.Provider value={{ activeSection, scrollToSection }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}
