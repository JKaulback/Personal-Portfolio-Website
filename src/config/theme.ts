export const SECTION_BACKGROUNDS: { [key: string]: { light: string; dark: string } } = {
    home: { light: '#faf5ff', dark: '#3b0764' },
    about: { light: '#fefce8', dark: '#713f12' }, // Yellow-50/900 to match Cream theme
    skills: { light: '#cffafe', dark: '#164e63' },
    work: { light: '#ecfdf5', dark: '#064e3b' },
    resume: { light: '#fff7ed', dark: '#7c2d12' }, // Orange-50/900 to match Peach theme
    extra: { light: '#fdf2f8', dark: '#831843' },
    contact: { light: '#e0e7ff', dark: '#312e81' },
};

export const NAV_ITEMS = [
    { id: 'home', label: 'Home', color: 'lavender' },
    { id: 'about', label: 'About Me', color: 'cream' },
    { id: 'skills', label: 'Skills', color: 'electric' },
    { id: 'work', label: 'Work', color: 'mint' },
    { id: 'resume', label: 'Resume', color: 'peach' },
    { id: 'extra', label: 'Learning', color: 'rose' },
    { id: 'contact', label: 'Contact Me', color: 'royal' },
] as const;
