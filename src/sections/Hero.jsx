import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Mail, Phone, ArrowRight, Download, Camera } from 'lucide-react';
import Hero3DAccent from '../components/Hero3DAccent';
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
      const text = "Veeranki Jagadeesh";
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
        { opacity: 0, y: 50, rotateX: -45 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 1.0, 
          stagger: 0.03, 
          ease: 'power3.out',
          delay: 0.4
        }
      );
    }

    if (subHeadingRef.current) {
      gsap.fromTo(subHeadingRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.0, ease: 'power3.out' }
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
      {/* Morphing Liquid Blobs Background (Champagne Gold / Violet) */}
      <MorphingBackground colorTheme="violet" />

      {/* Three.js Glowing Gold Dust Starfield */}
      <Hero3DAccent />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading, intro bio and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-505/20 dark:border-primary-505/30 bg-primary-50/50 dark:bg-zinc-900/30 text-primary-605 dark:text-primary-300 text-xs font-semibold mb-6 uppercase tracking-widest select-none backdrop-blur-sm"
          >
            <Camera className="h-3.5 w-3.5 animate-pulse" />
            Professional Portrait Portfolio
          </motion.div>

          {/* GSAP Staggered Header */}
          <h1
            ref={headingRef}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-light leading-[1.05] mb-6 text-zinc-905 dark:text-white select-none tracking-tight"
          >
          </h1>

          {/* Fading text swapper */}
          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6 select-none font-display">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="text-2xl sm:text-3xl md:text-3xl font-light italic text-primary-605 dark:text-primary-300"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p
            ref={subHeadingRef}
            className="text-zinc-650 dark:text-zinc-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-normal"
          >
            Pursuing MCA at VRIT (JNTUK). I build robust backends with Python & Flask, plan relational schemas, and design visual graphic layouts and animated modern frontends.
          </p>

          {/* Liquid elastic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <LiquidButton
              onClick={() => handleScrollTo('projects')}
              className="btn-primary w-full sm:w-auto px-7"
            >
              View Projects
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </LiquidButton>
            
            <LiquidButton
              href="./resume.pdf"
              download="Veeranki_Jagadeesh_Resume.pdf"
              className="btn-secondary w-full sm:w-auto px-7"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </LiquidButton>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-lg font-semibold border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-primary-505 dark:hover:border-primary-300 hover:text-primary-605 dark:hover:text-primary-300 bg-transparent text-zinc-500 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social detail blocks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 text-zinc-500 dark:text-zinc-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-605 dark:text-primary-400" />
              <a href="mailto:jagadeeshveeranki30@gmail.com" className="hover:text-primary-605 dark:hover:text-primary-300 transition-colors magnetic">
                jagadeeshveeranki30@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary-605 dark:text-primary-400" />
              <a href="tel:+916302471838" className="hover:text-primary-605 dark:hover:text-primary-300 transition-colors magnetic">
                +91 6302471838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Framed Headshot Presentation */}
        <div className="lg:col-span-5 w-full relative pointer-events-auto flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.6 }}
            className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-[340px] md:h-[450px] group origin-center perspective-1000"
          >
            {/* Outer Luxury Double Gold Border Frame */}
            <motion.div
              whileHover="hover"
              variants={{
                hover: {
                  rotateY: 6,
                  rotateX: -4,
                  scale: 1.025,
                  boxShadow: "0 25px 60px -15px rgba(197, 168, 128, 0.25)",
                  transition: { type: 'spring', stiffness: 350, damping: 15 }
                }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="absolute inset-0 rounded-2xl border-2 border-primary-505/30 dark:border-primary-505/20 bg-zinc-100/50 dark:bg-zinc-900/50 p-3 shadow-xl backdrop-blur-sm cursor-pointer transition-all duration-300 flex items-center justify-center"
            >
              {/* Inner thin accent frame */}
              <div 
                style={{ transform: 'translateZ(15px)' }}
                className="w-full h-full rounded-xl border border-primary-505/50 dark:border-primary-505/30 overflow-hidden relative"
              >
                {/* Real Headshot Image */}
                <img
                  src="./profile.jpg"
                  alt="Veeranki Jagadeesh - Professional Portrait"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 select-none scale-102 group-hover:scale-105"
                  draggable="false"
                />

                {/* Elegant overlay stamp */}
                <div className="absolute bottom-4 left-4 bg-zinc-950/80 dark:bg-zinc-950/90 text-primary-505 text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded border border-primary-505/30 backdrop-blur-md flex items-center gap-1.5 select-none pointer-events-none">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  VERIFIED // PORTRAIT
                </div>
              </div>
            </motion.div>

            {/* Background floating gold ring halo */}
            <div className="absolute -inset-4 rounded-3xl border border-primary-505/10 pointer-events-none scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-[-1]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
