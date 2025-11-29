import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../context/ThemeContext';
import { SectionBadge } from './ui/SectionBadge';
import { projects } from '../config/data';

export function Work() {
  const { isDarkMode } = useTheme();

  return (
    <section id="work" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <SectionBadge label="Work Module" color="emerald" className="mb-3" />
          <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Featured Projects
          </h2>
          <p className={`transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-600'
            }`}
            style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
          >
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${isDarkMode
                ? 'bg-slate-900 border-slate-800 hover:border-emerald-600 shadow-lg'
                : 'bg-white border-slate-200 hover:border-emerald-400 shadow-lg'
                }`}
            >
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs border-2 ${isDarkMode
                  ? 'bg-emerald-900 text-[#6ee7b7] border-emerald-800'
                  : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                  }`}
                  style={{
                    color: isDarkMode ? '#6ee7b7' : undefined,
                    backgroundColor: isDarkMode ? '#064e3b' : undefined
                  }}
                >
                  {project.module}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className={`group-hover:text-emerald-600 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#cbd5e1]' : 'text-slate-700'
                  }`}
                  style={{ color: isDarkMode ? '#cbd5e1' : undefined }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-lg text-xs border transition-colors duration-300 ${isDarkMode
                        ? 'bg-slate-800 text-[#e2e8f0] border-slate-700'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}
                      style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 border-t border-dashed"
                  style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}
                >
                  <a
                    href={project.href}
                    className={`flex items-center gap-2 hover:text-emerald-600 transition-colors text-sm cursor-pointer ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}