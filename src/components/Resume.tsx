import { Calendar, MapPin, Award, GraduationCap, Download } from 'lucide-react';
import resumePdf from '../assets/Resume.pdf';

interface ResumeProps {
  isDarkMode: boolean;
}

export function Resume({ isDarkMode }: ResumeProps) {
  const experience = [
    {
      role: 'Junior IT Analyst',
      company: 'J.D. Irving IT Department',
      location: 'Saint John, NB',
      period: 'Jan \'19 - Apr \'19',
      highlights: [
        'Automated configuration and functional testing processes, improving team efficiency.',
        'Authored training documentation used for both technical and non-technical co-workers.',
        'Identified and communicated bugs, contributing to faster issue resolution.',
        'Collaborated with team members to effectively clarify requirements and constraints.'
      ],
    },
    {
      role: 'Carpenter/Draftsman',
      company: 'Sycamore Tiny Homes',
      location: 'Baker Settlement, NS',
      period: 'Aug \'23 - Sept \'25',
      highlights: [
        'Collaborated with team members and worked independently on custom residential projects.',
        'Designed detailed 3D models and 2D construction documentation using SketchUp.',
        'Adapted designs to requirement changes and feedback from clients and team reviews.',
        'Maintained consistent punctuality and reliability on job sites.'
      ],
    }
  ];

  const education = [
    {
      degree: 'IT Programming Diploma',
      school: 'Nova Scotia Community College',
      period: 'Sept \'24 - Present'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'University of New Brunswick',
      period: 'Sept \'18 - Feb \'20 (Incomplete)',
    },
  ];

  const certifications = [
    'First Place Winner of 2025 RBC HubHacks',
    'Occupational Health & Safety Act',
    'Workplace Hazardous Materials Information Systems'
  ];

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-5xl w-full">
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 relative ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <div className="flex flex-row justify-between items-center gap-6">
            <div className="flex flex-col">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 w-fit ${isDarkMode
                ? 'bg-orange-900/30 text-orange-300 border-orange-800'
                : 'bg-orange-100 text-orange-700 border-orange-300'
                }`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                Resume Module
              </div>
              <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                Professional Experience
              </h2>
              <p className={`transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                My professional journey
              </p>
            </div>

            <a
              href={resumePdf}
              download="Resume.pdf"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 shrink-0 cursor-pointer ${isDarkMode
                ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20'
                : 'bg-orange-50 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30'
                }`}
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
                }`}>
                Work Experience
              </h3>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${isDarkMode ? 'bg-orange-900/20 border-orange-800/50' : 'bg-orange-50 border-orange-200'
                    }`}>
                    <h4 className={`transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      {job.role}
                    </h4>
                    <p className={`mb-3 transition-colors duration-300 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'
                      }`}>
                      {job.company}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-3 text-sm">
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                      }`}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-orange-500">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
                }`}>
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>

              {education.map((edu, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${isDarkMode ? 'bg-orange-900/20 border-orange-800/50' : 'bg-orange-50 border-orange-200'
                  }`}>
                  <h4 className={`text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-orange-300' : 'text-orange-700'
                    }`}>
                    {edu.school}
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
                }`}>
                <Award className="w-5 h-5" />
                Certifications & Awards
              </h3>

              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-2 text-sm ${isDarkMode
                    ? 'bg-orange-900/20 border-orange-800/50 text-slate-300'
                    : 'bg-orange-50 border-orange-200 text-slate-700'
                    }`}>
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}