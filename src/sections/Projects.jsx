import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Check, Server, Monitor, Layers } from 'lucide-react';
import LiquidButton from '../components/LiquidButton';

const projects = [
  {
    id: 1,
    title: 'Expense Tracker (Web App)',
    tagline: 'Multi-user personal finance management platform',
    summary: 'Built a full-stack, multi-user personal finance web application with secure authentication, multi-currency tracking across 8 currencies, and category-budgeting with automatic alerts.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'Flask-Login', 'Bootstrap 5', 'Chart.js', 'SQLite', 'Docker'],
    architecture: 'Application Factory pattern with 5 Flask Blueprints (auth, dashboard, expenses, reports, API).',
    features: [
      'Live analytics dashboard with animated stat counters and Chart.js visualizations (Doughnut, Bar, Line charts).',
      'Multi-format data export/import: styled Excel (OpenPyXL), branded PDF reports (FPDF2), and CSV.',
      'Google-style multi-account session switcher supporting up to 5 concurrent accounts.',
      'Full JSON REST API (CRUD endpoints) alongside server-rendered views.',
      'Light/dark theme with custom design-token CSS system and glassmorphism UI.',
      'Containerized with a multi-stage Dockerfile and served via Gunicorn for production.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Expense-Tracker/#/landing',
    githubLink: 'https://github.com/jagadeeshveeranki36/Expense-Tracker',
    icon: <Server className="h-5 w-5 text-emerald-500 dark:text-emerald-350" />,
    color: 'from-emerald-500/10 to-transparent'
  },
  {
    id: 2,
    title: 'Task Manager (Desktop App)',
    tagline: 'Native desktop app with active background scheduler daemon',
    summary: 'Built a standalone offline-first desktop productivity app whose core differentiator is a genuine background scheduler that actively interrupts the user with an animated, always-on-top popup the instant a task becomes due.',
    tech: ['Python', 'CustomTkinter', 'Tkinter', 'APScheduler', 'SQLite', 'plyer', 'HTML/CSS/JS (web clone)'],
    architecture: 'Standalone local architecture utilizing Python subprocesses and APScheduler background thread, coupled with an isolated companion Web static clone.',
    features: [
      'Background reminder engine (APScheduler) combining exact one-shot jobs with a 5-second polling fallback.',
      'Animated, always-on-top alert popup with live countdown, snooze (60 min), and auto-dismiss progress bar.',
      'Native desktop toast notifications integrated via the plyer library.',
      'Color-coded priority badges (Low/Medium/High), live stats (Total/Pending/Done/Overdue), sorting and filtering.',
      '100% offline, single local SQLite file — no accounts, configurations, or remote servers.',
      'Independent browser-based clone (HTML/CSS/JS + localStorage + Notification API) of the same UI/UX.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Task-Manager/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Task-Manager',
    icon: <Monitor className="h-5 w-5 text-emerald-500 dark:text-emerald-350" />,
    color: 'from-emerald-500/10 to-transparent'
  },
  {
    id: 3,
    title: 'Interactive Motion Portfolio',
    tagline: 'Technical developer portfolio showing motion parameters',
    summary: 'Designed and developed this personal portfolio showcasing advanced motion design principles, a mock terminal component, responsive grid timelines, and credential logbooks.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    architecture: 'Modular React architecture with code-split vendor chunks, custom hooks, and dynamic browser fallbacks.',
    features: [
      'Cinematic preloader overlay curtain with animated percentage loader metrics.',
      'Cassie-style string pull theme toggle with spring bounce and localStorage persistence.',
      'Bento layout grids displaying academic statistics, certifications, and technical skills.',
      'Fully responsive, hardware-accelerated CSS layouts optimized for performance.',
      'Automatic CI/CD deployment pipeline via GitHub Actions and auto-sync file watchers.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Portfolio/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Portfolio',
    icon: <Layers className="h-5 w-5 text-emerald-500 dark:text-emerald-350" />,
    color: 'from-emerald-500/10 to-transparent'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/40 dark:border-zinc-850 bg-transparent">
      {/* Background static glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            03 // PROJECTS
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Selected Projects
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(16, 185, 129, 0.4)',
                transition: { type: 'spring', stiffness: 350, damping: 15 } 
              }}
              className="project-card-container glass-card p-0 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:shadow-lg transition-all duration-300 cursor-pointer select-none relative"
            >
              {/* Header card panel */}
              <div className={`h-24 bg-gradient-to-tr ${project.color} flex items-center justify-between px-6 border-b border-zinc-200/30 dark:border-zinc-800/40 relative overflow-hidden`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center shadow-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-zinc-905 dark:text-white leading-tight">
                      {project.title.split(' (')[0]}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                      {project.title.includes('(') ? '(' + project.title.split(' (')[1] : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6 italic">
                    "{project.tagline}"
                  </p>
                  <p className="text-zinc-650 dark:text-zinc-350 text-xs leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[8.5px] uppercase tracking-wider bg-zinc-105 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-355 px-2 py-0.5 rounded border border-zinc-200/30 dark:border-zinc-800/30"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-[8.5px] uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                        +{project.tech.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* direct Link triggers */}
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-900 dark:text-white border-t border-zinc-205/30 dark:border-zinc-850 pt-4 group-hover:text-emerald-500 transition-colors font-bold">
                    <span>Explore Details</span>
                    <span className="text-emerald-500">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

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
              className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl z-10 flex flex-col font-sans"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-200 dark:border-zinc-800/60 flex items-start justify-between bg-zinc-50/80 dark:bg-zinc-950/80 sticky top-0 backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-150 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="font-display italic text-xs text-emerald-600 dark:text-emerald-450 mt-1">
                      "{selectedProject.tagline}"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded bg-zinc-200 dark:bg-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors border border-zinc-250 dark:border-zinc-800 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 font-bold">
                    Overview
                  </h4>
                  <p className="text-zinc-650 dark:text-zinc-300 text-xs md:text-sm leading-relaxed">
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
                        className="font-mono text-[8.5px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded border border-zinc-200/30 dark:border-zinc-800/30 font-semibold"
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
                  <div className="p-3.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-205/30 dark:border-zinc-850 text-zinc-700 dark:text-zinc-300 text-xs leading-relaxed">
                    <span>{selectedProject.architecture}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 font-bold">
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed">
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                          <Check className="h-2 w-2 text-emerald-600 dark:text-emerald-450" strokeWidth={3.5} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-zinc-950/80 flex gap-4 sticky bottom-0 backdrop-blur-md">
                <LiquidButton
                  href={selectedProject.githubLink}
                  className="btn-secondary flex-1 text-xs py-2.5"
                >
                  <Github className="h-3.5 w-3.5 mr-2" />
                  GitHub Repo
                </LiquidButton>
                <LiquidButton
                  href={selectedProject.demoLink}
                  className="btn-primary flex-1 text-xs py-2.5"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  Live Demo
                </LiquidButton>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
