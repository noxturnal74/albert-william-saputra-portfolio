export const personal = {
  name: "Albert William Saputra",
  title: "Fullstack Developer | AI & Computer Vision Enthusiast",
  intro:
    "Informatics student passionate about building useful applications with AI, data, and modern web technology.",
  email: "albertwilliamsaputra@gmail.com",
  university: "Universitas Ma Chung",
  cvHref: "/resume/albert-william-saputra-cv.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/noxturnal74",
      handle: "noxturnal74",
    },
    {
      label: "LinkedIn",
      href: "https://id.linkedin.com/in/albertwilliamsaputra-864a4a1b6",
      handle: "albertwilliamsaputra",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/albetwss/",
      handle: "@albetwss",
    },
  ],
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Repositories", href: "#repositories" },
  { label: "Blog", href: "#blog" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Java", "Python", "SQL", "PL/SQL"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "SQL Server"],
  },
  {
    title: "Tools",
    skills: ["Git", "Bitbucket", "Jira", "DBeaver", "SSMS"],
  },
  {
    title: "AI/Data",
    skills: ["Computer Vision", "MediaPipe", "Data Processing"],
  },
];

export const projects = [
  {
    title: "Evolution Fitness",
    category: "Computer Vision Web App",
    summary:
      "A posture correction gym web app that uses computer vision to support safer exercise form and more useful workout feedback.",
    stack: ["Computer Vision", "MediaPipe", "Fullstack", "UX"],
    cover: {
      src: "/project-covers/evolution-fitness.svg",
      alt: "Evolution Fitness posture analysis dashboard preview",
    },
    signals: ["Pose tracking", "Form score", "Workout UX"],
  },
  {
    title: "MedSign",
    category: "PKM-KC Healthcare AI",
    summary:
      "A PKM-KC BISINDO medical communication assistant with patient and doctor modes, gesture demo assets, and a deployable Vercel frontend.",
    stack: ["PKM-KC", "AI", "BISINDO", "Vercel"],
    cover: {
      src: "/project-covers/medsign.svg",
      alt: "MedSign sign language detection healthcare interface preview",
    },
    signals: ["PKM-KC", "BISINDO", "Live demo"],
    links: [
      {
        label: "Live Demo",
        href: "https://medsign-ai.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/noxturnal74/medsign-ai",
      },
    ],
  },
  {
    title: "Indonesian Gyms Parallax Directory",
    category: "Frontend Web Hub",
    summary:
      "A comprehensive digital directory housing 20 distinct gym and fitness center landing pages in Malang, Indonesia. Features high-fidelity parallax scrolling, interactive map integrations, and custom branding.",
    stack: ["HTML", "CSS", "JavaScript", "Parallax Scroll", "Vercel"],
    cover: {
      src: "/project-covers/gyms-directory-hub.svg",
      alt: "Gyms Directory Hub showing multiple gym landing pages",
    },
    signals: ["20 Websites", "Parallax Effect", "Interactive UI"],
    links: [
      {
        label: "Live Demo",
        href: "https://project-xc6z6.vercel.app/gyms",
      },
      {
        label: "GitHub",
        href: "https://github.com/noxturnal74/batch-landing-page-parallax",
      },
    ],
  },
  {
    title: "Database Rental Game",
    category: "Database System",
    summary:
      "A relational database and PL/SQL system for managing rental game transactions, records, and operational workflows.",
    stack: ["SQL", "PL/SQL", "Relational Design", "Database"],
    cover: {
      src: "/project-covers/database-rental-game.svg",
      alt: "Database Rental Game relational system preview",
    },
    signals: ["ERD logic", "Transactions", "PL/SQL"],
  },
  {
    title: "Fuzzy C-Means Image Segmentation",
    category: "Image Processing",
    summary:
      "An image processing project using clustering techniques to segment visual regions and study pattern separation.",
    stack: ["Python", "Clustering", "Image Processing", "Data"],
    cover: {
      src: "/project-covers/image-segmentation.svg",
      alt: "Fuzzy C-Means image segmentation workspace preview",
    },
    signals: ["Clustering", "Segmentation", "Python"],
  },
  {
    title: "Queue Simulation App",
    category: "Simulation",
    summary:
      "A single-server queue simulation built with Python to model waiting time, service patterns, and system behavior.",
    stack: ["Python", "Simulation", "Statistics", "Modeling"],
    cover: {
      src: "/project-covers/queue-simulation.svg",
      alt: "Queue Simulation App single server model preview",
    },
    signals: ["Arrival flow", "Waiting time", "Service model"],
  },
];

export const experiences = [
  {
    role: "Software Development Intern",
    organization: "PT Adicipta Inovasi Teknologi / AdIns",
    description:
      "Contributed in an enterprise software environment with exposure to development workflows, issue tracking, database tools, and team delivery practices.",
  },
  {
    role: "Teaching Assistant",
    organization: "Java Programming",
    description:
      "Supported students in programming fundamentals, object-oriented thinking, debugging, and practical Java assignments.",
  },
  {
    role: "Student Organization & Committees",
    organization: "Campus Leadership",
    description:
      "Built communication, coordination, and event execution experience through student council and committee responsibilities.",
  },
];

export const achievements = [
  {
    title: "Gold Prize in Coding Competition 2023",
    description:
      "Recognized for problem-solving ability, coding execution, and competitive programming performance.",
  },
  {
    title: "Certifications & Bootcamp Experience",
    description:
      "Completed learning programs that strengthen software engineering, data, and professional development foundations.",
  },
  {
    title: "Academic & Organizational Achievements",
    description:
      "Balanced technical project work with academic growth, assistantship responsibilities, and student leadership.",
  },
];


export const repositories = [
  {
    name: "medsign-ai",
    description: "A BISINDO medical communication assistant with patient & doctor modes, gesture demo assets, and a deployable Next.js frontend.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/noxturnal74/medsign-ai",
    deployUrl: "https://medsign-ai.vercel.app",
    deployedPlatform: "Vercel",
    stars: 12,
    forks: 2,
    status: "active"
  },
  {
    name: "evolution-fitness",
    description: "A posture correction gym web app that uses computer vision and MediaPipe pose tracking to support safer exercise form.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "MediaPipe", "Vercel"],
    githubUrl: "https://github.com/noxturnal74/evolution-fitness",
    deployUrl: "https://evolution-fitness.vercel.app",
    deployedPlatform: "Vercel",
    stars: 8,
    forks: 1,
    status: "active"
  },
  {
    name: "batch-landing-page-parallax",
    description: "A comprehensive digital showcase containing 20 distinct gym landing pages in Malang, Indonesia, featuring parallax scrolling and custom branding.",
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/noxturnal74/batch-landing-page-parallax",
    deployUrl: "https://project-xc6z6.vercel.app/gyms",
    deployedPlatform: "Vercel",
    stars: 15,
    forks: 3,
    status: "active"
  },
  {
    name: "dba-n8n-automation",
    description: "An AI database automation system built with n8n reducing manual DBA operational workloads by 40% with smart monitoring.",
    techStack: ["n8n", "PostgreSQL", "Docker", "Webhooks", "Render"],
    githubUrl: "https://github.com/noxturnal74/dba-n8n-automation",
    deployUrl: "https://dba-automation.onrender.com",
    deployedPlatform: "Render",
    stars: 10,
    forks: 3,
    status: "active"
  },
  {
    name: "queue-simulation-app",
    description: "A single-server queue simulation built to model and analyze waiting times, service patterns, and system behavior.",
    techStack: ["Python", "Streamlit", "Matplotlib", "Render"],
    githubUrl: "https://github.com/noxturnal74/queue-simulation-app",
    deployUrl: "https://queue-simulation.onrender.com",
    deployedPlatform: "Render",
    stars: 5,
    forks: 0,
    status: "active"
  },
  {
    name: "fuzzy-c-means-segmentation",
    description: "An image processing project using Fuzzy C-Means clustering to segment visual regions and analyze pattern separation.",
    techStack: ["Python", "OpenCV", "NumPy", "Streamlit", "Hugging Face"],
    githubUrl: "https://github.com/noxturnal74/fuzzy-c-means-segmentation",
    deployUrl: "https://huggingface.co/spaces/noxturnal74/fuzzy-c-means",
    deployedPlatform: "Hugging Face",
    stars: 6,
    forks: 1,
    status: "active"
  },
  {
    name: "database-rental-game",
    description: "A relational database design and PL/SQL management system for tracking rental game operations and transactions.",
    techStack: ["SQL", "PL/SQL", "Relational Design", "GitHub Pages"],
    githubUrl: "https://github.com/noxturnal74/database-rental-game",
    deployUrl: "https://noxturnal74.github.io/database-rental-game",
    deployedPlatform: "GitHub Pages",
    stars: 4,
    forks: 1,
    status: "active"
  }
];

export const blogPosts = [
  {
    id: "sql-query-optimization",
    title: "Optimizing SQL Queries in Enterprise FinTech Applications",
    excerpt: "A deep dive into query optimization techniques on Microsoft SQL Server using Extended Events and SQL Profiler to reduce execution time by 35%.",
    content: "During my database engineering internship at PT Adicipta Inovasi Teknologi (AdIns), I worked on optimizing database performance for enterprise financial systems (CONFINS Core). One of the primary challenges was identifying and resolving slow-running queries that affected transaction processing speed. By leveraging tools like SQL Profiler and Extended Events, I analyzed execution plans, implemented indexing strategies, and optimized PL/SQL and SQL query structures. This post covers the step-by-step methodologies used to achieve a 35% reduction in execution time, including indexing strategies, routines, and risk-free validations with HypoPG in PostgreSQL environments.",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    category: "Database",
    coverImage: "/project-covers/database-rental-game.svg"
  },
  {
    id: "medsign-healthcare-ai",
    title: "Building MedSign: AI-Powered Sign Language Medical Assistant",
    excerpt: "How we developed an AI-powered communication assistant for medical settings to translate BISINDO sign language in real-time.",
    content: "MedSign was developed as a PKM-KC project to bridge the communication gap between medical staff and deaf/mute patients using BISINDO (Indonesian Sign Language). The project combines a Next.js frontend deployed on Vercel with computer vision model pipelines. In this article, I discuss the architecture of MedSign, how we integrated gesture demo assets, and the challenges of deploying web-based real-time gesture recognition systems for healthcare environments. We aimed to ensure high performance, accessibility, and intuitive UX.",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    coverImage: "/project-covers/medsign.svg"
  },
  {
    id: "dba-workflow-automation",
    title: "DBA Workflow Automation with n8n and AI Integration",
    excerpt: "Reducing manual DBA workloads by 40% through low-code AI automation workflows using n8n and custom monitoring triggers.",
    content: "Database administration involves many routine tasks, including system health monitoring, backups, and security audits. To improve team agility and free up time for strategic decisions, I designed and implemented custom automation workflows using n8n. By configuring automated alerts, performance monitoring triggers, and cross-system housekeeping, we reduced manual operations by 40%. This post details the setup, event triggers, and optimization strategies for DBA team workflows.",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    category: "Automation",
    coverImage: "/project-covers/queue-simulation.svg"
  }
];
