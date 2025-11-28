import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Home, User, Sparkles, Briefcase, FileText, Mail, Moon, Sun } from 'lucide-react';
export function LeftNav({ activeSection, isDarkMode, setIsDarkMode }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home, color: 'lavender' },
        { id: 'about', label: 'About Me', icon: User, color: 'peach' },
        { id: 'skills', label: 'Skills', icon: Sparkles, color: 'mint' },
        { id: 'work', label: 'Work', icon: Briefcase, color: 'sky' },
        { id: 'resume', label: 'Resume', icon: FileText, color: 'cream' },
        { id: 'contact', label: 'Contact Me', icon: Mail, color: 'periwinkle' },
    ];
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const getTabStyles = (color, isActive, isDarkMode) => {
        const colors = {
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
        return {
            className: isDarkMode
                ? (isActive ? colorSet.darkActive : colorSet.dark)
                : (isActive ? colorSet.lightActive : colorSet.light),
            backgroundColor: (isActive && isDarkMode) ? colorSet.darkActiveBg : undefined
        };
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 transition-colors duration-300 ${isDarkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-slate-200 border-slate-400'}`, children: _jsx("div", { className: "relative flex overflow-x-auto pb-2 px-2 pt-2 gap-1 scrollbar-hide", children: navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        const styles = getTabStyles(item.color, isActive, isDarkMode);
                        return (_jsxs("button", { onClick: () => scrollToSection(item.id), className: `flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-t-lg border-2 border-b-0 transition-all min-w-[70px] ${styles.className} ${isActive ? 'translate-y-0' : 'translate-y-1'}`, style: styles.backgroundColor ? { backgroundColor: styles.backgroundColor } : undefined, children: [_jsx(Icon, { className: "w-4 h-4" }), _jsx("span", { className: "text-xs whitespace-nowrap", children: item.label })] }, item.id));
                    }) }) }), _jsx("button", { onClick: () => setIsDarkMode(!isDarkMode), className: `lg:hidden fixed z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-2 border-slate-700'
                    : 'bg-slate-300 text-slate-700 hover:bg-slate-400 border-2 border-slate-400'}`, style: { bottom: '6rem', right: '1rem' }, children: isDarkMode ? _jsx(Sun, { className: "w-6 h-6" }) : _jsx(Moon, { className: "w-6 h-6" }) }), _jsxs("nav", { className: `hidden lg:flex fixed left-0 top-0 h-screen w-48 flex-col items-center py-8 z-50 transition-colors duration-300 ${isDarkMode
                    ? 'bg-slate-900'
                    : 'bg-slate-200'}`, children: [_jsx("button", { onClick: () => setIsDarkMode(!isDarkMode), className: `p-4 h-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border-2 ${isDarkMode
                            ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 border-slate-700'
                            : 'bg-slate-300 text-slate-700 hover:bg-slate-400 border-slate-400'}`, children: isDarkMode ? _jsx(Sun, { className: "w-5 h-5" }) : _jsx(Moon, { className: "w-5 h-5" }) }), _jsx("div", { className: "flex-1 flex flex-col justify-center items-end gap-1 overflow-visible", style: { paddingLeft: '75px' }, children: navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            const activeIndex = navItems.findIndex(item => item.id === activeSection);
                            const isPushed = index < activeIndex;
                            const styles = getTabStyles(item.color, isActive, isDarkMode);
                            return (_jsxs("button", { onClick: () => scrollToSection(item.id), className: `relative transition-all duration-300 flex items-center justify-center overflow-hidden ${styles.className} ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`, title: item.label, style: {
                                    width: '48px',
                                    height: isActive ? '160px' : '48px',
                                    borderTopLeftRadius: '12px',
                                    borderBottomLeftRadius: '12px',
                                    borderWidth: '2px',
                                    borderRightWidth: '0',
                                    marginRight: isPushed ? '-110px' : '0',
                                    padding: '8px 0',
                                    backgroundColor: styles.backgroundColor,
                                }, children: [_jsx("div", { className: "flex flex-col items-center justify-center h-full", children: isActive ? (_jsxs("div", { className: "flex items-center gap-2", style: { transform: 'rotate(-90deg)' }, children: [_jsx(Icon, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { className: "text-xs whitespace-nowrap font-bold", children: item.label })] })) : (_jsx(Icon, { className: "w-4 h-4 flex-shrink-0", style: { transform: 'rotate(-90deg)' } })) }), !isActive && (_jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
                                            borderTopLeftRadius: '12px',
                                            borderBottomLeftRadius: '12px',
                                            overflow: 'hidden',
                                            background: isDarkMode
                                                ? 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)'
                                                : 'linear-gradient(0deg, rgba(0,0,0,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%)'
                                        } }))] }, item.id));
                        }) }), _jsx("div", { className: `w-full h-2 border-t-2 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-300 border-slate-400'}` })] })] }));
}
