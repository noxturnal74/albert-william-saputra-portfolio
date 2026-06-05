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
