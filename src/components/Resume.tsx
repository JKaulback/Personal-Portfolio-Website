import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

interface ResumeProps {
  isDarkMode: boolean;
}

export function Resume({ isDarkMode }: ResumeProps) {
  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      highlights: [
        'Led development of microservices architecture serving 2M+ users',
        'Mentored team of 5 junior developers',
        'Reduced page load time by 60% through optimization',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Remote',
      period: '2019 - 2021',
      highlights: [
        'Built and maintained 15+ client web applications',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Collaborated with design team on UX improvements',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Labs',
      location: 'San Francisco, CA',
      period: '2018 - 2019',
      highlights: [
        'Developed responsive frontend components using React',
        'Participated in agile development sprints',
        'Contributed to open-source company projects',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California',
      period: '2014 - 2018',
      honors: 'Magna Cum Laude',
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Meta React Certification',
  ];

  return (
    <section id="resume" className={`min-h-screen flex items-center justify-center p-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className="max-w-5xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-yellow-900/30 text-yellow-300 border-yellow-800' 
              : 'bg-yellow-100 text-yellow-700 border-yellow-300'
          }`}>
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            Resume Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            My journey in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-4 rounded-xl border-2 ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed ${
                isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
              }`}>
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    isDarkMode ? 'bg-yellow-900/20 border-yellow-800/50' : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <h4 className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {job.role}
                    </h4>
                    <p className={`mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-yellow-300' : 'text-yellow-700'
                    }`}>
                      {job.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-3 text-sm">
                      <span className={`flex items-center gap-1 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-700'
                    }`}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-yellow-500">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="space-y-6">
            {/* Education */}
            <div className={`p-4 rounded-xl border-2 ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${
                isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
              }`}>
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${
                  isDarkMode ? 'bg-yellow-900/20 border-yellow-800/50' : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <h4 className={`text-sm mb-2 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm mb-2 ${
                    isDarkMode ? 'text-yellow-300' : 'text-yellow-700'
                  }`}>
                    {edu.school}
                  </p>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {edu.period}
                  </p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-xs border ${
                    isDarkMode 
                      ? 'bg-yellow-900/30 text-yellow-300 border-yellow-800' 
                      : 'bg-yellow-100 text-yellow-700 border-yellow-300'
                  }`}>
                    {edu.honors}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className={`p-4 rounded-xl border-2 ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${
                isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'
              }`}>
                <Award className="w-5 h-5" />
                Certifications
              </h3>
              
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-2 text-sm ${
                    isDarkMode 
                      ? 'bg-yellow-900/20 border-yellow-800/50 text-slate-300' 
                      : 'bg-yellow-50 border-yellow-200 text-slate-700'
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