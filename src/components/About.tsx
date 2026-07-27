import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  UserCheck,
  Cpu,
  Brain,
  Code2,
  Workflow,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface AboutProps {
  theme: ThemeMode;
}

export const About: React.FC<AboutProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'terminal' | 'pillars'>('overview');
  const [terminalCmd, setTerminalCmd] = useState('cat objective.txt');

  const pillars = [
    {
      title: 'Agentic AI & RAG Systems',
      icon: Brain,
      desc: 'Building autonomous multi-agent pipelines with LangGraph, ChromaDB vector indexing, and local LLM execution (Ollama Qwen3 8B).',
      color: 'cyan',
    },
    {
      title: 'Computer Vision',
      icon: Cpu,
      desc: 'Developing touchless UI systems and spatial hand tracking using OpenCV and MediaPipe for interactive software.',
      color: 'purple',
    },
    {
      title: 'Full-Stack Engineering',
      icon: Code2,
      desc: 'Crafting performant web frontends in React + Tailwind CSS paired with high-throughput FastAPI and Flask backend microservices.',
      color: 'blue',
    },
    {
      title: 'Automation & Cloud Infra',
      icon: Workflow,
      desc: 'Deploying self-hosted infrastructure on Oracle Cloud and constructing enterprise automation workflows in n8n.',
      color: 'emerald',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Engineer Profile &amp; Bio
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Bridging theoretical machine learning with production agentic AI systems
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl cyber-glass border border-cyan-500/20 font-mono text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              SUMMARY
            </button>
            <button
              onClick={() => {
                setActiveTab('terminal');
                setTerminalCmd('cat objective.txt');
              }}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              CLI TERMINAL
            </button>
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'pillars'
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              TECH PILLARS
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Bio Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 space-y-6">
              <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 font-mono font-bold">
                  SF
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{PERSONAL_INFO.title}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                <p>{PERSONAL_INFO.objective}</p>
                <p>{PERSONAL_INFO.bioSummary}</p>
              </div>

              <div className="pt-4 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+91 {PERSONAL_INFO.whatsappNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Instagram: {PERSONAL_INFO.instagramHandle}</span>
                </div>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl cyber-glass border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-cyan-300 font-mono">{p.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'terminal' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl font-mono text-xs space-y-4 max-w-4xl mx-auto"
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-slate-400 text-[11px] ml-2">salman@ai-core:~ (zsh)</span>
              </div>
              <div className="text-[10px] text-cyan-400">HOST: ORACLE CLOUD NODE</div>
            </div>

            {/* Terminal Command buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => setTerminalCmd('cat objective.txt')}
                className={`px-3 py-1 rounded text-[11px] border cursor-pointer ${
                  terminalCmd === 'cat objective.txt'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-500/20'
                    : 'border-slate-800 text-slate-400'
                }`}
              >
                cat objective.txt
              </button>
              <button
                onClick={() => setTerminalCmd('system-status')}
                className={`px-3 py-1 rounded text-[11px] border cursor-pointer ${
                  terminalCmd === 'system-status'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-500/20'
                    : 'border-slate-800 text-slate-400'
                }`}
              >
                system-status
              </button>
              <button
                onClick={() => setTerminalCmd('ls -la projects/')}
                className={`px-3 py-1 rounded text-[11px] border cursor-pointer ${
                  terminalCmd === 'ls -la projects/'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-500/20'
                    : 'border-slate-800 text-slate-400'
                }`}
              >
                ls -la projects/
              </button>
            </div>

            {/* Terminal Output */}
            <div className="p-4 rounded bg-slate-900/90 text-slate-300 min-h-[220px] font-mono leading-relaxed space-y-3 border border-slate-800/80">
              <p className="text-cyan-400">
                salman@ai-core:~$ <span className="text-white">{terminalCmd}</span>
              </p>

              {terminalCmd === 'cat objective.txt' && (
                <div className="space-y-2 text-emerald-300">
                  <p>
                    [OBJECTIVE]: B.Tech Artificial Intelligence and Data Science student seeking an internship
                    to apply machine learning, full-stack development, and automation skills to real-world problems.
                  </p>
                  <p className="text-slate-400">
                    Hands-on experience building agentic AI systems, RAG pipelines with ChromaDB &amp; LangGraph,
                    self-hosted Ollama runners, and computer vision touchless interfaces with OpenCV &amp; MediaPipe.
                  </p>
                </div>
              )}

              {terminalCmd === 'system-status' && (
                <div className="space-y-1 text-cyan-300">
                  <p>✔ NAME: Salman Faris R</p>
                  <p>✔ DEGREE: B.Tech AI &amp; Data Science (Final Year)</p>
                  <p>✔ CGPA: 7.97 / 10.0</p>
                  <p>✔ COLLEGE: Misrimal Navajee Munoth Jain Engineering College</p>
                  <p>✔ JAVA SCORE: NPTEL 90% (Elite+Gold)</p>
                  <p>✔ WORK: Football Data Analyst at Stats Perform (2024-2025)</p>
                  <p>✔ LOCATION: Chennai, Tamil Nadu</p>
                </div>
              )}

              {terminalCmd === 'ls -la projects/' && (
                <div className="space-y-1 text-purple-300">
                  <p>drwxr-xr-x 1 salman staff 4096 Jul 26 time-capsule-assistant (LangGraph Multi-Agent RAG)</p>
                  <p>drwxr-xr-x 1 salman staff 4096 Jul 26 ai-assistant-self-hosted (React + FastAPI + Ollama Qwen3)</p>
                  <p>drwxr-xr-x 1 salman staff 4096 Jul 26 gesture-canvas-ai (OpenCV + MediaPipe Vision)</p>
                  <p>drwxr-xr-x 1 salman staff 4096 Jul 26 mood-aware-task-scheduler (Neura Hackathon Winner)</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'pillars' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl cyber-glass border border-cyan-500/30 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-cyan-300 font-mono">{p.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};
