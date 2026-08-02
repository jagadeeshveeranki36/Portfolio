import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state backdrop blur activation
      setIsScrolled(currentScrollY > 20);

      let currentActive = 'home';
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section has scrolled past the trigger point (220px from top of screen)
          if (rect.top <= 220) {
            currentActive = id;
          }
        }
      }
      
      // Auto active contact at bottom
      if (window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 30) {
        setActiveSection('contact');
      } else {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger scroll spy on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickLink = (href) => {
    setIsOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-lightbg-base/80 dark:bg-darkbg-base/80 border-b border-lightbg-border dark:border-darkbg-border backdrop-blur-md py-3 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo element with magnetic cursor class */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClickLink('#home');
            }}
            className="flex items-center gap-2 group focus:outline-none magnetic"
          >
            <Logo className="w-10 h-10 group-hover:rotate-[360deg] transition-transform duration-700 ease-out" />
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
              <span className="text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">Jagadeesh</span>
              <span className="text-primary-500"> Veeranki</span>
            </span>
          </a>

          {/* Desktop Nav Links (each is magnetic) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/40 dark:bg-slate-900/30 border border-lightbg-border dark:border-darkbg-border px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickLink(link.href);
                  }}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-full focus:outline-none magnetic ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-350 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full -z-10 shadow-md shadow-violet-500/10"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4 relative">
            
            {/* Cassie cord pull toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {/* Hamburger menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-none text-slate-700 dark:text-slate-300 magnetic"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* Full-screen Overlay Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#070b13]/98 dark:bg-[#05080e]/98 backdrop-blur-lg p-10 z-40 lg:hidden flex flex-col justify-between"
          >
            {/* Backdrop Noise */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

            <div className="flex flex-col gap-6 mt-20 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Navigation</span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, index) => {
                  const id = link.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickLink(link.href);
                      }}
                      initial={{ opacity: 0, x: -35 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05, ease: 'easeOut' }}
                      className={`text-3xl font-display font-extrabold transition-colors tracking-tight flex items-center justify-between ${
                        isActive
                          ? 'text-primary-500'
                          : 'text-slate-300 hover:text-primary-400'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-md shadow-primary-500/20" />
                      )}
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <div className="text-xs text-slate-500 border-t border-slate-800/80 pt-6 relative z-10">
              © {new Date().getFullYear()} Jagadeesh Veeranki · MCA Developer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
