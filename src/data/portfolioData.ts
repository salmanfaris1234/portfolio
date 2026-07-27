import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  Certification,
  SocialLinks,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Salman Faris R',
  title: 'AI & Data Science Engineer | Agentic Systems Developer',
  tagline: 'Crafting Next-Gen Agentic AI Systems, RAG Pipelines & Intelligent Full-Stack Applications',
  location: 'Chennai, Tamil Nadu, India',
  email: 'salmanfarisr.btech@gmail.com',
  whatsappNumber: '9344937690',
  whatsappUrl: 'https://wa.me/919344937690?text=Hi%20Salman,%20I%20viewed%20your%20portfolio!',
  instagramHandle: '@salmaan_faris.r',
  instagramUrl: 'https://instagram.com/salmaan_faris.r',
  linkedinUrl: 'https://linkedin.com/in/salmanfarisr',
  githubUrl: 'https://github.com/salmanfarisr',
  objective:
    'B.Tech Artificial Intelligence and Data Science student seeking an internship to apply machine learning, full-stack development, and automation skills to real-world problems, with hands-on experience building agentic AI systems and production-style automation pipelines.',
  bioSummary:
    'Passionate final-year AI & Data Science engineering student at Misrimal Navajee Munoth Jain Engineering College with a strong focus on autonomous AI agents (LangGraph, Ollama, Qwen3), RAG architecture, computer vision (OpenCV/MediaPipe), and scalable full-stack web applications (React, FastAPI, Flask). Experienced in dataset annotations, self-hosted cloud infra, and production workflow automation.',
  status: 'Open for AI / ML / Full-Stack Internships',
};

export const SOCIAL_LINKS: SocialLinks = {
  email: PERSONAL_INFO.email,
  phoneWhatsApp: '+91 9344937690',
  whatsappFormatted: '+91 9344937690',
  instagram: PERSONAL_INFO.instagramUrl,
  instagramHandle: PERSONAL_INFO.instagramHandle,
  linkedin: PERSONAL_INFO.linkedinUrl,
  github: PERSONAL_INFO.githubUrl,
  location: PERSONAL_INFO.location,
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI/ML & Agentic Systems',
    icon: 'Bot',
    skills: [
      { name: 'LangGraph (Multi-Agent RAG)', level: 92, tag: 'Core Focus', highlight: true },
      { name: 'RAG Architecture (ChromaDB)', level: 90, tag: 'High Proficiency', highlight: true },
      { name: 'Ollama & Local LLMs (Qwen3)', level: 88, tag: 'Privacy-Focused' },
      { name: 'Machine Learning & Deep Learning', level: 86, tag: 'Specialization' },
      { name: 'Sentence-Transformers', level: 85, tag: 'Embeddings' },
    ],
  },
  {
    title: 'Programming & Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 95, tag: 'Primary Language', highlight: true },
      { name: 'Java', level: 90, tag: 'NPTEL 90% Score', highlight: true },
      { name: 'SQL', level: 88, tag: 'Database Queries' },
      { name: 'TypeScript / JavaScript', level: 82, tag: 'Frontend Tech' },
    ],
  },
  {
    title: 'Web & Full-Stack Development',
    icon: 'Globe',
    skills: [
      { name: 'React & Tailwind CSS', level: 88, tag: 'UI Engineering', highlight: true },
      { name: 'FastAPI & Flask', level: 90, tag: 'Backend APIs', highlight: true },
      { name: 'Streamlit & Gradio', level: 92, tag: 'AI Web Apps' },
      { name: 'RESTful API Integration', level: 88, tag: 'Networking' },
    ],
  },
  {
    title: 'Automation, Infra & Computer Vision',
    icon: 'Cpu',
    skills: [
      { name: 'n8n Workflow Automation', level: 88, tag: 'Pipeline Dev' },
      { name: 'Oracle Cloud (Self-Hosted)', level: 85, tag: 'Cloud Deployment' },
      { name: 'OpenCV & MediaPipe', level: 86, tag: 'Computer Vision', highlight: true },
      { name: 'Git & Version Control', level: 88, tag: 'DevOps Basics' },
    ],
  },
  {
    title: 'Data, Analytics & Design',
    icon: 'Database',
    skills: [
      { name: 'Power BI & Data Visualization', level: 85, tag: 'Analytics' },
      { name: 'Figma & UI Design', level: 82, tag: 'Prototyping' },
      { name: 'Canva & Media Creation', level: 88, tag: 'Presentation' },
      { name: 'Data Annotation & Analytics', level: 90, tag: 'Stats Perform' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'time-capsule-assistant',
    title: 'Time-Capsule Assistant',
    category: 'AI & Agents',
    subtitle: 'Multi-Agent RAG Pipeline for Legacy Codebases',
    description:
      'Designing a multi-agent RAG pipeline using LangGraph and ChromaDB to document legacy codebases and uncover historical design rationale.',
    fullDescription:
      'Time-Capsule Assistant solves the challenge of understanding institutional knowledge trapped in legacy codebases. Using a multi-agent orchestrator built with LangGraph, it queries vector embeddings stored in ChromaDB and intelligently synthesizes context from OCR-scanned architectural sketches and Git commit trees.',
    bullets: [
      'Engineered a multi-agent DAG workflow using LangGraph for multi-step contextual code documentation.',
      'Configured ChromaDB vector storage with sentence-transformers for fast semantic chunk retrieval.',
      'Implemented intelligent fallback mechanisms analyzing indirect data signals (OCR sketches, commit history).',
      'Designed self-documenting agent nodes that summarize system architecture and design rationale automatically.',
    ],
    techStack: ['Python', 'LangGraph', 'ChromaDB', 'Sentence-Transformers', 'OCR', 'Git API', 'Ollama'],
    featured: true,
    metrics: 'Multi-Agent RAG Pipeline | In Progress',
    architectureNotes:
      'Input Code/Sketch -> OCR & Commit Parser -> ChromaDB Embeddings -> LangGraph Multi-Agent Orchestrator -> Contextual Report Output',
    iconName: 'Sparkles',
    githubUrl: 'https://github.com/salmanfarisr/time-capsule-assistant',
  },
  {
    id: 'ai-assistant-self-hosted',
    title: 'AI Assistant (Self-Hosted Chat App)',
    category: 'Full Stack',
    subtitle: 'Privacy-Focused Full-Stack LLM Web Application',
    description:
      'Engineered a privacy-focused, full-stack LLM application using React, FastAPI, and self-hosted Ollama running Qwen3 8B model.',
    fullDescription:
      'A completely offline, privacy-first local chat workspace that runs cutting-edge open weights models (Qwen3 8B) on self-hosted hardware. Includes SSE streaming, persistent SQLite chat history, prompt templates, and custom system message injection.',
    bullets: [
      'Architected a sleek React frontend communicating with a lightweight FastAPI backend.',
      'Integrated Ollama API with streaming server-sent events for instant token rendering.',
      'Built persistent conversation history management and topic auto-summarization.',
      'Maintained full software lifecycle through structured milestone releases and local deployment.',
    ],
    techStack: ['React', 'FastAPI', 'Ollama', 'Qwen3 8B', 'Tailwind CSS', 'Python', 'SQLite'],
    featured: true,
    metrics: '0ms External Latency | 100% Privacy Preserved',
    architectureNotes:
      'React UI -> Server-Sent Events -> FastAPI Proxy -> Ollama Local Runner (Qwen3 8B) -> Streaming Tokens',
    iconName: 'MessageSquare',
    githubUrl: 'https://github.com/salmanfarisr/ai-assistant-self-hosted',
    demoUrl: 'https://github.com/salmanfarisr/ai-assistant-self-hosted',
  },
  {
    id: 'gesture-canvas-ai',
    title: 'GestureCanvas-AI',
    category: 'Computer Vision',
    subtitle: 'Touchless Computer-Vision Drawing & Gesture Control',
    description:
      'Built a computer vision-based drawing application utilizing OpenCV and MediaPipe for intuitive, touchless UI interaction.',
    fullDescription:
      'GestureCanvas-AI tracks hand landmarks in real-time through a standard webcam using MediaPipe. Users can draw, erase, switch color palettes, and trigger UI commands through natural finger pinches and air gestures without touching a mouse or keyboard.',
    bullets: [
      'Utilized MediaPipe Hand Landmark Detection for sub-millisecond finger tracking.',
      'Developed custom gesture recognition logic for virtual drawing, brush resizing, and canvas clearing.',
      'Optimized frame rates and memory usage for fluid webcam video processing in Python.',
      'Managed complex package dependencies inside isolated virtual environments for reproducible runtime stability.',
    ],
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Virtualenv'],
    featured: true,
    metrics: '30+ FPS Smooth Motion | Touchless Drawing',
    architectureNotes:
      'Webcam Feed -> MediaPipe Landmark Extractor -> Gesture Resolver -> OpenCV Drawing Canvas Rendering',
    iconName: 'Hand',
    githubUrl: 'https://github.com/salmanfarisr/gesture-canvas-ai',
  },
  {
    id: 'mood-aware-task-scheduler',
    title: 'Mood-Aware Task Scheduling System',
    category: 'Automation',
    subtitle: 'Neura Hackathon Winner Project',
    description:
      'Developed an intelligent task scheduler utilizing Python that adapts task planning based on user mood and energy levels.',
    fullDescription:
      'Built for the Neura Hackathon, this smart scheduling platform analyzes user energy metrics, current mood inputs, and deadline constraints to dynamically re-prioritize daily calendar events using Google Calendar API.',
    bullets: [
      'Developed an adaptive priority engine balancing task cognitive difficulty against user energy levels.',
      'Integrated Google Calendar API for real-time schedule synchronization and event rescheduling.',
      'Implemented a nightly AI feedback loop that generates productivity insights and burn-out warning indicators.',
      'Built an interactive dashboard allowing users to log emotional states and track task completion rates.',
    ],
    techStack: ['Python', 'Google Calendar API', 'Flask', 'AI Productivity Engine', 'HTML/CSS/JS'],
    featured: true,
    metrics: 'Neura Hackathon Spotlight | Adaptive AI',
    architectureNotes:
      'Mood & Energy Input -> Priority Algorithm -> Google Calendar API Sync -> Nightly AI Feedback Analysis',
    iconName: 'CalendarCheck',
    githubUrl: 'https://github.com/salmanfarisr/mood-task-scheduler',
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Football Data Analyst (Part-Time)',
    company: 'Stats Perform',
    location: 'Chennai, Tamil Nadu',
    period: 'Nov 2024 – Apr 2025',
    type: 'Part-Time Analyst',
    highlights: [
      'Collected and annotated live football match data under real-time constraints, ensuring high precision for professional analytics.',
      'Adhered strictly to international quality metrics and taxonomy standards required for downstream predictive machine learning models.',
      'Maintained consistent focus and high throughput while processing multi-variable match event timestamps and positional metrics.',
    ],
    skillsUsed: ['Data Annotation', 'Match Analytics', 'Data Quality Control', 'Statistical Logging', 'Sports Analytics'],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.Tech in Artificial Intelligence and Data Science',
  field: 'Artificial Intelligence & Data Science Engineering',
  institution: 'Misrimal Navajee Munoth Jain Engineering College',
  location: 'Chennai, Tamil Nadu',
  cgpa: '7.97 / 10.0',
  period: '2023 – 2027',
  status: 'Current Year: Final Year (Expected Graduation: June 2027)',
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'NPTEL — Programming in Java',
    issuer: 'IIT / NPTEL',
    scoreOrDetail: '90% Score (Elite + Gold standard)',
    badgeColor: 'emerald',
    icon: 'Award',
  },
  {
    id: 'cert-2',
    title: 'Generative AI Applications: Get Started',
    issuer: 'Coursera (IBM)',
    scoreOrDetail: 'Professional Certificate',
    badgeColor: 'cyan',
    icon: 'BrainCircuit',
  },
  {
    id: 'cert-3',
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    scoreOrDetail: 'Verified Certification',
    badgeColor: 'blue',
    icon: 'ShieldCheck',
  },
  {
    id: 'cert-4',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI / Andrew Ng (Coursera)',
    scoreOrDetail: 'Full 3-Course Specialization',
    badgeColor: 'purple',
    icon: 'Cpu',
  },
  {
    id: 'cert-5',
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM',
    scoreOrDetail: 'Verified Professional Certificate',
    badgeColor: 'indigo',
    icon: 'Database',
  },
];
