import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, MessageCircle, User } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION_DATA, WORK_EXPERIENCE, CERTIFICATIONS } from '../data/portfolioData';

export const AIAssistantBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: `Hello! I'm Salman's AI Assistant. Ask me anything about his agentic AI projects, technical skills, education, or contact options!`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'What are his top AI projects?',
    'Tell me about his technical skills',
    'What is his education background?',
    'How can I contact Salman?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user' as const, text: query }];
    setMessages(newMessages);
    if (!textToSend) setInputValue('');

    // Generate response logic
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = '';

      if (lower.includes('project') || lower.includes('time-capsule') || lower.includes('gesture')) {
        responseText = `Salman has built several cutting-edge AI projects:\n1. Time-Capsule Assistant: LangGraph Multi-Agent RAG pipeline for legacy codebases.\n2. AI Assistant (Self-Hosted): React + FastAPI + Ollama Qwen3 8B local chat web app.\n3. GestureCanvas-AI: Touchless OpenCV & MediaPipe drawing app.\n4. Mood-Aware Task Scheduler: Neura Hackathon project with Google Calendar API.`;
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('java')) {
        responseText = `Salman's technical skills include:\n- Agentic Systems: LangGraph, RAG (ChromaDB), Ollama (Qwen3 8B), Machine Learning & Deep Learning.\n- Languages: Python, Java (NPTEL 90% score), SQL.\n- Web: React, Tailwind CSS, FastAPI, Flask, Streamlit, Gradio.\n- Infra & Vision: OpenCV, MediaPipe, n8n automation, Oracle Cloud self-hosting.`;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('degree') || lower.includes('cgpa')) {
        responseText = `Salman is in his final year pursuing B.Tech in Artificial Intelligence and Data Science at Misrimal Navajee Munoth Jain Engineering College, Chennai, with a CGPA of 7.97/10.0 (Expected June 2027).`;
      } else if (lower.includes('contact') || lower.includes('whatsapp') || lower.includes('email') || lower.includes('phone') || lower.includes('instagram')) {
        responseText = `You can reach Salman directly via:\n- WhatsApp: +91 9344937690\n- Email: salmanfarisr.btech@gmail.com\n- Instagram: @salmaan_faris.r\n- Location: Chennai, Tamil Nadu`;
      } else if (lower.includes('experience') || lower.includes('work') || lower.includes('stats perform')) {
        responseText = `Salman worked as a Part-Time Football Data Analyst at Stats Perform, Chennai (Nov 2024 – Apr 2025), where he collected and annotated live match data for predictive ML models under strict precision standards.`;
      } else if (lower.includes('certif')) {
        responseText = `Salman holds 5 verified certifications:\n- NPTEL Java (90% score - Elite+Gold)\n- Google AI Professional Certificate\n- IBM Generative AI Applications\n- Andrew Ng Machine Learning Specialization\n- IBM Databases & SQL for Data Science`;
      } else {
        responseText = `Salman Faris R is a B.Tech AI & Data Science student in Chennai specializing in LangGraph multi-agent systems, local LLMs, and full-stack web development. You can message him directly on WhatsApp at +91 9344937690!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: responseText }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center border border-cyan-300"
          title="Chat with Salman AI Assistant"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6 animate-pulse" />}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-8 z-40 w-[90vw] sm:w-[380px] h-[480px] rounded-2xl cyber-glass border border-cyan-400/60 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95"
          >
            {/* Header */}
            <div className="p-4 border-b border-cyan-500/30 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-cyan-300">Salman AI Bot</h3>
                  <p className="text-[10px] font-mono text-emerald-400">● Interactive Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-cyan-400 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    m.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {m.sender === 'bot' && (
                    <div className="p-1 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-cyan-500 text-black font-semibold'
                        : 'bg-slate-900 text-slate-200 border border-cyan-500/20'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 border-t border-cyan-500/20 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(p)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono whitespace-nowrap bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 cursor-pointer shrink-0"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-cyan-500/30 bg-slate-900/90 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about Salman's skills, projects..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-cyan-500/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
