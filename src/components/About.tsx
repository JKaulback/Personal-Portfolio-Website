import { useTheme } from '../context/ThemeContext';
import { SectionBadge } from './ui/SectionBadge';
import { aboutContent } from '../config/data';

export function About() {
  const { isDarkMode } = useTheme();
  const { paragraphs } = aboutContent;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8 pt-24 lg:pt-8 transition-colors duration-300">
      <div className="max-w-3xl">
        <div className={`p-8 md:p-12 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-xl'
          }`}>
          <SectionBadge label="About Me Module" color="yellow" className="mb-6" />

          <h2 className={`mb-6 transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-600'
            }`}
            style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
          >
            Junior Developer, Lifelong Problem Solver
          </h2>

          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <div key={index} className={`p-4 rounded-xl border-l-4 transition-colors duration-300 ${isDarkMode
                ? 'bg-yellow-900/20 border-yellow-500'
                : 'bg-yellow-50 border-yellow-400'
                }`}>
                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-700'
                  }`}
                  style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-6 mt-6 border-t-2 border-dashed transition-colors duration-300"
            style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}
          >
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg transition-colors border-2 cursor-pointer ${isDarkMode
                ? 'bg-yellow-500 text-white border-yellow-400 hover:bg-yellow-600'
                : 'bg-yellow-500 text-white border-yellow-400 hover:bg-yellow-600 shadow-md'
                }`}
              style={{
                backgroundColor: isDarkMode ? '#eab308' : undefined,
                borderColor: isDarkMode ? '#facc15' : undefined
              }}
            >
              Get in touch
            </a>
            <a
              href="#work"
              className={`px-6 py-3 border-2 rounded-lg transition-colors cursor-pointer ${isDarkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-yellow-500 hover:text-yellow-400'
                : 'bg-white border-yellow-300 text-yellow-900 hover:border-yellow-500 hover:text-yellow-700'
                }`}
            >
              View my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}