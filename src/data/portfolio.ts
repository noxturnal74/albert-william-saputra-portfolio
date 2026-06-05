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
    visual: "from-blue-600 via-sky-400 to-violet-500",
  },
  {
    title: "MedSign",
    category: "Healthcare AI",
    summary:
      "A BISINDO sign language detection web app designed to improve communication accessibility in healthcare contexts.",
    stack: ["AI", "BISINDO", "Web App", "Healthcare"],
    visual: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    title: "Database Rental Game",
    category: "Database System",
    summary:
      "A relational database and PL/SQL system for managing rental game transactions, records, and operational workflows.",
    stack: ["SQL", "PL/SQL", "Relational Design", "Database"],
    visual: "from-slate-800 via-blue-700 to-sky-500",
  },
  {
    title: "Fuzzy C-Means Image Segmentation",
    category: "Image Processing",
    summary:
      "An image processing project using clustering techniques to segment visual regions and study pattern separation.",
    stack: ["Python", "Clustering", "Image Processing", "Data"],
    visual: "from-violet-500 via-blue-500 to-sky-400",
  },
  {
    title: "Queue Simulation App",
    category: "Simulation",
    summary:
      "A single-server queue simulation built with Python to model waiting time, service patterns, and system behavior.",
    stack: ["Python", "Simulation", "Statistics", "Modeling"],
    visual: "from-blue-500 via-indigo-500 to-slate-800",
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
