import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Moon,
  FileText,
  Menu,
  X,
  Sparkles,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  User,
  Activity,
} from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  particlesEnabled: boolean;
  onToggleParticles: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  particlesEnabled,
  onToggleParticles,
  onOpenResume,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Terminal },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Sparkles },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 cyber-glass shadow-lg border-b border-cyan-500/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg cyber-glass border border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
              <span className="font-mono font-bold text-lg text-cyan-400 group-hover:scale-110 transition-transform">
                SF
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-base sm:text-lg">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  SALMAN
                </span>
                <span className="text-cyan-400 font-mono">.AI</span>
              </div>
              <p className="text-[10px] text-cyan-500/80 font-mono uppercase tracking-widest hidden sm:block">
                Agentic AI Developer
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full cyber-glass border border-cyan-500/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : theme === 'dark'
                      ? 'text-slate-400 hover:text-cyan-300'
                      : 'text-slate-600 hover:text-cyan-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-400/40 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Particle FX Toggle */}
            <button
              onClick={onToggleParticles}
              title={particlesEnabled ? 'Disable Grid Particles' : 'Enable Grid Particles'}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                particlesEnabled
                  ? 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
                  : 'border-slate-700/50 text-slate-500 bg-transparent'
              }`}
            >
              <Activity className="w-4 h-4" />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light Sci-Fi' : 'Dark Cyber'} Mode`}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'border-cyan-500/30 text-cyan-400 hover:border-cyan-400 bg-slate-900/60'
                  : 'border-slate-300 text-amber-600 hover:border-amber-500 bg-white/80'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Modal Trigger Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg cyber-glass border border-cyan-500/30 text-cyan-400 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden cyber-glass border-b border-cyan-500/30 mt-3 px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-mono text-sm transition-all text-left ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 font-semibold'
                        : theme === 'dark'
                        ? 'text-slate-300 hover:bg-slate-800/50'
                        : 'text-slate-700 hover:bg-slate-200/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-mono text-xs font-semibold bg-cyan-500 text-black"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
