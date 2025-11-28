"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = Work;
const lucide_react_1 = require("lucide-react");
const ImageWithFallback_1 = require("./figma/ImageWithFallback");
const chess_game_in_progress_jpg_1 = require("../assets/chess_game_in_progress.jpg");
const food_safe_ns_png_1 = require("../assets/food-safe-ns.png");
const AI_trivia_game_png_1 = require("../assets/AI-trivia-game.png");
function Work({ isDarkMode }) {
    const projects = [
        {
            title: 'Chess Analysis Program',
            description: 'A comprehensive chess analysis platform in C++ featuring a fully-functional chess game, UCI chess engine integration and undo/redo system',
            tags: ['C++', 'MVC Architecture', 'Windows Process Handling', 'Custom UI'],
            image: chess_game_in_progress_jpg_1.default,
            module: 'Game Design',
            href: 'https://github.com/JKaulback/PROG2100_chess_analysis_program'
        },
        {
            title: 'FoodSafe NS',
            description: 'A web application that helps Nova Scotians find food banks and browse their available inventory with advanced filtering options for allergens and dietary requirements',
            tags: ['React', 'Node.js', 'Firebase', 'Express Server', 'API Integration'],
            image: food_safe_ns_png_1.default,
            module: 'Full Stack',
            href: 'https://github.com/JKaulback/food-safe-ns'
        },
        {
            title: 'AI Trivia Game',
            description: 'An interactive web-based trivia game that uses the power of OpenAI\'s GPT to generate unlimited trivia questions.',
            tags: ['AI', 'API Integration', 'EJS', 'Node.js'],
            image: AI_trivia_game_png_1.default,
            module: 'API Interactions',
            href: 'https://github.com/JKaulback/AI_Trivia_Webapp'
        },
    ];
    return (<section id="work" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
            ? 'bg-sky-900/30 text-sky-300 border-sky-800'
            : 'bg-sky-100 text-sky-700 border-sky-300'}`}>
            <div className="w-2 h-2 bg-sky-500 rounded-full"/>
            Work Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects
          </h2>
          <p className={`transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid - Modular Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (<div key={index} className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${isDarkMode
                ? 'bg-slate-900 border-slate-800 hover:border-sky-600 shadow-lg'
                : 'bg-white border-slate-200 hover:border-sky-400 shadow-lg'}`}>
              {/* Image Module */}
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <ImageWithFallback_1.ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                {/* Module Label */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs border-2 ${isDarkMode
                ? 'bg-sky-900/90 text-sky-300 border-sky-800'
                : 'bg-sky-100 text-sky-700 border-sky-300'}`}>
                  {project.module}
                </div>
              </div>
              
              {/* Content Module */}
              <div className="p-6 space-y-4">
                <h3 className={`group-hover:text-sky-600 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                  {project.description}
                </p>
                
                {/* Tags Module */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (<span key={tag} className={`px-3 py-1 rounded-lg text-xs border transition-colors duration-300 ${isDarkMode
                    ? 'bg-slate-800 text-slate-300 border-slate-700'
                    : 'bg-sky-50 text-sky-800 border-sky-200'}`}>
                      {tag}
                    </span>))}
                </div>

                {/* Action Module */}
                <div className="flex gap-3 pt-2 border-t border-dashed" style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}>
                  <a href={project.href} className={`flex items-center gap-2 hover:text-sky-600 transition-colors text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <lucide_react_1.Github className="w-4 h-4"/>
                    Code
                  </a>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </section>);
}
