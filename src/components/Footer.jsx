import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-lightbg-border dark:border-darkbg-border bg-white/10 dark:bg-black/10 backdrop-blur-sm py-12 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary-505/10 dark:bg-primary-505/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-lightbg-border dark:border-darkbg-border pb-8 mb-8 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white shadow-md">
                VJ
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Jagadeesh Veeranki
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-455 max-w-xs mx-auto md:mx-0">
              Pursuing MCA | Passionate Full-Stack & Python Developer creating secure and productive applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Connect With Me</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/jagadeeshveeranki36"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-505 hover:text-white dark:hover:bg-primary-505 transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-505 hover:text-white dark:hover:bg-primary-505 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:jagadeeshveeranki30@gmail.com"
                className="w-10 h-10 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-505 hover:text-white dark:hover:bg-primary-505 transition-all duration-300 shadow-sm"
                aria-label="Email Address"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+916302471838"
                className="w-10 h-10 rounded-full border border-lightbg-border dark:border-darkbg-border bg-white/40 dark:bg-slate-900/40 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-505 hover:text-white dark:hover:bg-primary-505 transition-all duration-300 shadow-sm"
                aria-label="Phone Number"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-col items-center md:items-end justify-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Navigation</span>
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="group text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-505 dark:hover:text-primary-400 transition-colors flex items-center gap-1.5 animate-pulse"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

        </div>

        {/* Standard copyright notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 text-center sm:text-left">
          <div>
            © {currentYear} Jagadeesh Veeranki. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with <span className="text-rose-500">♥</span> using React, Tailwind CSS & Framer Motion.
          </div>
        </div>

        {/* Large Wordmark Watermark branding banner (like Antigravity style) */}
        <div className="w-full text-center mt-12 select-none border-t border-lightbg-border/20 dark:border-darkbg-border/20 pt-8">
          <h2 className="font-display font-extrabold text-[8vw] leading-none text-zinc-950/[0.04] dark:text-white/[0.02] uppercase tracking-tighter w-full block">
            Veeranki Jagadeesh
          </h2>
        </div>

      </div>
    </footer>
  );
}
