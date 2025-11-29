import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import chessGameImage from '../assets/chess_game_in_progress.jpg';
import foodSafeImage from '../assets/food-safe-ns.png';
import aiTriviaGameImage from '../assets/AI-trivia-game.png';

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
    shortTermGoals: [
        "Complete my current course and gain a solid foundation in software development",
        "Acquire full-time employment as a software developer",
        "Become a trusted team member and contribute to the success of the company"
    ],
    longTermGoals: [
        "Become a team lead and mentor junior developers",
        "Develop expertise in a specific domain of software development",
        "Expand my professional network and opportunities"
    ]
};

export const skillsInventory = [
    // Programming Languages
    { skill: 'JavaScript', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Website Structure & Styling', evidence: 'GitHub Repository/food-safe-nb' },
    { skill: 'TypeScript', category: 'Programming Languages', acquiredAt: 'Self-Directed Learning', activity: 'Styling & Organization', evidence: 'GitHub Repository/Personal-Portfolio-Website' },
    { skill: 'Java', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/SRP-Refactoring-Exercise' },
    { skill: 'C++', category: 'Programming Languages', acquiredAt: 'NSCC Coursework', activity: 'Data Processing & Scripting', evidence: 'GitHub Repository/PROG2100_chess_analysis_program' },

    // Web Development
    { skill: 'Node.js', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Server-side Scripting', evidence: 'MERN Stack App' },
    { skill: 'React', category: 'Web Development', acquiredAt: 'NSCC Coursework', activity: 'Frontend Development', evidence: 'MERN Stack App' },
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
        title: 'AI Trivia Game',
        description: 'An interactive web-based trivia game that uses the power of OpenAI\'s GPT to generate unlimited trivia questions.',
        tags: ['AI', 'API Integration', 'EJS', 'Node.js'],
        image: aiTriviaGameImage,
        module: 'API Interactions',
        href: 'https://github.com/JKaulback/AI_Trivia_Webapp'
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

export const learningNarrative = [
    {
        question: 'Why did you choose to take IT Programming at NSCC?',
        answer: 'My interest in software development began with a high school Python and robotics course. I previously worked in the IT industry with J.D. Irving, which was my most fulfilling role to date. While programming concepts come naturally to me, I realized my growth was limited by "not knowing what I didn\'t know." I enrolled in the IT Programming program at NSCC to bridge those gaps, master modern industry practices, and build a strong professional network.'
    },
    {
        question: 'What knowledge, skills and abilities do you bring with you to NSCC?',
        answer: 'I bring prior industry experience and a strong foundation in Java and Object-Oriented Principles from UNB, along with skills in technical documentation and public speaking. My background in manual labor has instilled a strong work ethic, prioritizing safety and effective time management. I am adaptable, able to learn new concepts quickly, and skilled at applying theoretical knowledge to practical solutions.'
    },
    {
        question: 'Where do you see yourself in five years?',
        answer: 'In five years, I envision myself as a key contributor to an organization\'s IT infrastructure. I aim to be deeply integrated into operations, actively driving improvements, and progressing towards specialization in a specific sector of the industry.'
    }
];
