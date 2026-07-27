import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, FileText, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumeText = `
SALMAN FARIS R
Chennai, Tamil Nadu | +91 9344937690 | salmanfarisr.btech@gmail.com | LinkedIn: https://linkedin.com/in/salmanfarisr

OBJECTIVE
B.Tech Artificial Intelligence and Data Science student seeking an internship to apply machine learning, full-stack development, and automation skills to real-world problems, with hands-on experience building agentic AI systems and production-style automation pipelines.

TECHNICAL SKILLS
- Programming: Python, Java, Sql
- AI/ML & Agentic Systems: Machine learning, Deep Learning, LangGraph, RAG (ChromaDB, sentence-transformers), Ollama
- Web Development: Streamlit, Gradio, FastAPI, Flask, React, Tailwind CSS
- Automation & Infra: n8n, Oracle Cloud (self-hosted), OpenCV, MediaPipe
- Data & Tools: SQL, Power BI, MS Office, Figma, Canva

PROJECTS
1. Mood-Aware Intelligent Task Scheduling System (Neura Hackathon)
- Developed an intelligent task scheduler utilizing Python that adapts task planning based on user mood and energy levels.
- Leveraged Google Calendar API for real-time task automation and implemented a nightly feedback loop generating AI-driven productivity insights.

2. AI Assistant (Self-Hosted Chat Web App)
- Engineered a privacy-focused, full-stack LLM application using React, FastAPI, and Ollama (Qwen3 8B).
- Implemented real-time streaming responses and persistent chat history while managing the full development lifecycle via versioned milestones.

3. GestureCanvas-AI
- Built a computer vision-based drawing application utilizing OpenCV and MediaPipe for intuitive, touchless UI interaction.
- Managed complex dependency versioning using isolated virtual environments to ensure stable software execution.

4. Time-Capsule Assistant (In Progress)
- Designing a multi-agent RAG pipeline using LangGraph and ChromaDB to document legacy codebases and uncover historical design rationale.
- Implementing intelligent fallback mechanisms by analyzing indirect data signals—including OCR-scanned sketches and Git commit history—to generate contextual documentation.

WORK EXPERIENCE
Football Data Analyst (Part-Time) — Stats Perform, Chennai | Nov 2024 – Apr 2025
- Collected and annotated live football match data under real-time constraints, ensuring accuracy against strict quality standards for downstream performance analysis.

CERTIFICATIONS
- NPTEL — Programming in Java (90%)
- Coursera (IBM) — Generative AI Applications: Get Started
- Google AI Professional Certificate
- Andrew Ng — Machine Learning Specialization (3 courses)
- IBM — Databases and SQL for Data Science with Python

EDUCATION
B.Tech, Artificial Intelligence and Data Science
Misrimal Navajee Munoth Jain Engineering College, Chennai — CGPA: 7.97
Expected Graduation: June 2027 (Current Year: Final Year)
  `;

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-4xl rounded-2xl cyber-glass border border-cyan-400/60 p-4 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto relative my-auto bg-slate-950/95"
        >
          {/* Action Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/30 pb-4 print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold font-mono text-cyan-300">
                SALMAN FARIS R - OFFICIAL RESUME
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono cyber-glass border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono font-bold bg-cyan-500 text-black hover:bg-cyan-400 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-cyan-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Paper View */}
          <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-xl shadow-2xl font-serif text-sm space-y-6 leading-relaxed max-w-3xl mx-auto print:p-0 print:shadow-none">
            {/* Header */}
            <div className="text-center space-y-2 border-b-2 border-slate-900 pb-4">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase font-sans">
                SALMAN FARIS R
              </h1>
              <p className="text-xs font-sans text-slate-700 flex flex-wrap items-center justify-center gap-2">
                <span>Chennai, Tamil Nadu</span>
                <span>|</span>
                <span>+91 9344937690</span>
                <span>|</span>
                <span>salmanfarisr.btech@gmail.com</span>
                <span>|</span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            {/* Objective */}
            <div className="space-y-1">
              <h2 className="text-xs font-sans font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                OBJECTIVE
              </h2>
              <p className="text-xs text-slate-800 pt-1 font-sans">
                B.Tech Artificial Intelligence and Data Science student seeking an internship to apply machine learning, full-stack development, and automation skills to real-world problems, with hands-on experience building agentic AI systems and production-style automation pipelines.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1 font-sans text-xs">
              <h2 className="font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                TECHNICAL SKILLS
              </h2>
              <ul className="space-y-1 pt-1 text-slate-800">
                <li><strong>Programming:</strong> Python, Java, Sql</li>
                <li><strong>AI/ML &amp; Agentic Systems:</strong> Machine learning, Deep Learning, LangGraph, RAG (ChromaDB, sentence-transformers), Ollama</li>
                <li><strong>Web Development:</strong> Streamlit, Gradio, FastAPI, Flask, React, Tailwind CSS</li>
                <li><strong>Automation &amp; Infra:</strong> n8n, Oracle Cloud (self-hosted), OpenCV, MediaPipe</li>
                <li><strong>Data &amp; Tools:</strong> SQL, Power BI, MS Office, Figma, Canva</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="space-y-3 font-sans text-xs">
              <h2 className="font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                PROJECTS
              </h2>
              
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">
                  Mood-Aware Intelligent Task Scheduling System (Neura Hackathon)
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Developed an intelligent task scheduler utilizing Python that adapts task planning based on user mood and energy levels.</li>
                  <li>Leveraged Google Calendar API for real-time task automation and implemented a nightly feedback loop generating AI-driven productivity insights.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">
                  AI Assistant (Self-Hosted Chat Web App)
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Engineered a privacy-focused, full-stack LLM application using React, FastAPI, and Ollama (Qwen3 8B).</li>
                  <li>Implemented real-time streaming responses and persistent chat history while managing the full development lifecycle via versioned milestones.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">GestureCanvas-AI</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Built a computer vision-based drawing application utilizing OpenCV and MediaPipe for intuitive, touchless UI interaction.</li>
                  <li>Managed complex dependency versioning using isolated virtual environments to ensure stable software execution.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Time-Capsule Assistant (In Progress)</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  <li>Designing a multi-agent RAG pipeline using LangGraph and ChromaDB to document legacy codebases and uncover historical design rationale.</li>
                  <li>Implementing intelligent fallback mechanisms by analyzing indirect data signals—including OCR-scanned sketches and Git commit history—to generate contextual documentation.</li>
                </ul>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-2 font-sans text-xs">
              <h2 className="font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                WORK EXPERIENCE
              </h2>
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Football Data Analyst (Part-Time) — Stats Perform, Chennai</span>
                  <span>Nov 2024 – Apr 2025</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800 pt-1">
                  <li>Collected and annotated live football match data under real-time constraints, ensuring accuracy against strict quality standards for downstream performance analysis.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-1 font-sans text-xs">
              <h2 className="font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-slate-800 pt-1">
                <li>NPTEL — Programming in Java (90%)</li>
                <li>Coursera (IBM) — Generative AI Applications: Get Started</li>
                <li>Google AI Professional Certificate</li>
                <li>Andrew Ng — Machine Learning Specialization (3 courses)</li>
                <li>IBM — Databases and SQL for Data Science with Python</li>
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-1 font-sans text-xs">
              <h2 className="font-bold uppercase tracking-widest text-slate-800 border-b border-slate-300 pb-1">
                EDUCATION
              </h2>
              <div className="text-slate-800 pt-1">
                <p className="font-bold text-slate-900">B.Tech, Artificial Intelligence and Data Science</p>
                <p>Misrimal Navajee Munoth Jain Engineering College, Chennai — CGPA: 7.97</p>
                <p className="text-slate-600">Expected Graduation: June 2027 (Current Year: Final Year)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
