"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = Skills;
const lucide_react_1 = require("lucide-react");
function Skills({ isDarkMode }) {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: lucide_react_1.Code2,
            color: 'green',
            skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'SASS', 'Larvel'],
        },
        {
            title: 'Backend Development',
            icon: lucide_react_1.Server,
            color: 'blue',
            skills: ['Node.js', 'Express', 'Python', 'REST/SOAP APIs', 'phpMyAdmin', 'OkHttp'],
        },
        {
            title: 'Database & Storage',
            icon: lucide_react_1.Database,
            color: 'purple',
            skills: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB'],
        },
        {
            title: 'Soft Skills',
            icon: lucide_react_1.Puzzle,
            color: 'pink',
            skills: ['Problem Solving', 'Communication', 'Time Management', 'Prioritization',
                'Attention to Detail', 'Organization'
            ],
        },
        {
            title: 'Mobile Development',
            icon: lucide_react_1.Smartphone,
            color: 'orange',
            skills: ['React Native', 'Android Studio', 'Progressive Web Apps', 'Mobile-First Design'],
        },
        {
            title: 'DevOps & Tools',
            icon: lucide_react_1.Workflow,
            color: 'cyan',
            skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux', 'Vercel'],
        },
    ];
    const getColorClasses = (color, isDarkMode) => {
        const colors = {
            green: {
                light: 'bg-emerald-50 text-emerald-700 border-emerald-300',
                dark: 'bg-emerald-900/20 text-emerald-400 border-emerald-800',
                border: 'hover:border-emerald-500',
            },
            blue: {
                light: 'bg-sky-50 text-sky-700 border-sky-300',
                dark: 'bg-sky-900/20 text-sky-400 border-sky-800',
                border: 'hover:border-sky-500',
            },
            purple: {
                light: 'bg-violet-50 text-violet-700 border-violet-300',
                dark: 'bg-violet-900/20 text-violet-400 border-violet-800',
                border: 'hover:border-violet-500',
            },
            pink: {
                light: 'bg-rose-50 text-rose-700 border-rose-300',
                dark: 'bg-rose-900/20 text-rose-400 border-rose-800',
                border: 'hover:border-rose-500',
            },
            orange: {
                light: 'bg-orange-50 text-orange-700 border-orange-300',
                dark: 'bg-orange-900/20 text-orange-400 border-orange-800',
                border: 'hover:border-orange-500',
            },
            cyan: {
                light: 'bg-teal-50 text-teal-700 border-teal-300',
                dark: 'bg-teal-900/20 text-teal-400 border-teal-800',
                border: 'hover:border-teal-500',
            },
        };
        const colorSet = colors[color];
        return `${isDarkMode ? colorSet.dark : colorSet.light} ${colorSet.border}`;
    };
    return (<section id="skills" className="min-h-screen flex items-center justify-center p-8 py-20 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
            ? 'bg-emerald-900/30 text-emerald-300 border-emerald-800'
            : 'bg-emerald-100 text-emerald-700 border-emerald-300'}`}>
            <div className="w-2 h-2 bg-emerald-500 rounded-full"/>
            Skills Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & Technologies
          </h2>
          <p className={`transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of my technical expertise
          </p>
        </div>

        {/* Skills Grid - Modular Components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (<div key={category.title} className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${isDarkMode
                    ? 'bg-slate-900 border-slate-800 hover:shadow-xl'
                    : 'bg-white border-slate-200 shadow-md hover:shadow-xl'} ${getColorClasses(category.color, isDarkMode).split(' ').find(c => c.startsWith('hover:'))}`}>
                {/* Module Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-dashed" style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 border-2 ${getColorClasses(category.color, isDarkMode)}`}>
                    <Icon className="w-6 h-6"/>
                  </div>
                  <h3 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags - Sub-modules */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (<span key={skill} className={`px-3 py-1 rounded-lg text-sm border transition-colors duration-300 ${isDarkMode
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                      {skill}
                    </span>))}
                </div>
              </div>);
        })}
        </div>

        {/* Additional Info Module */}
        <div className={`mt-12 p-8 rounded-2xl border-2 text-center transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-emerald-50 border-emerald-200 shadow-lg'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${isDarkMode
            ? 'bg-emerald-900/30 text-emerald-300 border-emerald-800'
            : 'bg-white text-emerald-700 border-emerald-300'}`}>
            💡 Learning Module
          </div>
          <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Always learning and exploring new technologies to stay ahead in the ever-evolving world of web development
          </p>
        </div>
      </div>
    </section>);
}
