import { useState, useEffect } from 'react';
import { CheckCircle2, BookOpen, Briefcase, Award } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

interface SkillItem {
  skill: string;
  category: string;
  acquiredAt: string;
  activity: string;
  evidence: string;
}

export function Skills({ isDarkMode }: SkillsProps) {
  const [paddingLeft, setPaddingLeft] = useState('2rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setPaddingLeft('20rem'); // 320px
      } else {
        setPaddingLeft('2rem'); // 32px (p-8)
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillsInventory: SkillItem[] = [
    // Programming Languages
    { skill: 'JavaScript', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Website Structure & Styling', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'TypeScript', category: 'Programming Languages', acquiredAt: 'Self-Directed Learning', activity: 'Styling & Organization', evidence: 'GitHub Repository/Personal-Portfolio-Website' },
    { skill: 'Java', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/SRP-Refactoring-Exercise' },
    { skill: 'C++', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/PROG2100_chess_analysis_program' },

    // Web Development
    { skill: 'Node.js', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Server-side Scripting', evidence: 'MERN Stack App' },
    { skill: 'React', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Frontend Development', evidence: 'MERN Stack App' },
    { skill: 'REST APIs', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'API Integration', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'HTML/CSS', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Structure & Styling', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'Bootstrap', category: 'Web Development', acquiredAt: 'Self-Directed Learning', activity: 'Responsive Design', evidence: 'GitHub Repository/AI-Trivia-Webapp' },
    { skill: 'Tailwind CSS', category: 'Web Development', acquiredAt: 'Self-Directed Learning', activity: 'Styling & Organization', evidence: 'GitHub Repository/Personal-Portfolio-Website' },
    { skill: 'Sass', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Styling & Organization', evidence: 'Coursework' },
    
    // Database
    { skill: 'PostgreSQL', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'Coursework' },
    { skill: 'MongoDB', category: 'Database', acquiredAt: 'Self-Directed Learning', activity: 'NoSQL Implementation', evidence: 'MERN Stack App' },
    { skill: 'Firebase', category: 'Database', acquiredAt: 'Self-Directed Learning', activity: 'NoSQL Implementation', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'SQL', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'Coursework' },
    { skill: 'Room', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'GitHub Repository/MOBI3002_SemesterProject' },

    // Mobile
    { skill: 'React Native', category: 'Mobile', acquiredAt: 'Self-Directed Learning', activity: 'Mobile App Development', evidence: 'Mobile Prototype' },
    { skill: 'Android Studio', category: 'Mobile', acquiredAt: 'NSCC Coursework', activity: 'Native Android Apps', evidence: 'Android Project' },
    { skill: 'Kotlin', category: 'Mobile', acquiredAt: 'NSCC Coursework', activity: 'Native Android Apps', evidence: 'Android Project' },
    
    // DevOps
    { skill: 'Git & GitHub', category: 'DevOps', acquiredAt: 'NSCC Coursework', activity: 'Version Control', evidence: 'GitHub Commit History' },
    { skill: 'Docker', category: 'DevOps', acquiredAt: 'Self-Directed Learning', activity: 'Containerization', evidence: 'Dockerized App' },
    { skill: 'Postman', category: 'DevOps', acquiredAt: 'Self-Directed Learning', activity: 'API Testing', evidence: 'API Testing' },

    // Soft Skills
    { skill: 'Problem Solving', category: 'Soft Skills', acquiredAt: 'Various Projects', activity: 'Debugging & Logic', evidence: 'Project Success Rates' },
    { skill: 'Communication', category: 'Soft Skills', acquiredAt: 'Group Projects', activity: 'Team Collaboration', evidence: 'Peer Reviews' },
    { skill: 'Time Management', category: 'Soft Skills', acquiredAt: 'Academic Schedule', activity: 'Project Planning', evidence: 'On-time Deliveries' },
  ];
  const categoryStyles: Record<string, { light: string; dark: string }> = {
    'Programming Languages': { light: 'bg-emerald-100 text-emerald-800 border-emerald-200', dark: 'bg-emerald-900/30 text-[#e2e8f0] border-emerald-800' },
    'Web Development': { light: 'bg-blue-100 text-blue-800 border-blue-200', dark: 'bg-blue-900/30 text-[#e2e8f0] border-blue-800' },
    'Database': { light: 'bg-purple-100 text-purple-800 border-purple-200', dark: 'bg-purple-900/30 text-[#e2e8f0] border-purple-800' },
    'Mobile': { light: 'bg-orange-100 text-orange-800 border-orange-200', dark: 'bg-orange-900/30 text-[#e2e8f0] border-orange-800' },
    'DevOps': { light: 'bg-cyan-100 text-cyan-800 border-cyan-200', dark: 'bg-cyan-900/30 text-[#e2e8f0] border-cyan-800' },
    'Soft Skills': { light: 'bg-pink-100 text-pink-800 border-pink-200', dark: 'bg-pink-900/30 text-[#e2e8f0] border-pink-800' },
  };

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
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
            ? 'bg-emerald-900/30 text-emerald-300 border-emerald-800'
            : 'bg-emerald-100 text-emerald-700 border-emerald-300'
            }`}>
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            Skills Inventory
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Technical & Professional Skills
          </h2>
          <p className={`transition-colors duration-300 ${isDarkMode ? 'text-[#94a3b8]' : 'text-slate-600'}`}
            style={{ color: isDarkMode ? '#cbd5e1' : undefined }}
          >
            A detailed inventory of my competencies, acquisition sources, and practical applications.
          </p>
        </div>

        {/* Skills Inventory Table - Standard HTML Table */}
        <div className={`rounded-2xl border-2 overflow-hidden transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-md'
          }`}
          style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
        >

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`border-b-2 text-sm uppercase tracking-wider ${isDarkMode
                  ? 'bg-slate-800/50 border-slate-800'
                  : 'bg-slate-50 border-slate-100 text-slate-500'
                  }`}
                  style={{ color: isDarkMode ? '#94a3b8' : undefined }}
                >
                  <th className="p-4 font-semibold whitespace-nowrap">Skill</th>
                  <th className="p-4 font-semibold whitespace-nowrap">Where was Skill Acquired?</th>
                  <th className="p-4 font-semibold whitespace-nowrap">What Were You Doing?</th>
                  <th className="p-4 font-semibold whitespace-nowrap">Evidence</th>
                </tr>
              </thead>
              <tbody className={`divide-y-2 ${isDarkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                {Object.entries(skillsInventory.reduce((acc, item) => {
                  if (!acc[item.category]) acc[item.category] = [];
                  acc[item.category].push(item);
                  return acc;
                }, {} as Record<string, SkillItem[]>)).map(([category, items]) => {
                  // Extract base color name for border logic (e.g., 'emerald', 'blue')
                  // This assumes the style string follows the pattern '... border-COLOR-200 ...'
                  // A safer way is to define the border color class explicitly in the object.

                  // Let's redefine the styles to be more explicit about borders
                  const style = categoryStyles[category] || { light: 'bg-slate-100 text-slate-700 border-slate-200', dark: 'bg-slate-800 text-slate-200 border-slate-700' };
                  const activeStyle = isDarkMode ? style.dark : style.light;

                  // We need to extract the border color class to apply to specific sides
                  // The 'activeStyle' string contains 'border-COLOR-XXX'. We can just apply it.
                  // But we need to apply specific border widths.

                  // Extract the border class:
                  const borderColorClass = activeStyle.split(' ').find(c => c.startsWith('border-')) || 'border-slate-200';

                  return (
                    <>
                      {/* Category Header */}
                      {/* Top, Left (Thick), Right, Bottom Borders */}
                      <tr className={`${activeStyle}`}>
                        <td
                          colSpan={4}
                          className={`p-3 pl-4 font-bold text-sm uppercase tracking-wider border-t-2 border-r-2 border-b-2 border-l-4 ${borderColorClass} ${isDarkMode ? 'border-l-current' : ''}`}
                          style={{
                            borderLeftWidth: '4px',
                            color: isDarkMode ? '#e2e8f0' : undefined
                          }} // Force thick left border and light text
                        >
                          {category}
                        </td>
                      </tr>
                      {/* Skill Rows */}
                      {items.map((item, index) => {
                        const isLastItem = index === items.length - 1;
                        // We need to apply the border color to these rows too.
                        // Since 'activeStyle' has the background, we might not want that on items.
                        // We only want the BORDER color from 'activeStyle'.
                        // Let's parse it or just use the border class.
                        // Actually, let's just use the same border color class for the items.

                        // Extract the border class:
                        const borderColorClass = activeStyle.split(' ').find(c => c.startsWith('border-')) || 'border-slate-200';

                        return (
                          <tr
                            key={`${category}-${index}`}
                            className={`group transition-colors duration-200 ${isDarkMode
                              ? 'hover:bg-slate-800/30'
                              : 'hover:bg-slate-50'
                              }`}
                          >
                            {/* First Cell: Left Border (Thick) */}
                            <td className={`p-4 border-l-4 ${borderColorClass} ${isLastItem ? 'border-b-2' : ''}`}>
                              <div className="flex items-center gap-2 whitespace-nowrap">
                                <span
                                  className={`font-medium ${isDarkMode ? '' : 'text-slate-800'}`}
                                  style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                                >
                                  {item.skill}
                                </span>
                              </div>
                            </td>
                            {/* Middle Cells: Bottom Border (if last) */}
                            <td
                              className={`p-4 text-sm whitespace-nowrap ${isDarkMode ? '' : 'text-slate-600'} ${isLastItem ? `border-b-2 ${borderColorClass}` : ''}`}
                              style={{ color: isDarkMode ? '#cbd5e1' : undefined }}
                            >
                              {item.acquiredAt}
                            </td>
                            <td
                              className={`p-4 text-sm whitespace-nowrap ${isDarkMode ? '' : 'text-slate-600'} ${isLastItem ? `border-b-2 ${borderColorClass}` : ''}`}
                              style={{ color: isDarkMode ? '#cbd5e1' : undefined }}
                            >
                              {item.activity}
                            </td>
                            {/* Last Cell: Right Border + Bottom Border (if last) */}
                            <td className={`p-4 border-r-2 ${borderColorClass} ${isLastItem ? 'border-b-2' : ''}`}>
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${isDarkMode
                                ? 'bg-slate-800 border-slate-700 text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-600'
                                }`}>
                                {item.evidence}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-8 p-6 rounded-2xl border-2 text-center transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-emerald-50 border-emerald-200 shadow-lg'
          }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${isDarkMode
            ? 'bg-emerald-900/30 text-emerald-300 border-emerald-800'
            : 'bg-white text-emerald-700 border-emerald-300'
            }`}>
            💡 Learning Module
          </div>
          <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
            Always learning and exploring new technologies to stay ahead in the ever-evolving world of web development
          </p>
        </div>
      </div>
    </section>
  );
}