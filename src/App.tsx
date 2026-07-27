import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { AIAssistantBot } from './components/AIAssistantBot';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme class to document body
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleParticles = () => {
    setParticlesEnabled((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative font-sans ${theme}`}>
      {/* Background Matrix & Grid Effects */}
      <BackgroundEffects theme={theme} particlesEnabled={particlesEnabled} />

      {/* Top Navbar Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        particlesEnabled={particlesEnabled}
        onToggleParticles={toggleParticles}
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero theme={theme} onOpenResume={() => setIsResumeOpen(true)} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        <EducationCertifications theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Floating Interactive AI Assistant Bot */}
      <AIAssistantBot />

      {/* Resume Viewer / Printer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
