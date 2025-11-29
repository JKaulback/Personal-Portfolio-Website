import { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionBadgeProps {
    label: string;
    color: 'purple' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'blue' | 'yellow';
    className?: string;
    icon?: ReactNode;
    hideDot?: boolean;
}

export function SectionBadge({ label, color, className = '', icon, hideDot = false }: SectionBadgeProps) {
    const { isDarkMode } = useTheme();

    const colors = {
        purple: {
            light: 'bg-purple-50 text-purple-700 border-purple-600',
            dark: 'bg-purple-900/20 text-purple-300 border-purple-400',
            dot: 'bg-purple-600'
        },
        cyan: {
            light: 'bg-sky-50 text-sky-700 border-sky-600',
            dark: 'bg-sky-900/20 text-sky-300 border-sky-400',
            dot: 'bg-sky-600'
        },
        emerald: {
            light: 'bg-emerald-50 text-emerald-700 border-emerald-600',
            dark: 'bg-emerald-900/20 text-emerald-300 border-emerald-400',
            dot: 'bg-emerald-600'
        },
        orange: {
            light: 'bg-orange-50 text-orange-700 border-orange-600',
            dark: 'bg-orange-900/20 text-orange-300 border-orange-400',
            dot: 'bg-orange-600'
        },
        pink: {
            light: 'bg-pink-50 text-pink-700 border-pink-600',
            dark: 'bg-pink-900/20 text-pink-300 border-pink-400',
            dot: 'bg-pink-600'
        },
        blue: {
            light: 'bg-blue-50 text-blue-700 border-blue-600',
            dark: 'bg-blue-900/20 text-blue-300 border-blue-400',
            dot: 'bg-blue-600'
        },
        yellow: {
            light: 'bg-yellow-50 text-yellow-700 border-yellow-600',
            dark: 'bg-yellow-900/20 text-yellow-300 border-yellow-400',
            dot: 'bg-yellow-600'
        }
    };

    const colorSet = colors[color];

    return (
        <div
            className={`inline-flex items-center gap-1.5 py-1.5 rounded-lg text-xs font-medium border-2 whitespace-nowrap transition-colors duration-300 ${isDarkMode ? colorSet.dark : colorSet.light
                } ${className}`}
            style={{ paddingLeft: '0.75rem', paddingRight: '1rem' }}
        >
            {icon ? icon : (
                !hideDot && <div className={`w-2 h-2 rounded-full ${colorSet.dot} ${label.includes('Learning') ? 'animate-pulse' : ''}`} />
            )}
            {label}
        </div>
    );
}
