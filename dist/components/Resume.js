import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
export function Resume({ isDarkMode }) {
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
    return (_jsx("section", { id: "resume", className: "min-h-screen flex items-center justify-center p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-5xl w-full", children: [_jsxs("div", { className: `mb-12 p-6 rounded-2xl border-2 transition-colors duration-300 ${isDarkMode
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200 shadow-lg'}`, children: [_jsxs("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs mb-3 border transition-colors duration-300 ${isDarkMode
                                ? 'bg-yellow-900/30 text-yellow-300 border-yellow-800'
                                : 'bg-yellow-100 text-yellow-700 border-yellow-300'}`, children: [_jsx("div", { className: "w-2 h-2 bg-yellow-500 rounded-full" }), "Resume Module"] }), _jsx("h2", { className: `mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`, children: "Professional Experience" }), _jsx("p", { className: `transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`, children: "My professional journey" })] }), _jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2 space-y-6", children: _jsxs("div", { className: `p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`, children: [_jsx("h3", { className: `mb-4 pb-2 border-b-2 border-dashed ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'}`, children: "Work Experience" }), _jsx("div", { className: "space-y-6", children: experience.map((job, index) => (_jsxs("div", { className: `p-4 rounded-xl border-2 ${isDarkMode ? 'bg-yellow-900/20 border-yellow-800/50' : 'bg-yellow-50 border-yellow-200'}`, children: [_jsx("h4", { className: `transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`, children: job.role }), _jsx("p", { className: `mb-3 transition-colors duration-300 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`, children: job.company }), _jsxs("div", { className: "flex flex-wrap gap-3 mb-3 text-sm", children: [_jsxs("span", { className: `flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(MapPin, { className: "w-4 h-4" }), job.location] }), _jsxs("span", { className: `flex items-center gap-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`, children: [_jsx(Calendar, { className: "w-4 h-4" }), job.period] })] }), _jsx("ul", { className: `space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`, children: job.highlights.map((highlight, i) => (_jsxs("li", { className: "flex gap-2", children: [_jsx("span", { className: "text-yellow-500", children: "\u2022" }), _jsx("span", { children: highlight })] }, i))) })] }, index))) })] }) }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: `p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`, children: [_jsxs("h3", { className: `mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'}`, children: [_jsx(GraduationCap, { className: "w-5 h-5" }), "Education"] }), education.map((edu, index) => (_jsxs("div", { className: `p-4 rounded-xl border-2 ${isDarkMode ? 'bg-yellow-900/20 border-yellow-800/50' : 'bg-yellow-50 border-yellow-200'}`, children: [_jsx("h4", { className: `text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`, children: edu.degree }), _jsx("p", { className: `text-sm mb-2 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`, children: edu.school }), _jsx("p", { className: `text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`, children: edu.period })] }, index)))] }), _jsxs("div", { className: `p-4 rounded-xl border-2 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`, children: [_jsxs("h3", { className: `mb-4 pb-2 border-b-2 border-dashed flex items-center gap-2 ${isDarkMode ? 'text-white border-slate-700' : 'text-slate-900 border-slate-300'}`, children: [_jsx(Award, { className: "w-5 h-5" }), "Certifications & Awards"] }), _jsx("div", { className: "space-y-2", children: certifications.map((cert, index) => (_jsx("div", { className: `p-3 rounded-lg border-2 text-sm ${isDarkMode
                                                    ? 'bg-yellow-900/20 border-yellow-800/50 text-slate-300'
                                                    : 'bg-yellow-50 border-yellow-200 text-slate-700'}`, children: cert }, index))) })] })] })] })] }) }));
}
