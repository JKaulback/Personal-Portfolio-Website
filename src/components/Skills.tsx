import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SectionBadge } from './ui/SectionBadge';
import { skillsInventory } from '../config/data';

interface SkillItem {
  skill: string;
  category: string;
  acquiredAt: string;
  activity: string;
  evidence: string;
}

export function Skills() {
  const { isDarkMode } = useTheme();
  const [paddingLeft, setPaddingLeft] = useState('2rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPaddingLeft('11rem'); // 320px
      } else {
        setPaddingLeft('2rem'); // 32px (p-8)
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryStyles: Record<string, { light: string; dark: string; borderLight: string; borderDark: string; tagLight: string; tagDark: string }> = {
    'Programming Languages': {
      light: 'bg-emerald-50',
      dark: 'bg-emerald-900/40',
      borderLight: 'border-emerald-200',
      borderDark: 'border-emerald-800',
      tagLight: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
      tagDark: 'bg-emerald-800 text-emerald-100 hover:bg-emerald-700'
    },
    'Web Development': {
      light: 'bg-blue-50',
      dark: 'bg-blue-900/40',
      borderLight: 'border-blue-200',
      borderDark: 'border-blue-800',
      tagLight: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      tagDark: 'bg-blue-800 text-blue-100 hover:bg-blue-700'
    },
    'Database': {
      light: 'bg-purple-50',
      dark: 'bg-purple-900/40',
      borderLight: 'border-purple-200',
      borderDark: 'border-purple-800',
      tagLight: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
      tagDark: 'bg-purple-800 text-purple-100 hover:bg-purple-700'
    },
    'Mobile': {
      light: 'bg-orange-50',
      dark: 'bg-orange-900/40',
      borderLight: 'border-orange-200',
      borderDark: 'border-orange-800',
      tagLight: 'bg-orange-100 text-orange-800 hover:bg-orange-200',
      tagDark: 'bg-orange-800 text-orange-100 hover:bg-orange-700'
    },
    'DevOps': {
      light: 'bg-cyan-50',
      dark: 'bg-cyan-900/40',
      borderLight: 'border-cyan-200',
      borderDark: 'border-cyan-800',
      tagLight: 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200',
      tagDark: 'bg-cyan-800 text-cyan-100 hover:bg-cyan-700'
    },
    'Soft Skills': {
      light: 'bg-pink-50',
      dark: 'bg-pink-900/40',
      borderLight: 'border-pink-200',
      borderDark: 'border-pink-800',
      tagLight: 'bg-pink-100 text-pink-800 hover:bg-pink-200',
      tagDark: 'bg-pink-800 text-pink-100 hover:bg-pink-700'
    },
  };

  const defaultStyle = {
    light: 'bg-slate-50',
    dark: 'bg-slate-900/20',
    borderLight: 'border-slate-200',
    borderDark: 'border-slate-800',
    tagLight: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    tagDark: 'bg-slate-800 text-slate-300 hover:bg-slate-700'
  };

  const groupedSkills = skillsInventory.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SkillItem[]>);

  return (
    <section
      id="skills"
      className="min-h-screen py-20 transition-colors duration-300"
      style={{ paddingLeft: paddingLeft, paddingRight: '2rem' }}
    >
      <div className="w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <SectionBadge label="Skills Inventory" color="cyan" className="mb-3" />
          <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Technical & Professional Skills
          </h2>
          <p className={`transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-600'}`}
            style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
          >
            A detailed inventory of my competencies, organized by category. Hover over skills for more details.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, items]) => {
            const style = categoryStyles[category] || defaultStyle;
            const cardBg = isDarkMode ? 'bg-slate-900' : 'bg-white';
            const cardBorder = isDarkMode ? style.borderDark : style.borderLight;
            const tagClass = isDarkMode ? style.tagDark : style.tagLight;
            const shadowClass = isDarkMode ? '' : 'shadow-md';

            return (
              <div
                key={category}
                className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${cardBg} ${cardBorder} ${shadowClass}`}
              >
                <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, index) => (
                    <div
                      key={`${category}-${item.skill}-${index}`}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-help ${tagClass}`}
                      title={`Acquired: ${item.acquiredAt}\nActivity: ${item.activity}\nEvidence: ${item.evidence}`}
                    >
                      {item.skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}