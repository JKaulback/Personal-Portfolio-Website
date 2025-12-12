import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import chessGameImage from '../assets/chess_game_in_progress.jpg';
import foodSafeImage from '../assets/food-safe-ns.png';
import casandrasClientKeeperImage from '../assets/casandras-client-keeper.png';

export const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jtkaulback@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Bridgewater, NS' },
];

export const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/JKaulback' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-kaulback-832b8314b/' },
];

export const aboutContent = {
    paragraphs: [
        "I'm a passionate developer with a love for creating well-structured, functional solutions. I have been learning how to use different tools, technologies, and techniques to be successful in any sector of the IT industry.",
        "When I'm not coding, you can find me invested in a book, spending time in nature, or going on mini-adventures with my wife."
    ],
};

export const skillsInventory = [
    // Programming Languages
    { skill: 'JavaScript', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Website Structure & Styling', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'TypeScript', category: 'Programming Languages', acquiredAt: 'Self-Directed Learning', activity: 'Styling & Organization', evidence: 'GitHub Repository/Personal-Portfolio-Website' },
    { skill: 'Java', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/SRP-Refactoring-Exercise' },
    { skill: 'C++', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/PROG2100_chess_analysis_program' },

    // Web Development
    { skill: 'Node.js', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Server-side Scripting', evidence: 'GitHub Repository/casandras-client-keeper' },
    { skill: 'React', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Frontend Development', evidence: 'GitHub Repository/casandras-client-keeper' },
    { skill: 'REST APIs', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'API Integration', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'HTML/CSS', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Structure & Styling', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'Bootstrap', category: 'Web Development', acquiredAt: 'Self-Directed Learning', activity: 'Responsive Design', evidence: 'GitHub Repository/AI-Trivia-Webapp' },
    { skill: 'Tailwind CSS', category: 'Web Development', acquiredAt: 'Self-Directed Learning', activity: 'Styling & Organization', evidence: 'GitHub Repository/Personal-Portfolio-Website' },
    { skill: 'Sass', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Styling & Organization', evidence: 'Coursework' },

    // Database
    { skill: 'PostgreSQL', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'Coursework' },
    { skill: 'MongoDB', category: 'Database', acquiredAt: 'Self-Directed Learning', activity: 'NoSQL Implementation', evidence: 'MERN Stack App' },
    { skill: 'Firebase', category: 'Database', acquiredAt: 'Self-Directed Learning', activity: 'NoSQL Implementation', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'SQL', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'Coursework' },
    { skill: 'Room', category: 'Database', acquiredAt: 'NSCC Coursework', activity: 'Database Management', evidence: 'GitHub Repository/MOBI3002_SemesterProject' },

    // Mobile
    { skill: 'React Native', category: 'Mobile', acquiredAt: 'Self-Directed Learning', activity: 'Mobile App Development', evidence: 'Mobile Prototype' },
    { skill: 'Android Studio', category: 'Mobile', acquiredAt: 'NSCC Coursework', activity: 'Native Android Apps', evidence: 'Android Project' },
    { skill: 'Kotlin', category: 'Mobile', acquiredAt: 'NSCC Coursework', activity: 'Native Android Apps', evidence: 'Android Project' },

    // DevOps
    { skill: 'Git & GitHub', category: 'DevOps', acquiredAt: 'NSCC Coursework', activity: 'Version Control', evidence: 'GitHub Commit History' },
    { skill: 'Docker', category: 'DevOps', acquiredAt: 'Self-Directed Learning', activity: 'Containerization', evidence: 'GitHub Repository/INET2005_Assignment3_JK' },
    { skill: 'Postman', category: 'DevOps', acquiredAt: 'Self-Directed Learning', activity: 'API Testing', evidence: 'GitHub Repository/INET2005_Assignment3_JK' },

    // Soft Skills
    { skill: 'Problem Solving', category: 'Soft Skills', acquiredAt: 'Various Projects', activity: 'Debugging & Logic', evidence: 'Project Success Rates' },
    { skill: 'Communication', category: 'Soft Skills', acquiredAt: 'Group Projects', activity: 'Team Collaboration', evidence: 'Peer Reviews' },
    { skill: 'Time Management', category: 'Soft Skills', acquiredAt: 'Academic Schedule', activity: 'Project Planning', evidence: 'On-time Deliveries' },
];

export const projects = [
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
        title: 'Casandra\'s Client Keeper',
        description: 'A full-stack web application that helps small businesses manage their clients and appointments',
        tags: ['React', 'Node.js', 'MongoDB', 'Express Server', 'API Integration'],
        image: casandrasClientKeeperImage,
        module: 'Full Stack',
        href: 'https://github.com/JKaulback/casandras-client-keeper'
    },
];

export const experience = [
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

export const education = [
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

export const certifications = [
    'First Place Winner of 2025 RBC HubHacks',
    'Occupational Health & Safety Act',
    'Workplace Hazardous Materials Information Systems'
];
