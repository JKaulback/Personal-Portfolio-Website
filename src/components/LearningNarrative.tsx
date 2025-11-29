interface LearningNarrativeProps {
    isDarkMode: boolean;
}

export function LearningNarrative({ isDarkMode }: LearningNarrativeProps) {

    return (
        <section id="extra" className="min-h-screen flex items-center justify-center p-8 pt-24 lg:pt-8 transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <div className={`p-8 md:p-12 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200 shadow-xl'
                    }`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm mb-6 border-2 transition-colors duration-300 ${isDarkMode
                        ? 'bg-pink-900/30 text-[#f9a8d4] border-pink-800'
                        : 'bg-pink-100 text-pink-700 border-pink-300'
                        }`}
                        style={{ color: isDarkMode ? '#f9a8d4' : undefined }}
                    >
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                        Learning Narrative Module
                    </div>

                    <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                        My Learning Journey
                    </h2>

                    <div className="space-y-8">
                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${isDarkMode
                            ? 'bg-pink-900/10 border-pink-800'
                            : 'bg-pink-50 border-pink-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-pink-200' : 'text-pink-700'
                                }`}>
                                Why did you choose to take IT Programming at NSCC?
                            </h3>
                            <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'
                                }`}
                                style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
                            >
                                My interest in software development began with a high school Python and robotics course. I previously worked in the IT industry with J.D. Irving, which was my most fulfilling role to date. While programming concepts come naturally to me, I realized my growth was limited by "not knowing what I didn't know." I enrolled in the IT Programming program at NSCC to bridge those gaps, master modern industry practices, and build a strong professional network.
                            </p>
                        </div>

                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${isDarkMode
                            ? 'bg-pink-900/10 border-pink-800'
                            : 'bg-pink-50 border-pink-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-pink-200' : 'text-pink-700'
                                }`}>
                                What knowledge, skills and abilities do you bring with you to NSCC?
                            </h3>
                            <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'
                                }`}
                                style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
                            >
                                I bring prior industry experience and a strong foundation in Java and Object-Oriented Principles from UNB, along with skills in technical documentation and public speaking. My background in manual labor has instilled a strong work ethic, prioritizing safety and effective time management. I am adaptable, able to learn new concepts quickly, and skilled at applying theoretical knowledge to practical solutions.
                            </p>
                        </div>

                        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${isDarkMode
                            ? 'bg-pink-900/10 border-pink-800'
                            : 'bg-pink-50 border-pink-200'
                            }`}>
                            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-pink-200' : 'text-pink-700'
                                }`}>
                                Where do you see yourself in five years?
                            </h3>
                            <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'
                                }`}
                                style={{ color: isDarkMode ? '#f1f5f9' : undefined }}
                            >
                                In five years, I envision myself as a key contributor to an organization's IT infrastructure. I aim to be deeply integrated into operations, actively driving improvements, and progressing towards specialization in a specific sector of the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
