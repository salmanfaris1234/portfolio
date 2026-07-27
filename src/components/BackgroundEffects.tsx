import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface BackgroundEffectsProps {
  theme: ThemeMode;
  particlesEnabled: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ theme, particlesEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!particlesEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system
    const particleCount = Math.min(Math.floor(width / 25), 60);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const isDark = theme === 'dark';
    const cyanColor = isDark ? 'rgba(0, 240, 255, ' : 'rgba(2, 132, 199, ';
    const purpleColor = isDark ? 'rgba(138, 43, 226, ' : 'rgba(124, 58, 237, ';

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? cyanColor : purpleColor,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha})`;
        ctx.fill();

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `${p1.color}${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, particlesEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Radial Gradient Glows */}
      <div
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-600/10'
        }`}
      />
      <div
        className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full blur-[140px] transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-500/10'
        }`}
      />
      <div
        className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-[130px] transition-opacity duration-700 ${
          theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-500/10'
        }`}
      />

      {/* Particle Canvas */}
      {particlesEnabled && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />}

      {/* Subtle Scanline Overlay */}
      {theme === 'dark' && <div className="scanline" />}
    </div>
  );
};
