import { Heart, Coffee, Music, Camera, Book, Plane } from 'lucide-react';

interface ExtraCreditProps {
  isDarkMode: boolean;
}

export function ExtraCredit({ isDarkMode }: ExtraCreditProps) {
  const interests = [
    {
      icon: Coffee,
      title: 'Coffee Enthusiast',
      description: 'Always exploring new brewing methods and local roasteries',
      color: 'amber',
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Creating electronic music in my spare time',
      color: 'purple',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Street and landscape photography hobbyist',
      color: 'blue',
    },
    {
      icon: Book,
      title: 'Continuous Learning',
      description: 'Reading tech blogs, books, and taking online courses',
      color: 'green',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Visited 15 countries and counting',
      color: 'cyan',
    },
    {
      icon: Heart,
      title: 'Open Source',
      description: 'Contributing to community projects and mentoring',
      color: 'red',
    },
  ];

  const funFacts = [
    '☕ I\'ve tried over 50 different coffee brewing methods',
    '🎮 Competitive gamer in my college days',
    '📚 Read 24 technical books last year',
    '🌱 Growing my own vegetables in my backyard',
    '🎨 Used to work as a freelance graphic designer',
  ];

  return (
    <section id="extra" className="min-h-screen flex items-center justify-center p-8 transition-colors duration-300">
      <div className="max-w-6xl w-full">
        {/* Section Header Module */}
        <div className={`mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-pink-900/30 text-pink-300 border-pink-800 shadow-pink-500/20' 
              : 'bg-pink-100 text-pink-700 border-pink-300'
          }`}>
            <div className="w-2 h-2 bg-pink-500 rounded-full" />
            Extra Credit Module
          </div>
          <h2 className={`mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Beyond the Code
          </h2>
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Interests, hobbies, and fun facts about me
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 hover:shadow-xl' 
                    : 'bg-white border-slate-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 border-2 ${
                  isDarkMode 
                    ? 'bg-pink-900/30 text-pink-300 border-pink-800' 
                    : 'bg-pink-100 text-pink-600 border-pink-300'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className={`mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {interest.title}
                </h3>
                
                <p className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-700'
                }`}>
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fun Facts Module */}
        <div className={`p-8 rounded-2xl border-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-pink-50 border-pink-200 shadow-lg'
        }`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-4 border ${
            isDarkMode 
              ? 'bg-pink-900/30 text-pink-300 border-pink-800' 
              : 'bg-white text-pink-700 border-pink-300'
          }`}>
            ✨ Fun Facts Module
          </div>
          
          <h3 className={`mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Random Things About Me
          </h3>
          
          <div className="grid md:grid-cols-2 gap-3">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-pink-900/20 border-pink-800/50 text-slate-300' 
                    : 'bg-white border-pink-200 text-slate-700'
                }`}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}