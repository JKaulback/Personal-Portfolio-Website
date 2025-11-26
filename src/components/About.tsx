interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8 pt-24 lg:pt-8 transition-colors duration-300">
      <div className="max-w-3xl">
        {/* Modular Container */}
        <div className={`p-8 md:p-12 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          {/* Module Header */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm mb-6 border-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-orange-900/30 text-orange-300 border-orange-800' 
              : 'bg-orange-100 text-orange-700 border-orange-300'
          }`}>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            About Me Module
          </div>
          
          <h1 className={`mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Building Digital Solutions
          </h1>
          
          <h2 className={`mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Full Stack Developer & Designer
          </h2>
          
          {/* Content Modules */}
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border-l-4 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-orange-900/20 border-orange-500' 
                : 'bg-orange-50 border-orange-400'
            }`}>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-700'
              }`}>
                I'm a passionate developer with a love for creating beautiful, functional web experiences. 
                With over 5 years of experience in the industry, I specialize in building modern web applications 
                that are both visually appealing and highly performant.
              </p>
            </div>
            
            <div className={`p-4 rounded-xl border-l-4 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-orange-900/20 border-orange-500' 
                : 'bg-orange-50 border-orange-400'
            }`}>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-700'
              }`}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good cup of coffee while sketching out new design ideas.
              </p>
            </div>
          </div>

          {/* Action Modules */}
          <div className="flex gap-4 pt-6 mt-6 border-t-2 border-dashed transition-colors duration-300"
            style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}
          >
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg transition-colors border-2 ${
                isDarkMode 
                  ? 'bg-orange-600 text-white border-orange-500 hover:bg-orange-700' 
                  : 'bg-orange-500 text-white border-orange-400 hover:bg-orange-600 shadow-md'
              }`}
            >
              Get in touch
            </a>
            <a 
              href="#work" 
              className={`px-6 py-3 border-2 rounded-lg transition-colors ${
                isDarkMode 
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