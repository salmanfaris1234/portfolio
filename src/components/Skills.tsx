import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Bot,
  Globe,
  Cpu,
  Database,
  Search,
  Sparkles,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface SkillsProps {
  theme: ThemeMode;
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons: Record<string, any> = {
    'AI/ML & Agentic Systems': Bot,
    'Programming & Languages': Code2,
    'Web & Full-Stack Development': Globe,
    'Automation, Infra & Computer Vision': Cpu,
    'Data, Analytics & Design': Database,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Skills &amp; Technical Capabilities
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Specialized toolkit spanning agentic frameworks, computer vision, web stack &amp; automation
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                    : 'cyber-glass border border-cyan-500/20 text-slate-400 hover:text-cyan-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const Icon = categoryIcons[catGroup.title] || Code2;
            return (
              <motion.div
                key={catGroup.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl cyber-glass border border-cyan-500/25 space-y-5 hover:border-cyan-400/50 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono text-sm text-cyan-300">{catGroup.title}</h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {catGroup.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {/* Individual Skill List */}
                <div className="space-y-4">
                  {catGroup.skills.map((s) => (
                    <div key={s.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200 font-medium flex items-center gap-1.5">
                          {s.highlight && <Sparkles className="w-3 h-3 text-cyan-400" />}
                          {s.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {s.tag && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                              {s.tag}
                            </span>
                          )}
                          <span className="text-slate-400 text-[11px]">{s.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            s.highlight
                              ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
                              : 'bg-cyan-500/80'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
