export type ThemeMode = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  category: 'AI & Agents' | 'Full Stack' | 'Computer Vision' | 'Automation';
  subtitle: string;
  description: string;
  fullDescription: string;
  bullets: string[];
  techStack: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  architectureNotes?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    tag?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  period: string;
  status: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  scoreOrDetail?: string;
  badgeColor: string;
  icon: string;
}

export interface SocialLinks {
  email: string;
  phoneWhatsApp: string;
  whatsappFormatted: string;
  instagram: string;
  instagramHandle: string;
  linkedin: string;
  github: string;
  location: string;
}
