import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Mail, Phone, ArrowRight, Download, Terminal as TerminalIcon } from 'lucide-react';
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
    // Kinetic typography line-by-line reveal using high-performance GSAP stagger
    if (headingRef.current) {
      const text = "Veeranki Jagadeesh";
      headingRef.current.innerHTML = '';
      
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        headingRef.current.appendChild(span);
        return span;
      });

      gsap.fromTo(chars, 
        { opacity: 0, y: 35, rotate: 10 },
        { 
          opacity: 1, 
          y: 0, 
          rotate: 0,
          duration: 0.6, 
          stagger: 0.03, 
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      );
    }

    if (subHeadingRef.current) {
      gsap.fromTo(subHeadingRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power2.out' }
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
      className="relative min-h-[95svh] md:min-h-screen flex items-center justify-center pt-28 md:pt-16 pb-16 overflow-hidden px-6 md:px-12 bg-transparent"
    >
      {/* Morphing Liquid Blobs Background (Ice Blue Theme) */}
      <MorphingBackground colorTheme="blue" />

      {/* WebGL Chrome Torus Knot & Starfield */}
      <Hero3DAccent />

      {/* subtle tech overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading, intro bio and CTAs */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-505/20 bg-primary-505/5 text-primary-505 dark:text-primary-300 text-xs font-semibold mb-6 uppercase tracking-widest select-none backdrop-blur-sm"
          >
            <TerminalIcon className="h-3.5 w-3.5 animate-pulse" />
            Backend & Systems Portfolio
          </motion.div>

          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display font-extrabold leading-[1.05] mb-6 text-zinc-900 dark:text-white select-none tracking-tight uppercase whitespace-nowrap"
          >
          </h1>

          {/* Fading text swapper */}
          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6 select-none font-display">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary-505 dark:text-primary-400"
              >
                {taglines[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p
            ref={subHeadingRef}
            className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-sans"
          >
            Currently pursuing an MCA at VRIT (JNTUK). I focus on clean backend architecture with Python & Flask, secure database relational sessions, and snappy, responsive web layouts.
          </p>

          {/* CTA actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <LiquidButton
              onClick={() => handleScrollTo('projects')}
              className="btn-primary w-full sm:w-auto px-7 py-3 text-sm font-semibold"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </LiquidButton>
            
            <LiquidButton
              href="./resume.pdf"
              download="Veeranki_Jagadeesh_Resume.pdf"
              className="btn-secondary w-full sm:w-auto px-7 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4 mr-2" />
              Get Resume
            </LiquidButton>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-12 text-zinc-500 dark:text-zinc-450 text-xs font-semibold"
          >
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary-505" />
              <a href="mailto:jagadeeshveeranki30@gmail.com" className="hover:text-primary-505 transition-colors">
                jagadeeshveeranki30@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800" />
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary-505" />
              <a href="tel:+916302471838" className="hover:text-primary-505 transition-colors">
                +91 6302471838
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lanyard hanging photo card centered */}
        <div className="lg:col-span-6 w-full flex items-center justify-center relative z-10">
          {/* Lanyard Signature Component */}
          <HangingIDCard />
        </div>

      </div>
    </section>
  );
}
