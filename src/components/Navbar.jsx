import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy logic
      const scrollPosition = window.scrollY + 120; // offset navbar height
      
      // Special case: check if we are at the very bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection('contact');
        return;
      }

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-lightbg-base/70 dark:bg-darkbg-base/70 border-b border-lightbg-border dark:border-darkbg-border backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClickLink('#home');
          }}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
            VJ
          </div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            <span className="text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">Jagadeesh</span>
            <span className="text-primary-500"> Veeranki</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/30 dark:bg-slate-900/30 border border-lightbg-border dark:border-darkbg-border px-3 py-1.5 rounded-full backdrop-blur-sm">
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
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Hamburger Menu Toggle (Mobile) */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-none text-slate-700 dark:text-slate-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[65px] bg-slate-900/40 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Drawer menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-[65px] right-0 bottom-0 w-4/5 max-w-sm bg-lightbg-base/95 dark:bg-darkbg-base/95 border-l border-lightbg-border dark:border-darkbg-border p-8 z-40 lg:hidden shadow-2xl flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Navigation</span>
                <nav className="flex flex-col gap-4">
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
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`text-lg font-display font-medium py-1 transition-colors flex items-center justify-between ${
                          isActive
                            ? 'text-primary-500 dark:text-primary-400'
                            : 'text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400'
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 border-t border-lightbg-border dark:border-darkbg-border pt-4">
                © {new Date().getFullYear()} Jagadeesh Veeranki
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
