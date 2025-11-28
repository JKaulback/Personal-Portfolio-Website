interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
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
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm mb-6 border-2 transition-colors duration-300 ${isDarkMode
            ? 'bg-orange-900/30 text-orange-300 border-orange-800'
            : 'bg-orange-100 text-orange-700 border-orange-300'
            }`}>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            About Me Module
          </div>

          <h2 className={`mb-6 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Junior Developer, Lifelong Problem Solver
          </h2>

          <div className="space-y-4">
            {contentParagraphs.map((text, index) => (
              <div key={index} className={`p-4 rounded-xl border-l-4 transition-colors duration-300 ${isDarkMode
                ? 'bg-orange-900/20 border-orange-500'
                : 'bg-orange-50 border-orange-400'
                }`}>
                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Career Goals Section */}
          <div className="mt-12 space-y-6">
            <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
              Career Goals
            </h3>

            {/* Short-term Goals */}
            <div>
              <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'
                }`}>
                Short-term (1-2 years)
              </h4>
              <div className="space-y-2">
                {shortTermGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-300 ${isDarkMode
                      ? 'bg-orange-900/10 hover:bg-orange-900/20'
                      : 'bg-orange-50 hover:bg-orange-100'
                      }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                      }`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                      }`}>
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-term Goals */}
            <div>
              <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'
                }`}>
                Long-term (3-5+ years)
              </h4>
              <div className="space-y-2">
                {longTermGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-300 ${isDarkMode
                      ? 'bg-orange-900/10 hover:bg-orange-900/20'
                      : 'bg-orange-50 hover:bg-orange-100'
                      }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-orange-600' : 'bg-orange-500'
                      }`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                      }`}>
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
              className={`px-6 py-3 rounded-lg transition-colors border-2 ${isDarkMode
                ? 'bg-orange-600 text-white border-orange-500 hover:bg-orange-700'
                : 'bg-orange-500 text-white border-orange-400 hover:bg-orange-600 shadow-md'
                }`}
            >
              Get in touch
            </a>
            <a
              href="#work"
              className={`px-6 py-3 border-2 rounded-lg transition-colors ${isDarkMode
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-orange-500 hover:text-orange-400'
                : 'bg-white border-orange-300 text-orange-900 hover:border-orange-500 hover:text-orange-700'
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