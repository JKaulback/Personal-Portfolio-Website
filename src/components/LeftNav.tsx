import { Home, User, Sparkles, Briefcase, FileText, Star, Mail, Moon, Sun } from 'lucide-react';

interface LeftNavProps {
  activeSection: string;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function LeftNav({ activeSection, isDarkMode, setIsDarkMode }: LeftNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, color: 'lavender' },
    { id: 'about', label: 'About Me', icon: User, color: 'peach' },
    { id: 'skills', label: 'Skills', icon: Sparkles, color: 'mint' },
    { id: 'work', label: 'Work', icon: Briefcase, color: 'sky' },
    { id: 'resume', label: 'Resume', icon: FileText, color: 'cream' },
    { id: 'extra', label: 'Extra Credit', icon: Star, color: 'rose' },
    { id: 'contact', label: 'Contact Me', icon: Mail, color: 'periwinkle' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTabColor = (color: string, isActive: boolean, isDarkMode: boolean) => {
    const colors: { [key: string]: { light: string; lightActive: string; dark: string; darkActive: string } } = {
      lavender: {
        light: 'bg-purple-100 text-purple-700 border-purple-300',
        lightActive: 'bg-purple-200 text-purple-900 border-purple-400',
        dark: 'bg-purple-900/30 text-purple-300 border-purple-800',
        darkActive: 'bg-purple-800 text-purple-200 border-purple-600',
      },
      peach: {
        light: 'bg-orange-100 text-orange-700 border-orange-300',
        lightActive: 'bg-orange-200 text-orange-900 border-orange-400',
        dark: 'bg-orange-900/30 text-orange-300 border-orange-800',
        darkActive: 'bg-orange-800 text-orange-200 border-orange-600',
      },
      mint: {
        light: 'bg-emerald-100 text-emerald-700 border-emerald-300',
        lightActive: 'bg-emerald-200 text-emerald-900 border-emerald-400',
        dark: 'bg-emerald-900/30 text-emerald-300 border-emerald-800',
        darkActive: 'bg-emerald-800 text-emerald-200 border-emerald-600',
      },
      sky: {
        light: 'bg-sky-100 text-sky-700 border-sky-300',
        lightActive: 'bg-sky-200 text-sky-900 border-sky-400',
        dark: 'bg-sky-900/30 text-sky-300 border-sky-800',
        darkActive: 'bg-sky-800 text-sky-200 border-sky-600',
      },
      cream: {
        light: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        lightActive: 'bg-yellow-200 text-yellow-900 border-yellow-400',
        dark: 'bg-yellow-900/30 text-yellow-300 border-yellow-800',
        darkActive: 'bg-yellow-800 text-yellow-200 border-yellow-600',
      },
      rose: {
        light: 'bg-pink-100 text-pink-700 border-pink-300',
        lightActive: 'bg-pink-200 text-pink-900 border-pink-400',
        dark: 'bg-pink-900/30 text-pink-300 border-pink-800',
        darkActive: 'bg-pink-800 text-pink-200 border-pink-600',
      },
      periwinkle: {
        light: 'bg-blue-100 text-blue-700 border-blue-300',
        lightActive: 'bg-blue-200 text-blue-900 border-blue-400',
        dark: 'bg-blue-900/30 text-blue-300 border-blue-800',
        darkActive: 'bg-blue-800 text-blue-200 border-blue-600',
      },
    };

    const colorSet = colors[color];
    if (isDarkMode) {
      return isActive ? colorSet.darkActive : colorSet.dark;
    }
    return isActive ? colorSet.lightActive : colorSet.light;
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900 border-slate-800' 
          : 'bg-slate-200 border-slate-400'
      }`}>
        <div className="flex overflow-x-auto pb-2 px-2 pt-2 gap-1 scrollbar-hide">
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
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Navigation - Filing Cabinet Style */}
      <nav className={`hidden lg:flex fixed left-0 top-0 h-screen w-24 flex-col items-center py-8 z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-900' 
          : 'bg-slate-200'
      }`}>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-16 h-12 rounded-t-xl transition-all duration-300 flex items-center justify-center mb-6 border-2 border-b-0 ${
            isDarkMode 
              ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 border-slate-700' 
              : 'bg-slate-300 text-slate-700 hover:bg-slate-400 border-slate-400'
          }`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Filing Cabinet Tabs - Rotated and anchored to right inside grey area */}
        <div className="flex-1 flex flex-col justify-center items-end gap-0 w-full overflow-hidden pr-0">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            // Calculate how much to push tabs above the active one
            const activeIndex = navItems.findIndex(nav => nav.id === activeSection);
            const pushDistance = isActive ? 0 : index < activeIndex ? 32 : 0;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-500 border-2 border-r-0 overflow-hidden ${
                  getTabColor(item.color, isActive, isDarkMode)
                } ${isActive ? 'w-40 h-12' : 'w-16 h-10 hover:w-[72px]'}`}
                title={item.label}
                style={{
                  transformOrigin: 'right center',
                  transform: 'rotate(90deg) translateY(-25%)',
                  borderRadius: '0 0 12px 12px',
                  marginBottom: isActive ? '32px' : '2px',
                  marginTop: pushDistance > 0 ? `${pushDistance}px` : '0px',
                }}
              >
                <div 
                  className="h-full flex items-center justify-center gap-2 px-3"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <Icon className={`${isActive ? 'w-5 h-5' : 'w-4 h-4'} transition-all flex-shrink-0`} />
                  <span 
                    className={`text-sm whitespace-nowrap transition-all duration-500 overflow-hidden ${
                      isActive ? 'max-w-[120px] opacity-100 font-bold' : 'max-w-0 opacity-0'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Tab edge shadow effect */}
                <div 
                  className={`absolute inset-0 ${isActive ? 'opacity-0' : 'opacity-100'}`} 
                  style={{
                    background: isDarkMode 
                      ? 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.2) 100%)'
                      : 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.08) 100%)'
                  }}
                />
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