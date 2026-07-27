import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BrainCircuit, ShieldCheck, Cpu, Database, CheckCircle, Sparkles } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface EducationCertificationsProps {
  theme: ThemeMode;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ theme }) => {
  const iconMap: Record<string, any> = {
    Award: Award,
    BrainCircuit: BrainCircuit,
    ShieldCheck: ShieldCheck,
    Cpu: Cpu,
    Database: Database,
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // ACADEMICS &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Education &amp; Industry Certifications
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Formal engineering degree and verified certifications from Google, IBM, NPTEL &amp; DeepLearning.AI
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/40 space-y-6 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyan-500/20 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  ACADEMIC DEGREE
                </span>
                <h3 className="text-2xl font-bold font-mono text-cyan-300">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-200">
                  {EDUCATION_DATA.institution}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                <span className="px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold">
                  CGPA: {EDUCATION_DATA.cgpa}
                </span>
                <span>{EDUCATION_DATA.period}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{EDUCATION_DATA.status}</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Specialization: AI, Machine Learning &amp; Agentic Computing</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold font-mono text-cyan-300 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>VERIFIED CERTIFICATIONS ({CERTIFICATIONS.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CERTIFICATIONS.map((cert) => {
              const IconComponent = iconMap[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl cyber-glass border border-cyan-500/30 hover:border-cyan-400 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-lg bg-cyan-500/15 border border-cyan-400/40 text-cyan-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        VERIFIED
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-sm font-mono text-slate-200 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-cyan-400 font-mono">{cert.issuer}</p>
                    </div>
                  </div>

                  {cert.scoreOrDetail && (
                    <div className="pt-3 border-t border-cyan-500/20 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{cert.scoreOrDetail}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
