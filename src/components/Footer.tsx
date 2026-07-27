import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  Terminal,
  Activity,
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 py-12 cyber-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono font-bold text-lg">
              <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>SALMAN</span>
              <span className="text-cyan-400">.AI</span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              B.Tech Artificial Intelligence &amp; Data Science | Chennai, India
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:scale-110 transition-all cursor-pointer"
              title="WhatsApp Chat (+91 9344937690)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 hover:scale-110 transition-all cursor-pointer"
              title="Instagram (@salmaan_faris.r)"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all cursor-pointer"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* System Status & Time */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-cyan-500/20 text-cyan-400">
              <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>{timeString || 'SYSTEM ONLINE'}</span>
            </span>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-cyan-500/10 text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Salman Faris R. Built with React, Framer Motion &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
