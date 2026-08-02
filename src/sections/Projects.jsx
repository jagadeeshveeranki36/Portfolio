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
      'Light/dark theme with custom design-token CSS system and glassmorphic interface.',
      'Containerized with a multi-stage Dockerfile and served via Gunicorn for production.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Expense-Tracker/#/landing',
    githubLink: 'https://github.com/jagadeeshveeranki36/Expense-Tracker',
    icon: <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    color: 'from-zinc-100 to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-850/50'
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
    icon: <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    color: 'from-zinc-100 to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-850/50'
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
    icon: <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    color: 'from-zinc-100 to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-850/50'
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

  const handleMouseMove = (e, index) => {
    if (isMobileMode) return;
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 20;
    const angleY = (x - xc) / 20;

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
        className={`relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/50 dark:border-zinc-800/40 ${
          isMobileMode ? 'py-32 bg-transparent' : 'h-screen flex items-center justify-center bg-transparent'
        }`}
      >
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
          
          {/* Section Heading - Swiss Minimal */}
          <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/60 dark:border-zinc-800/50 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
              03 / CASE STUDIES
            </span>
            <h2 className="font-display italic text-3xl text-zinc-900 dark:text-white">
              Selected Projects
            </h2>
          </div>

          {/* Projects Deck Stack Container */}
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
                    ? 'w-full flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-800/40'
                    : 'absolute inset-0 w-full h-full flex flex-col justify-between bg-zinc-50/95 dark:bg-zinc-900/95 border border-zinc-200/50 dark:border-zinc-800/50'
                }`}
                style={{
                  zIndex: index + 1,
                  transformStyle: 'preserve-3d',
                  boxShadow: !isMobileMode ? `0 ${15 + index * 8}px 45px -15px rgba(0,0,0,0.15)` : undefined
                }}
              >
                {/* Header card panel */}
                <div className={`h-24 md:h-26 bg-gradient-to-tr ${project.color} flex items-center justify-between px-6 md:px-8 border-b border-zinc-250/30 dark:border-zinc-800/30 relative overflow-hidden select-none`}>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center shadow-sm">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base md:text-lg text-zinc-905 dark:text-white leading-tight">
                        {project.title.split(' (')[0]}
                      </h3>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        {project.title.includes('(') ? '(' + project.title.split(' (')[1] : ''}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[8px] tracking-widest text-zinc-400 dark:text-zinc-500 uppercase border border-zinc-200/40 dark:border-zinc-800/40 px-2 py-0.5 rounded hidden sm:block">
                    CASE STUDY // 0{project.id}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between select-none">
                  <div>
                    <h4 className="font-display italic text-sm text-blue-600 dark:text-blue-450 mb-2">
                      "{project.tagline}"
                    </h4>
                    <p className="text-zinc-650 dark:text-zinc-350 text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-350 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">
                          +{project.tech.length - 5} More
                        </span>
                      )}
                    </div>

                    {/* Trigger study link */}
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-900 dark:text-white border-t border-zinc-200/30 dark:border-zinc-800/30 pt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <span>Explore Case Study</span>
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
              className="fixed inset-0 bg-zinc-950/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-250 dark:border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-zinc-200 dark:border-zinc-800/60 flex items-start justify-between bg-zinc-50/80 dark:bg-zinc-950/80 sticky top-0 backdrop-blur-md z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-zinc-905 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="font-display italic text-xs text-blue-600 dark:text-blue-400 mt-1">
                      "{selectedProject.tagline}"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-450 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors border border-zinc-200/40 dark:border-zinc-850 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 font-bold">
                    Overview
                  </h4>
                  <p className="text-zinc-650 dark:text-zinc-350 text-base leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 font-bold">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-305 px-2.5 py-1 rounded border border-zinc-200/30 dark:border-zinc-800/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 font-bold">
                    Architecture & Patterns
                  </h4>
                  <div className="p-4 rounded-xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-700 dark:text-zinc-350 text-sm leading-relaxed flex items-start gap-2.5">
                    <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{selectedProject.architecture}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 font-bold">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-650 dark:text-zinc-355 text-sm leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 dark:bg-blue-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-500/20">
                          <Check className="h-2.5 w-2.5 text-blue-600 dark:text-blue-450" strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-zinc-950/80 flex gap-4 sticky bottom-0 backdrop-blur-md">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repo
                </a>
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
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
