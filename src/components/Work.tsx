import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import chessGameImage from '../assets/chess_game_in_progress.jpg';
import foodSafeImage from '../assets/food-safe-ns.png';
import aiTriviaGameImage from '../assets/AI-trivia-game.png';

interface WorkProps {
  isDarkMode: boolean;
}

export function Work({ isDarkMode }: WorkProps) {
  const projects = [
    {
      title: 'Chess Analysis Program',
      description: 'A comprehensive chess analysis platform in C++ featuring a fully-functional chess game, UCI chess engine integration and undo/redo system',
      tags: ['C++', 'MVC Architecture', 'Windows Process Handling', 'Custom UI'],
      image: chessGameImage,
      module: 'Game Design',
      href: 'https://github.com/JKaulback/PROG2100_chess_analysis_program'
    },
    {
      title: 'FoodSafe NS',
      description: 'A web application that helps Nova Scotians find food banks and browse their available inventory with advanced filtering options for allergens and dietary requirements',
      tags: ['React', 'Node.js', 'Firebase', 'Express Server', 'API Integration'],
      image: foodSafeImage,
      module: 'Full Stack',
      href: 'https://github.com/JKaulback/food-safe-ns'
    },
    {
      title: 'AI Trivia Game',
      description: 'An interactive web-based trivia game that uses the power of OpenAI\'s GPT to generate unlimited trivia questions.',
      tags: ['AI', 'API Integration', 'EJS', 'Node.js'],
      image: aiTriviaGameImage,
      module: 'API Interactions',
      href: 'https://github.com/JKaulback/AI_Trivia_Webapp'
    },
  ];

  return (
    <section id="work" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
            ? 'bg-emerald-900/30 text-[#6ee7b7] border-emerald-800'
            : 'bg-emerald-100 text-emerald-700 border-emerald-300'
            }`}
            style={{ color: isDarkMode ? '#6ee7b7' : undefined }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            Work Module
          </div>
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