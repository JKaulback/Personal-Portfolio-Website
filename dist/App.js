"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const react_1 = require("react");
const LeftNav_1 = require("./components/LeftNav");
const Landing_1 = require("./components/Landing");
const About_1 = require("./components/About");
const Skills_1 = require("./components/Skills");
const Work_1 = require("./components/Work");
const Resume_1 = require("./components/Resume");
const Contact_1 = require("./components/Contact");
function App() {
    const [activeSection, setActiveSection] = (0, react_1.useState)('home');
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
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
    (0, react_1.useEffect)(() => {
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
    return (<div className="flex min-h-screen transition-colors duration-500" style={{ backgroundColor: bgColor }}>
      <LeftNav_1.LeftNav activeSection={activeSection} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      
      <main className="flex-1 ml-0 lg:ml-48 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <Landing_1.Landing isDarkMode={isDarkMode}/>
        <About_1.About isDarkMode={isDarkMode}/>
        <Skills_1.Skills isDarkMode={isDarkMode}/>
        <Work_1.Work isDarkMode={isDarkMode}/>
        <Resume_1.Resume isDarkMode={isDarkMode}/>
        <Contact_1.Contact isDarkMode={isDarkMode}/>
      </main>
    </div>);
}
