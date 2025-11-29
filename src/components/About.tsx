import { useTheme } from '../context/ThemeContext';
import { SectionBadge } from './ui/SectionBadge';

export function About() {
  const { isDarkMode } = useTheme();
  const contentParagraphs = [
    "I'm a passionate developer with a love for creating well-structured, functional solutions. I have been learning how to use different tools, technologies, and techniques to be successful in any sector of the IT industry.",
    "When I'm not coding, you can find me invested in a book, spending time in nature, or going on mini-adventures with my wife."
  ];

  const shortTermGoals = [
    "Complete my current course and gain a solid foundation in software development",
    "Acquire full-time employment as a software developer",
    "Become a trusted team member and contribute to the success of the company"
  ];

  const longTermGoals = [
    "Become a team lead and mentor junior developers",
    "Develop expertise in a specific domain of software development",
    "Expand my professional network and opportunities"
  ];

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
            {contentParagraphs.map((text, index) => (
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

          {/* Career Goals Section */}
          <div className="mt-12 space-y-6">
            <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'
              }`}
              style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
            >
              Career Goals
            </h3>

            {/* Short-term Goals */}
            <div>
              <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#fde047]' : 'text-yellow-600'
                }`}
                style={{ color: isDarkMode ? '#fde047' : undefined }}
              >
                Short-term (1-2 years)
              </h4>
              <div className="space-y-2">
                {shortTermGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-300 ${isDarkMode
                      ? 'bg-yellow-900/10 hover:bg-yellow-900/20'
                      : 'bg-yellow-50 hover:bg-yellow-100'
                      }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'
                      }`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-700'
                      }`}
                      style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                    >
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-term Goals */}
            <div>
              <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-[#fde047]' : 'text-yellow-600'
                }`}
                style={{ color: isDarkMode ? '#fde047' : undefined }}
              >
                Long-term (3-5+ years)
              </h4>
              <div className="space-y-2">
                {longTermGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-300 ${isDarkMode
                      ? 'bg-yellow-900/10 hover:bg-yellow-900/20'
                      : 'bg-yellow-50 hover:bg-yellow-100'
                      }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-yellow-600' : 'bg-yellow-500'
                      }`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-[#e2e8f0]' : 'text-slate-700'
                      }`}
                      style={{ color: isDarkMode ? '#e2e8f0' : undefined }}
                    >
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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