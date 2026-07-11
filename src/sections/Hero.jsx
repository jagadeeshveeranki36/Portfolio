import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Mail, Phone, ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Hero3DAccent from '../components/Hero3DAccent';

const taglines = [
  'Python Developer',
  'Full-Stack Web Developer',
  'MCA Student'
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP character stagger text-reveal effect for main title
    if (headingRef.current) {
      const text = headingRef.current.innerText;
      headingRef.current.innerHTML = '';
      
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.transformOrigin = 'bottom center';
        headingRef.current.appendChild(span);
        return span;
      });

      gsap.fromTo(chars, 
        { opacity: 0, y: 60, rotateX: -60 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.9, 
          stagger: 0.025, 
          ease: 'power4.out',
          delay: 0.5
        }
      );
    }

    // GSAP fade up subtext
    if (subHeadingRef.current) {
      gsap.fromTo(subHeadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.1, ease: 'power3.out' }
      );
    }
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[95svh] md:min-h-screen flex items-center justify-center pt-24 md:pt-16 pb-16 overflow-hidden px-6 md:px-12"
    >
      {/* 3D WebGL Mesh/Particles (Desktop) or CSS Glow Fallback (Mobile) */}
      <Hero3DAccent />

      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-violet-600/10 dark:bg-violet-600/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] rounded-full bg-indigo-600/10 dark:bg-indigo-600/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading, intro bio and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-6 uppercase tracking-widest select-none"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Open for Developer Roles
          </motion.div>

          {/* GSAP Staggered Header */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] mb-4 text-slate-900 dark:text-white select-none"
          >
            Hi, I'm Jagadeesh Veeranki
          </h1>

          {/* Fading text swapper */}
          <div className="h-10 md:h-14 flex items-center justify-center lg:justify-start mb-6 select-none">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-800 dark:text-slate-200"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p
            ref={subHeadingRef}
            className="text-slate-650 dark:text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-normal"
          >
            Pursuing MCA at VRIT (JNTUK). I build robust backends with Python & Flask, relational schemas, and design visual graphic layouts and animated modern frontends.
          </p>

          {/* CTAs with magnetic hover logic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="magnetic px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="./resume.pdf"
              download
              className="magnetic px-8 py-3.5 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="magnetic px-8 py-3.5 rounded-full border border-dashed border-primary-500/40 hover:border-primary-500 bg-transparent text-primary-500 font-medium transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social detail blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 text-slate-550 dark:text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-500" />
              <a href="mailto:jagadeeshveeranki30@gmail.com" className="hover:text-primary-500 transition-colors magnetic">
                jagadeeshveeranki30@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-350 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-500" />
              <a href="tel:+916302471838" className="hover:text-primary-500 transition-colors magnetic">
                +91 6302471838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: WebGL Interactive viewport spacing */}
        <div className="lg:col-span-5 h-[320px] md:h-[400px] lg:h-[480px] w-full relative pointer-events-none" />

      </div>
    </section>
  );
}
