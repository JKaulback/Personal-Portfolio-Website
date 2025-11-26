import { Home, User, Sparkles, Briefcase, FileText, Star, Mail, Moon, Sun } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface LeftNavProps {
  activeSection: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function LeftNav({ activeSection, isDarkMode, setIsDarkMode }: LeftNavProps) {
  const [tabWidths, setTabWidths] = useState<{ [key: string]: number }>({});
  const measureRef = useRef<HTMLSpanElement>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'lavender' },
    { id: 'about', label: 'About Me', icon: User, color: 'peach' },
    { id: 'skills', label: 'Skills', icon: Sparkles, color: 'mint' },
    { id: 'work', label: 'Work', icon: Briefcase, color: 'sky' },
    { id: 'resume', label: 'Resume', icon: FileText, color: 'cream' },
    { id: 'contact', label: 'Contact Me', icon: Mail, color: 'periwinkle' },
  ];

  // Measure text widths for dynamic sizing
  useEffect(() => {
    if (measureRef.current) {
      const newWidths: { [key: string]: number } = {};
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      if (context) {
        // Set font to match the bold text style
        context.font = 'bold 14px system-ui, -apple-system, sans-serif';
        
        navItems.forEach((item) => {
          const textWidth = context.measureText(item.label).width;
          // Add padding: icon width (20px) + gap (8px) + text + padding (24px left+right)
          newWidths[item.id] = Math.ceil(textWidth + 20 + 8 + 24);
        });
        
        setTabWidths(newWidths);
      }
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTabColor = (color: string, isActive: boolean, isDarkMode: boolean) => {
    const colors: { [key: string]: { light: string; lightActive: string; dark: string; darkActive: string; darkActiveBg: string } } = {
      lavender: {
        light: 'bg-purple-200 text-purple-900 border-purple-400',
        lightActive: 'bg-purple-50 text-purple-700 border-purple-200',
        dark: 'bg-purple-900/30 text-purple-300 border-purple-800',
        darkActive: 'text-purple-200 border-purple-900',
        darkActiveBg: '#3b0764',
      },
      peach: {
        light: 'bg-orange-200 text-orange-900 border-orange-400',
        lightActive: 'bg-orange-50 text-orange-700 border-orange-200',
        dark: 'bg-orange-900/30 text-orange-300 border-orange-800',
        darkActive: 'text-orange-200 border-orange-900',
        darkActiveBg: '#7c2d12',
      },
      mint: {
        light: 'bg-emerald-200 text-emerald-900 border-emerald-400',
        lightActive: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dark: 'bg-emerald-900/30 text-emerald-300 border-emerald-800',
        darkActive: 'text-emerald-200 border-emerald-900',
        darkActiveBg: '#064e3b',
      },
      sky: {
        light: 'bg-sky-200 text-sky-900 border-sky-400',
        lightActive: 'bg-sky-50 text-sky-700 border-sky-200',
        dark: 'bg-sky-900/30 text-sky-300 border-sky-800',
        darkActive: 'text-sky-200 border-sky-900',
        darkActiveBg: '#082f49',
      },
      cream: {
        light: 'bg-yellow-200 text-yellow-900 border-yellow-400',
        lightActive: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        dark: 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
        darkActive: 'text-yellow-200 border-yellow-900',
        darkActiveBg: '#713f12',
      },
      periwinkle: {
        light: 'bg-blue-200 text-blue-900 border-blue-400',
        lightActive: 'bg-blue-50 text-blue-700 border-blue-200',
        dark: 'bg-blue-900/30 text-blue-300 border-blue-800',
        darkActive: 'text-blue-200 border-blue-900',
        darkActiveBg: '#172554',
      },
    };

    const colorSet = colors[color];
    if (isDarkMode) {
      return isActive ? colorSet.darkActive : colorSet.dark;
    }
    return isActive ? colorSet.lightActive : colorSet.light;
  };

  const getTabBackgroundColor = (color: string, isActive: boolean, isDarkMode: boolean) => {
    if (!isActive || !isDarkMode) return undefined;
    
    const colors: { [key: string]: string } = {
      lavender: '#3b0764',
      peach: '#7c2d12',
      mint: '#064e3b',
      sky: '#082f49',
      cream: '#713f12',
      periwinkle: '#172554',
    };
    
    return colors[color];
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900 border-slate-800' 
          : 'bg-slate-200 border-slate-400'
      }`}>
        <div className="relative flex overflow-x-auto pb-2 px-2 pt-2 gap-1 scrollbar-hide">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-t-lg border-2 border-b-0 transition-all min-w-[70px] ${
                  getTabColor(item.color, isActive, isDarkMode)
                } ${isActive ? 'translate-y-0' : 'translate-y-1'}`}
                style={isActive && isDarkMode ? { backgroundColor: getTabBackgroundColor(item.color, isActive, isDarkMode) } : undefined}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Dark Mode Toggle - Mobile Floating Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`lg:hidden fixed z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isDarkMode 
            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-2 border-slate-700' 
            : 'bg-slate-300 text-slate-700 hover:bg-slate-400 border-2 border-slate-400'
        }`}
        style={{ bottom: '6rem', right: '1rem' }}
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Desktop Navigation - Filing Cabinet Style */}
      <nav className={`hidden lg:flex fixed left-0 top-0 h-screen w-48 flex-col items-center py-8 z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900' 
          : 'bg-slate-200'
      }`}>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-4 h-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 ${
            isDarkMode 
              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 border-slate-700' 
              : 'bg-slate-300 text-slate-700 hover:bg-slate-400 border-slate-400'
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Filing Cabinet Tabs - Sideways tabs */}
        <div className="flex-1 flex flex-col justify-center items-end gap-1 overflow-visible" style={{ paddingLeft: '75px' }}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const activeIndex = navItems.findIndex(item => item.id === activeSection);
            const isPushed = index < activeIndex;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-300 flex items-center justify-center overflow-hidden ${
                  getTabColor(item.color, isActive, isDarkMode)
                } ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                title={item.label}
                style={{
                  width: '48px',
                  height: isActive ? '160px' : '48px',
                  borderTopLeftRadius: '12px',
                  borderBottomLeftRadius: '12px',
                  borderWidth: '2px',
                  borderRightWidth: '0',
                  marginRight: isPushed ? '-110px' : '0',
                  padding: '8px 0',
                  backgroundColor: isActive && isDarkMode ? getTabBackgroundColor(item.color, isActive, isDarkMode) : undefined,
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {isActive ? (
                    <div 
                      className="flex items-center gap-2"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs whitespace-nowrap font-bold">
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <Icon 
                      className="w-4 h-4 flex-shrink-0"
                      style={{ transform: 'rotate(-90deg)' }}
                    />
                  )}
                </div>

                {/* Shadow for inactive tabs */}
                {!isActive && (
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{
                      borderTopLeftRadius: '12px',
                      borderBottomLeftRadius: '12px',
                      overflow: 'hidden',
                      background: isDarkMode 
                        ? 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)'
                        : 'linear-gradient(0deg, rgba(0,0,0,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom base */}
        <div className={`w-full h-2 border-t-2 ${
          isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-300 border-slate-400'
        }`} />
      </nav>
    </>
  );
}