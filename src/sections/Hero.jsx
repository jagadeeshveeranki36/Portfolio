import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ArrowRight, Download, Code, Cpu, Database } from 'lucide-react';

const taglines = [
  'Python Developer',
  'Full-Stack Web Developer',
  'MCA Student'
];

// Interactive Canvas Particle Network Background
function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = 60;
    let mouse = { x: null, y: null, radius: 120 };

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.baseAlpha = Math.random() * 0.4 + 0.15;
        this.alpha = this.baseAlpha;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce boundaries
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.alpha = Math.min(this.baseAlpha + force * 0.5, 0.8);
            // Push slightly
            this.x += (dx / dist) * force * 1.2;
            this.y += (dy / dist) * force * 1.2;
          } else {
            if (this.alpha > this.baseAlpha) this.alpha -= 0.01;
          }
        } else {
          if (this.alpha > this.baseAlpha) this.alpha -= 0.01;
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#8b5cf6'; // primary theme color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = '#8b5cf6';
            ctx.globalAlpha = 0.08 * (1 - dist / 100);
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-30 z-0"
    />
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92svh] md:min-h-screen flex items-center justify-center pt-24 md:pt-16 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* Particle Overlay */}
      <ParticleNetwork />

      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-violet-600/10 dark:bg-violet-600/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-indigo-600/10 dark:bg-indigo-600/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-6 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] mb-4 text-slate-900 dark:text-white"
          >
            Hi, I'm <span className="gradient-text">Jagadeesh Veeranki</span>
          </motion.h1>

          {/* Typing/Fading Tagline Carousel */}
          <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-800 dark:text-slate-200"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-normal"
          >
            Pursuing my Master of Computer Applications (MCA) at VRIT. I build clean, high-performance backends in Python/Flask and design premium web user experiences with modern frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="./resume.pdf"
              download
              className="px-8 py-3.5 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 rounded-full border border-dashed border-primary-500/40 hover:border-primary-500 bg-transparent text-primary-500 font-medium transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links & Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 text-slate-500 dark:text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-500" />
              <a href="mailto:jagadeeshveeranki30@gmail.com" className="hover:text-primary-500 transition-colors">
                jagadeeshveeranki30@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-500" />
              <a href="tel:+916302471838" className="hover:text-primary-500 transition-colors">
                +91 6302471838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Graphic/Avatar Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Pulsing Rotating Orbit Rims */}
            <div className="absolute inset-0 rounded-full border border-dashed border-primary-500/20 dark:border-primary-500/10 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-lightbg-border dark:border-darkbg-border animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-violet-600/10 to-indigo-500/10 dark:from-violet-600/5 dark:to-indigo-500/5 blur-[20px]" />

            {/* Glowing floating cards/badges */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 rounded-2xl glass-card text-primary-500 flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Code className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-6 -left-6 p-3 rounded-2xl glass-card text-indigo-500 flex items-center justify-center shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.5 }}
            >
              <Database className="h-6 w-6" />
            </motion.div>

            <motion.div
              className="absolute bottom-16 -right-6 p-3 rounded-2xl glass-card text-violet-500 flex items-center justify-center shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
            >
              <Cpu className="h-6 w-6" />
            </motion.div>

            {/* Main Glassmorphic Photo/Icon container */}
            <div className="absolute inset-10 rounded-3xl bg-gradient-to-tr from-violet-600/15 to-indigo-500/15 dark:from-violet-600/10 dark:to-indigo-500/10 border border-lightbg-border dark:border-darkbg-border backdrop-blur-md shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
              <div className="text-6xl lg:text-7xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 select-none group-hover:scale-110 transition-transform duration-500">
                VJ
              </div>
              <div className="absolute bottom-6 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">MCA Student</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-600 block mt-0.5">VRIT | JNTUK</span>
              </div>
              
              {/* Optional Profile Photo Layer (uncomment/edit when ready)
              <img 
                src="./avatar.jpg" 
                alt="Jagadeesh Veeranki" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              */}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
