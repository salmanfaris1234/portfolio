import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Github,
  ExternalLink,
  Bot,
  MessageSquare,
  Hand,
  CalendarCheck,
  X,
  Search,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ThemeMode } from '../types';

interface ProjectsProps {
  theme: ThemeMode;
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Agents', 'Full Stack', 'Computer Vision', 'Automation'];

  const iconMap: Record<string, any> = {
    Sparkles: Sparkles,
    MessageSquare: MessageSquare,
    Hand: Hand,
    CalendarCheck: CalendarCheck,
  };

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // PROJECT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Featured AI &amp; Agentic Innovations
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Production-grade multi-agent RAG, computer vision tools, and local LLM chat platforms
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'cyber-glass border border-cyan-500/20 text-slate-400 hover:text-cyan-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = iconMap[project.iconName] || Sparkles;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-7 rounded-2xl cyber-glass border border-cyan-500/30 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-6 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  {/* Category Pill & Metrics */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-cyan-500/15 border border-cyan-400/40 text-cyan-300">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[10px] font-mono text-purple-400 px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-5 h-5 text-cyan-400 shrink-0" />
                      <h3 className="text-xl font-bold font-mono text-cyan-200 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900 border border-cyan-500/20 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>VIEW DETAILS &amp; ARCHITECTURE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl cyber-glass border border-cyan-400/60 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-400 text-cyan-300">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">{selectedProject.subtitle}</p>
              </div>

              {/* Full Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  OVERVIEW
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Bullet Key Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  TECHNICAL HIGHLIGHTS
                </h4>
                <ul className="space-y-2">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Diagram Representation */}
              {selectedProject.architectureNotes && (
                <div className="space-y-2 p-4 rounded-xl bg-slate-950 border border-cyan-500/30">
                  <h4 className="text-xs font-mono text-cyan-400">SYSTEM FLOW / ARCHITECTURE</h4>
                  <p className="font-mono text-xs text-purple-300 bg-slate-900/80 p-3 rounded border border-purple-500/30">
                    {selectedProject.architectureNotes}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE CODE</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
