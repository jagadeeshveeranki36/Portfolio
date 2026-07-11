import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, X, Check, Server, Monitor, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Expense Tracker (Full-Stack Web App)',
    tagline: 'A secure, multi-user personal finance management platform',
    summary: 'Built a full-stack, multi-user personal finance web application with secure authentication, multi-currency tracking across 8 currencies, and category-wise monthly budgeting with automatic alerts.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'Flask-Login', 'Bootstrap 5', 'Chart.js', 'SQLite', 'Docker', 'Gunicorn'],
    architecture: 'Application Factory pattern with 5 Flask Blueprints (auth, dashboard, expenses, reports, API).',
    features: [
      'Live analytics dashboard with animated stat counters and Chart.js visualizations (Doughnut, Bar, Line charts) via a dedicated REST API endpoint.',
      'Multi-format data export/import: styled Excel (OpenPyXL), branded PDF reports (FPDF2), and CSV.',
      'Google-style multi-account session switcher supporting up to 5 concurrent accounts.',
      'Full JSON REST API (CRUD endpoints) alongside server-rendered views.',
      'Light/dark theme with custom design-token CSS system and glassmorphism interface.',
      'Containerized with a multi-stage Dockerfile and served via Gunicorn for production.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Expense-Tracker/#/landing',
    githubLink: 'https://github.com/jagadeeshveeranki36/Expense-Tracker',
    icon: <Server className="h-6 w-6 text-violet-500" />,
    color: 'from-violet-600/10 to-indigo-500/10'
  },
  {
    id: 2,
    title: 'Task Manager (Desktop Productivity App)',
    tagline: 'A native desktop app with a real background reminder engine',
    summary: 'Built a standalone offline-first desktop productivity app whose core differentiator is a genuine background scheduler that actively interrupts the user with an animated, always-on-top popup the instant a task becomes due.',
    tech: ['Python', 'CustomTkinter', 'Tkinter', 'APScheduler', 'SQLite', 'plyer', 'HTML/CSS/JS (companion web clone)'],
    architecture: 'Standalone local architecture utilizing Python subprocesses and APScheduler background thread, coupled with a fully isolated companion Web static clone.',
    features: [
      'Background reminder engine (APScheduler) combining exact one-shot jobs with a 5-second polling fallback.',
      'Animated, always-on-top alert popup with live countdown, snooze (60 min), and auto-dismiss progress bar.',
      'Native desktop toast notifications integrated via the plyer library.',
      'Color-coded priority badges (Low/Medium/High), live stats (Total/Pending/Done/Overdue), sorting and filtering.',
      '100% offline, single local SQLite file — no accounts, configurations, or remote servers.',
      'Ships a fully independent browser-based clone (HTML/CSS/JS + localStorage + Notification API) of the same UI/UX.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Task-Manager/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Task-Manager',
    icon: <Monitor className="h-6 w-6 text-indigo-500" />,
    color: 'from-indigo-600/10 to-sky-500/10'
  },
  {
    id: 3,
    title: 'Interactive Motion Portfolio',
    tagline: 'An award-winning caliber interactive portfolio',
    summary: 'Designed and developed this personal portfolio showcasing advanced motion design principles, a custom WebGL 3D canvas sphere, magnetic cursor trails, and fluid scroll pinning storyboards.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
    architecture: 'Modular React architecture with code-split vendor chunks, custom hooks, and dynamic browser fallbacks.',
    features: [
      'Interactive 3D WebGL wireframe sphere with custom orbit dust particles that tracks mouse coords.',
      'GSAP ScrollTrigger deck-stacking card pinning on desktop.',
      'Cassie-style string pull theme toggle with spring bounce and localStorage persistence.',
      'Custom trailing dual-ring cursor with magnetic pull dynamics toward class-marked elements.',
      'Automatic CI/CD deployment pipeline via GitHub Actions and auto-sync file watchers.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Portfolio/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Portfolio',
    icon: <Layers className="h-6 w-6 text-emerald-500" />,
    color: 'from-emerald-600/10 to-teal-500/10'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMode, setIsMobileMode] = useState(true);
  
  const pinSectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Check if device is touch or screen size is small, or user prefers reduced motion
    const checkMotionNeeds = () => {
      const isTouch = window.matchMedia('(max-width: 1024px)').matches || ('ontouchstart' in window);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobileMode(isTouch || prefersReducedMotion);
    };

    checkMotionNeeds();
    window.addEventListener('resize', checkMotionNeeds);
    return () => window.removeEventListener('resize', checkMotionNeeds);
  }, []);

  useEffect(() => {
    if (isMobileMode) return;

    // GSAP ScrollTrigger Pinned Deck Stack
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });

      // Card 2 slides over Card 1
      tl.fromTo(cardsRef.current[1],
        { yPercent: 120, scale: 0.94, rotate: 1 },
        { yPercent: 0, scale: 1, rotate: 0, ease: 'none' }
      );

      // Card 3 slides over Card 2
      tl.fromTo(cardsRef.current[2],
        { yPercent: 120, scale: 0.94, rotate: -1 },
        { yPercent: 0, scale: 1, rotate: 0, ease: 'none' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isMobileMode]);

  // Card Mouse move tilt animation
  const handleMouseMove = (e, index) => {
    if (isMobileMode) return;
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Degrees of tilt
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 16;
    const angleY = (x - xc) / 16;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div ref={containerRef}>
      <section
        ref={pinSectionRef}
        id="projects"
        className={`relative overflow-hidden px-6 md:px-12 ${
          isMobileMode ? 'py-24 bg-transparent' : 'h-screen flex items-center justify-center bg-transparent'
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center mb-12 lg:mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
            >
              My Creations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
            >
              Featured Projects
            </motion.h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
          </div>

          {/* Projects Container: stacks on desktop, lists on mobile */}
          <div className={`relative ${isMobileMode ? 'space-y-8' : 'w-full max-w-4xl mx-auto h-[480px]'}`}>
            
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={addToRefs}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setSelectedProject(project)}
                className={`project-card-container glass-card glass-card-hover group cursor-pointer overflow-hidden transition-all duration-300 ${
                  isMobileMode
                    ? 'w-full flex flex-col justify-between'
                    : 'absolute inset-0 w-full h-full flex flex-col justify-between bg-lightbg-card/90 dark:bg-darkbg-card/90 border border-lightbg-border dark:border-darkbg-border'
                }`}
                style={{
                  zIndex: index + 1,
                  transformStyle: 'preserve-3d',
                  // Stack offset shadows on desktop
                  boxShadow: !isMobileMode ? `0 ${20 + index * 10}px 50px -15px rgba(0,0,0,0.3)` : undefined
                }}
              >
                {/* Card Header Background Gradient */}
                <div className={`h-24 md:h-28 bg-gradient-to-tr ${project.color} flex items-center justify-between px-6 md:px-8 border-b border-lightbg-border dark:border-darkbg-border/60 relative overflow-hidden select-none`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 dark:bg-black/5 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900 dark:text-white leading-tight">
                        {project.title.split(' (')[0]}
                      </h3>
                      <span className="text-[10px] md:text-xs font-medium text-slate-550 dark:text-slate-400">
                        {project.title.includes('(') ? '(' + project.title.split(' (')[1] : ''}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/15 hidden sm:block">
                    Interactive
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between select-none">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-primary-500 mb-2 italic">
                      "{project.tagline}"
                    </h4>
                    <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 px-2.5 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="text-[10px] font-bold bg-primary-500/10 text-primary-500 dark:text-primary-400 px-2.5 py-1 rounded-md">
                          +{project.tech.length - 5} More
                        </span>
                      )}
                    </div>

                    {/* Trigger study link */}
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-500 group-hover:text-primary-650 dark:group-hover:text-primary-400">
                      <span>View Case Study</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Modal Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="bg-lightbg-base dark:bg-darkbg-base border border-lightbg-border dark:border-darkbg-border rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-lightbg-border dark:border-darkbg-border/60 flex items-start justify-between bg-white/20 dark:bg-slate-900/20 sticky top-0 backdrop-blur-md z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-primary-500 font-semibold italic mt-1">
                      "{selectedProject.tagline}"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none magnetic"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-650 dark:text-slate-350 text-base leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-lightbg-border dark:border-darkbg-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Architecture & Patterns
                  </h4>
                  <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-lightbg-border dark:border-darkbg-border text-slate-700 dark:text-slate-350 text-sm leading-relaxed flex items-start gap-2.5">
                    <Layers className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{selectedProject.architecture}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                          <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-lightbg-border dark:border-darkbg-border/60 bg-white/20 dark:bg-slate-900/20 flex gap-4 sticky bottom-0 backdrop-blur-md">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic flex-1 px-5 py-3 rounded-xl border border-lightbg-border dark:border-darkbg-border bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repo
                </a>
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic flex-1 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/10 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
