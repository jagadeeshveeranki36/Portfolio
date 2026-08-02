import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Mail, Phone, ArrowRight, Download } from 'lucide-react';
import Hero3DAccent from '../components/Hero3DAccent';
import HangingIDCard from '../components/HangingIDCard';
import MorphingBackground from '../components/MorphingBackground';
import LiquidButton from '../components/LiquidButton';

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
      const text = "Hi, I'm Jagadeesh Veeranki";
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
      className="relative min-h-[95svh] md:min-h-screen flex items-center justify-center pt-24 md:pt-16 pb-16 overflow-hidden px-6 md:px-12 bg-transparent"
    >
      {/* Morphing Liquid Blobs Background */}
      <MorphingBackground colorTheme="violet" />

      {/* 3D WebGL Mesh/Particles (Desktop) or CSS Glow Fallback (Mobile) */}
      <Hero3DAccent />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading, intro bio and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 text-zinc-650 dark:text-zinc-400 text-xs font-semibold mb-6 uppercase tracking-widest select-none backdrop-blur-sm z-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Open for Developer Roles
          </motion.div>

          {/* GSAP Staggered Header */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] mb-4 text-slate-905 dark:text-white select-none"
          >
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
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-zinc-805 dark:text-zinc-200"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p
            ref={subHeadingRef}
            className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-normal"
          >
            Pursuing MCA at VRIT (JNTUK). I build robust backends with Python & Flask, relational schemas, and design visual graphic layouts and animated modern frontends.
          </p>

          {/* Liquid elastic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <LiquidButton
              onClick={() => handleScrollTo('projects')}
              className="btn-primary w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </LiquidButton>
            
            <LiquidButton
              href="./resume.pdf"
              download="Veeranki_Jagadeesh_Resume.pdf"
              className="btn-secondary w-full sm:w-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </LiquidButton>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-lg font-semibold border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 bg-transparent text-zinc-500 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social detail blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 text-zinc-500 dark:text-zinc-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <a href="mailto:jagadeeshveeranki30@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors magnetic">
                jagadeeshveeranki30@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <a href="tel:+916302471838" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors magnetic">
                +91 6302471838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Hanging ID Card */}
        <div className="lg:col-span-5 w-full relative pointer-events-auto flex justify-center items-center">
          <HangingIDCard />
        </div>

      </div>
    </section>
  );
}
