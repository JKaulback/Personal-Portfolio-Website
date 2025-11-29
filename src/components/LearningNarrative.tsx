import { useTheme } from '../context/ThemeContext';
import { SectionBadge } from './ui/SectionBadge';
import { learningNarrative } from '../config/data';

export function LearningNarrative() {
    const { isDarkMode } = useTheme();

    return (
        <section id="extra" className="min-h-screen flex items-center justify-center p-8 pt-24 lg:pt-8 transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <div className={`p-8 md:p-12 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200 shadow-xl'
                    }`}>
                    <SectionBadge label="Learning Narrative Module" color="pink" className="mb-6" />

                    <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                        My Learning Journey
                    </h2>

                    <div className="space-y-8">
                        {learningNarrative.map((item, index) => (
                            <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 ${isDarkMode
                                ? 'bg-pink-900/10 border-pink-800'
                                : 'bg-pink-50 border-pink-200'
                                }`}>
                                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-pink-200' : 'text-pink-700'
                                    }`}>
                                    {item.question}
                                </h3>
                                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'
                                    }`}
                                    style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
