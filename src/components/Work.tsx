import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkProps {
  isDarkMode: boolean;
}

export function Work({ isDarkMode }: WorkProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory management, payment processing, and customer analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      module: 'Frontend',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
      module: 'Full Stack',
    },
    {
      title: 'Portfolio Website Builder',
      description: 'No-code platform that enables creators to build beautiful portfolio websites with customizable templates and themes.',
      tags: ['Next.js', 'Prisma', 'AWS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      module: 'Backend',
    },
  ];

  return (
    <section id="work" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-sky-900/30 text-sky-300 border-sky-800' 
              : 'bg-sky-100 text-sky-700 border-sky-300'
          }`}>
            <div className="w-2 h-2 bg-sky-500 rounded-full" />
            Work Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid - Modular Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-sky-600 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-sky-400 shadow-lg'
              }`}
            >
              {/* Image Module */}
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Module Label */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs border-2 ${
                  isDarkMode 
                    ? 'bg-sky-900/90 text-sky-300 border-sky-800' 
                    : 'bg-sky-100 text-sky-700 border-sky-300'
                }`}>
                  {project.module}
                </div>
              </div>
              
              {/* Content Module */}
              <div className="p-6 space-y-4">
                <h3 className={`group-hover:text-sky-600 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>
                
                {/* Tags Module */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-lg text-xs border transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-800 text-slate-300 border-slate-700' 
                          : 'bg-sky-50 text-sky-800 border-sky-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Module */}
                <div className="flex gap-3 pt-2 border-t border-dashed"
                  style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}
                >
                  <button className={`flex items-center gap-2 hover:text-sky-600 transition-colors text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className={`flex items-center gap-2 hover:text-sky-600 transition-colors text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}