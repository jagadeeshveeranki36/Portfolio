import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

function App() {
  const [theme, toggleTheme] = useTheme();
  const [loading, setLoading] = useState(true);

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
          {/* Background radial glow coordinates */}
          <div className="absolute top-[10svh] left-[15vw] glow-blur glow-purple" />
          <div className="absolute top-[120svh] right-[10vw] glow-blur glow-blue" />
          <div className="absolute top-[280svh] left-[8vw] glow-blur glow-purple" />
          <div className="absolute top-[450svh] right-[12vw] glow-blur glow-blue" />

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
