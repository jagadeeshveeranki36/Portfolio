import React from 'react';
import useTheme from './hooks/useTheme';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
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

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-lightbg-base dark:bg-darkbg-base transition-colors duration-300 relative select-none">
      
      {/* Background radial highlight glows */}
      <div className="absolute top-[10svh] left-[15vw] glow-blur glow-purple" />
      <div className="absolute top-[120svh] right-[10vw] glow-blur glow-blue" />
      <div className="absolute top-[280svh] left-[8vw] glow-blur glow-purple" />
      <div className="absolute top-[450svh] right-[12vw] glow-blur glow-blue" />

      {/* Floating Cursor (Desktop only) */}
      <CustomCursor />

      {/* Top mounted Scroll Indicator */}
      <ScrollProgress />

      {/* Header / Nav */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer & Back to top controls */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
