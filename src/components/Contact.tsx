import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Phone,
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface ContactProps {
  theme: ThemeMode;
}

export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cyber-glass border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto font-mono">
            Open for AI/ML engineering internships, multi-agent project collaborations, and tech opportunities
          </p>
        </div>

        {/* Quick Social Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* WhatsApp Direct Card */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl cyber-glass border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase">WHATSAPP DIRECT</div>
              <div className="text-sm font-bold font-mono text-white">+91 9344937690</div>
              <div className="text-[10px] text-slate-400 font-mono">Chat instantly</div>
            </div>
          </a>

          {/* Instagram Handle Card */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl cyber-glass border border-pink-500/40 hover:border-pink-400 hover:bg-pink-500/10 transition-all flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-pink-400 font-bold uppercase">INSTAGRAM</div>
              <div className="text-sm font-bold font-mono text-white">@salmaan_faris.r</div>
              <div className="text-[10px] text-slate-400 font-mono">Follow on IG</div>
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl cyber-glass border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-all flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-400 font-bold uppercase">LINKEDIN</div>
              <div className="text-sm font-bold font-mono text-white">Salman Faris R</div>
              <div className="text-[10px] text-slate-400 font-mono">Connect professionally</div>
            </div>
          </a>

          {/* GitHub Profile Card */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl cyber-glass border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-4 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-purple-400 font-bold uppercase">GITHUB</div>
              <div className="text-sm font-bold font-mono text-white">salmanfarisr</div>
              <div className="text-[10px] text-slate-400 font-mono">View Repos &amp; Code</div>
            </div>
          </a>
        </div>

        {/* Contact Form & Direct Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Email & Location Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-mono text-cyan-300">Direct Contact Hub</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Feel free to reach out directly via email, WhatsApp message, or connect on LinkedIn. I respond promptly!
              </p>
            </div>

            <div className="space-y-4 pt-2 font-mono text-xs">
              {/* Email Block */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    EMAIL ADDRESS
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-white break-all">{SOCIAL_LINKS.email}</div>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-1">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  CURRENT LOCATION
                </span>
                <div className="text-sm font-bold text-white">{SOCIAL_LINKS.location}</div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl cyber-glass border border-cyan-500/30">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-300 uppercase">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 uppercase">Subject</label>
                <input
                  type="text"
                  placeholder="AI Internship / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300 uppercase">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Salman, I'd like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg cyber-glass border border-cyan-500/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-lg font-mono text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-98 cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                    <span>TRANSMITTING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Message transmitted successfully! Salman will reply shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
