import { LeftNav } from './components/LeftNav';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { LearningNarrative } from './components/LearningNarrative';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import { Toaster } from 'sonner';

function AppContent() {
  const { sectionBackground } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: sectionBackground }}
    >
      <LeftNav />

      <main
        className="lg:ml-[12rem] min-w-0 transition-colors duration-300 pt-20 lg:pt-0"
        style={{ backgroundColor: sectionBackground }}
      >
        <Landing />
        <About />
        <Skills />
        <Work />
        <Resume />
        <LearningNarrative />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
        <Toaster />
      </NavigationProvider>
    </ThemeProvider>
  );
}