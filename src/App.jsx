import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useTheme from './hooks/useTheme';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    // Apply GSAP cinematic page transition blends only on desktop/non-reduced motion devices
    const isTouch = window.matchMedia('(max-width: 1024px)').matches || ('ontouchstart' in window);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const sections = gsap.utils.toArray('main > section');
    
    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        // As the section scrolls in, it scales up, unblurs and fades in
        gsap.fromTo(section,
          { opacity: 0.8, scale: 0.97, filter: 'blur(3px)' },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top center',
              scrub: true,
            }
          }
        );

        // As the section scrolls out, it scales down, blurs and fades out
        gsap.to(section, {
          opacity: 0.8,
          scale: 0.97,
          filter: 'blur(3px)',
          scrollTrigger: {
            trigger: section,
            start: 'bottom center',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-lightbg-base dark:bg-darkbg-base transition-colors duration-500 relative">
      
      {/* Preloader Curtain Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Core Interactive elements */}
          <CustomCursor />
          <ScrollProgress />
          <SocialSidebar />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          {/* Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          {/* Footers */}
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </div>
  );
}

export default App;
