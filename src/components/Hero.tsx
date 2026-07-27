import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  MessageCircle,
  ArrowRight,
  Code2,
  Bot,
  Brain,
  Sparkles,
  MapPin,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Agentic AI Developer & ML Engineer';
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-glass border border-cyan-500/30 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm text-cyan-400 tracking-widest uppercase flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <span>WELCOME TO MY FUTURISTIC AI PORTFOLIO</span>
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <p className="font-mono text-lg sm:text-2xl text-gradient-cyan font-bold flex items-center">
                  <span>{typedText}</span>
                  <span className="animate-pulse ml-1 text-cyan-400">|</span>
                </p>
              </div>
            </div>

            {/* Tagline / Brief Description */}
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Final-Year B.Tech AI & Data Science student at Misrimal Navajee Munoth Jain Engineering
              College specializing in <strong className="text-cyan-400 font-semibold">LangGraph Multi-Agent RAG Systems</strong>,
              local LLM deployments (Ollama/Qwen3), computer vision (OpenCV/MediaPipe), and production-style full-stack AI web applications.
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md cyber-glass border border-cyan-500/20">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md cyber-glass border border-cyan-500/20">
                <Brain className="w-3.5 h-3.5 text-purple-400" />
                <span>CGPA: 7.97 / 10</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-xs font-bold cyber-glass border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>VIEW RESUME</span>
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-xs font-bold bg-emerald-600/90 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP (+91 {PERSONAL_INFO.whatsappNumber})</span>
              </a>
            </div>

            {/* Stats Highlights Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-cyan-500/15">
              <div className="p-3 rounded-lg cyber-glass border border-cyan-500/20">
                <div className="font-mono text-2xl font-extrabold text-cyan-400">4+</div>
                <div className="text-[11px] text-slate-400 font-mono">Agentic AI Apps</div>
              </div>
              <div className="p-3 rounded-lg cyber-glass border border-cyan-500/20">
                <div className="font-mono text-2xl font-extrabold text-purple-400">90%</div>
                <div className="text-[11px] text-slate-400 font-mono">NPTEL Java Score</div>
              </div>
              <div className="p-3 rounded-lg cyber-glass border border-cyan-500/20">
                <div className="font-mono text-2xl font-extrabold text-blue-400">5</div>
                <div className="text-[11px] text-slate-400 font-mono">AI Certifications</div>
              </div>
              <div className="p-3 rounded-lg cyber-glass border border-cyan-500/20">
                <div className="font-mono text-2xl font-extrabold text-emerald-400">7.97</div>
                <div className="text-[11px] text-slate-400 font-mono">Engineering CGPA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Frame with Cyber HUD Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88">
              {/* Outer Animated Holographic Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-blue-500/30 blur-xl animate-pulse" />
              
              {/* Spinning Futuristic Border */}
              <div className="absolute -inset-2 rounded-2xl border border-cyan-500/40 bg-slate-950/40 cyber-glass overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
              </div>

              {/* User Image Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 group">
                {/* User Portrait Image */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                  alt="Salman Faris R"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* HUD Overlay Lines */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Top Corner HUD Brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {/* Cyber Scan HUD bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_4s_linear_infinite]" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-lg cyber-glass border border-cyan-500/40">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      SALMAN FARIS R
                    </span>
                    <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40">
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges around Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 p-2.5 rounded-lg cyber-glass border border-cyan-400/50 text-xs font-mono shadow-xl hidden sm:flex items-center gap-2 bg-slate-900/90 text-cyan-300"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>LangGraph & RAG</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 p-2.5 rounded-lg cyber-glass border border-purple-400/50 text-xs font-mono shadow-xl hidden sm:flex items-center gap-2 bg-slate-900/90 text-purple-300"
              >
                <Bot className="w-4 h-4 text-purple-400" />
                <span>Ollama Qwen3 8B</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Down Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-xs font-mono text-cyan-500/80 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span>SCROLL DOWN</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
