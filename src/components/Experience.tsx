import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ExperienceProps {
  theme: ThemeMode;
}

export const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Professional Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Industry exposure in high-throughput data annotation and real-time statistical logging
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {WORK_EXPERIENCE.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 hover:border-cyan-400/60 transition-all space-y-6 relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-500/20 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>{item.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white">{item.role}</h3>
                  <p className="text-sm text-cyan-300 font-semibold">{item.company}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Key Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  RESPONSIBILITIES &amp; IMPACT
                </h4>
                <ul className="space-y-2.5">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Used Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {item.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
