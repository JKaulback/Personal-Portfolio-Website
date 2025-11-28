import { BookOpen, Lightbulb, Target } from 'lucide-react';

interface LearningNarrativeProps {
    isDarkMode: boolean;
}

export function LearningNarrative({ isDarkMode }: LearningNarrativeProps) {
    const learningJourney = [
        {
            icon: BookOpen,
            title: "Continuous Learning",
            description: "I believe in the power of continuous learning and staying current with emerging technologies. Every project is an opportunity to expand my knowledge and refine my skills."
        },
        {
            icon: Lightbulb,
            title: "Learning by Doing",
            description: "Hands-on experience is my preferred learning method. I learn best by building real projects, experimenting with new tools, and solving practical problems."
        },
        {
            icon: Target,
            title: "Growth Mindset",
            description: "Challenges are opportunities for growth. I embrace mistakes as learning experiences and constantly seek feedback to improve my craft."
        }
    ];

    const keyLearnings = [
        "Building responsive, accessible web applications with modern frameworks",
        "Understanding software architecture and design patterns",
        "Collaborating effectively in team environments using version control",
        "Applying problem-solving methodologies to complex technical challenges"
    ];

    return (
        <section id="extra" className="min-h-screen flex items-center justify-center p-8 pt-24 lg:pt-8 transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <div className={`p-8 md:p-12 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200 shadow-xl'
                    }`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm mb-6 border-2 transition-colors duration-300 ${isDarkMode
                            ? 'bg-pink-900/30 text-pink-300 border-pink-800'
                            : 'bg-pink-100 text-pink-700 border-pink-300'
                        }`}>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                        Learning Narrative Module
                    </div>

                    <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                        My Learning Journey
                    </h2>

                    <p className={`mb-8 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        As a developer, I view learning as a lifelong journey rather than a destination.
                        My approach to learning is rooted in curiosity, experimentation, and a commitment to continuous improvement.
                    </p>

                    {/* Learning Philosophy Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {learningJourney.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${isDarkMode
                                            ? 'bg-pink-900/10 border-pink-800 hover:border-pink-600'
                                            : 'bg-pink-50 border-pink-200 hover:border-pink-400 hover:shadow-lg'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${isDarkMode ? 'bg-pink-600' : 'bg-pink-500'
                                        }`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
                                        }`}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Key Learnings Section */}
                    <div className={`p-6 rounded-xl border-l-4 transition-colors duration-300 ${isDarkMode
                            ? 'bg-pink-900/20 border-pink-500'
                            : 'bg-pink-50 border-pink-400'
                        }`}>
                        <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'
                            }`}>
                            Key Learning Areas
                        </h3>
                        <div className="space-y-3">
                            {keyLearnings.map((learning, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300 ${isDarkMode ? 'bg-pink-400' : 'bg-pink-500'
                                        }`} />
                                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                                        }`}>
                                        {learning}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex gap-4 pt-6 mt-6 border-t-2 border-dashed transition-colors duration-300"
                        style={{ borderColor: isDarkMode ? '#334155' : '#e2e8f0' }}
                    >
                        <a
                            href="#skills"
                            className={`px-6 py-3 rounded-lg transition-colors border-2 ${isDarkMode
                                    ? 'bg-pink-600 text-white border-pink-500 hover:bg-pink-700'
                                    : 'bg-pink-500 text-white border-pink-400 hover:bg-pink-600 shadow-md'
                                }`}
                        >
                            View my skills
                        </a>
                        <a
                            href="#work"
                            className={`px-6 py-3 border-2 rounded-lg transition-colors ${isDarkMode
                                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-pink-500 hover:text-pink-400'
                                    : 'bg-white border-pink-300 text-pink-900 hover:border-pink-500 hover:text-pink-700'
                                }`}
                        >
                            See my projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
