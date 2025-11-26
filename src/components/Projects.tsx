import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  isDarkMode: boolean;
}

export function Projects({ isDarkMode }: ProjectsProps) {
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
    <section id="projects" className={`min-h-screen flex items-center justify-center p-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950' : 'bg-amber-50/30'
    }`}>
      <div className="max-w-6xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-amber-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-800 text-emerald-400 border-slate-700' 
              : 'bg-amber-50 text-emerald-700 border-emerald-200'
          }`}>
            <div className="w-2 h-2 bg-emerald-600 rounded-full" />
            Projects Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-amber-800'
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
                  ? 'bg-slate-900 border-slate-800 hover:border-emerald-600 shadow-lg hover:shadow-emerald-900/20' 
                  : 'bg-white border-amber-200 hover:border-emerald-400 shadow-lg hover:shadow-emerald-600/10'
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
                    ? 'bg-slate-900/90 text-emerald-400 border-slate-800' 
                    : 'bg-white/90 text-emerald-700 border-emerald-200'
                }`}>
                  {project.module}
                </div>
              </div>
              
              {/* Content Module */}
              <div className="p-6 space-y-4">
                <h3 className={`group-hover:text-emerald-600 transition-colors ${
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
                          : 'bg-amber-50 text-amber-900 border-amber-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Module */}
                <div className="flex gap-3 pt-2 border-t border-dashed"
                  style={{ borderColor: isDarkMode ? '#1e293b' : '#fde68a' }}
                >
                  <button className={`flex items-center gap-2 hover:text-emerald-600 transition-colors text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-amber-800'
                  }`}>
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className={`flex items-center gap-2 hover:text-emerald-600 transition-colors text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-amber-800'
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