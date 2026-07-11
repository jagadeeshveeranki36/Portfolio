import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Check, Server, Shield, Monitor, FileSpreadsheet, Layers, BellRing, Settings } from 'lucide-react';

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
    demoLink: 'https://github.com',
    githubLink: 'https://github.com',
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
    demoLink: 'https://github.com',
    githubLink: 'https://github.com',
    icon: <Monitor className="h-6 w-6 text-indigo-500" />,
    color: 'from-indigo-600/10 to-sky-500/10'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6 md:px-12 bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card glass-card-hover flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header Background Gradient */}
              <div className={`h-32 bg-gradient-to-tr ${project.color} flex items-center justify-between px-6 border-b border-lightbg-border dark:border-darkbg-border relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 dark:bg-black/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      {project.title.split(' (')[0]}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {project.title.includes('(') ? '(' + project.title.split(' (')[1] : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-sm text-primary-500 mb-2 italic">
                    "{project.tagline}"
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] font-semibold bg-primary-500/10 text-primary-500 dark:text-primary-400 px-2 py-0.5 rounded-md">
                        +{project.tech.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* Trigger Case Study Action */}
                  <div className="flex items-center justify-between text-sm font-semibold text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    <span>Read Case Study</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Modal Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="bg-lightbg-base dark:bg-darkbg-base border border-lightbg-border dark:border-darkbg-border rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 md:p-8 border-b border-lightbg-border dark:border-darkbg-border flex items-start justify-between bg-white/20 dark:bg-slate-900/20 sticky top-0 backdrop-blur-md z-20">
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
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Summary */}
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Overview
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      {selectedProject.summary}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
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

                  {/* Architecture */}
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Architecture & Patterns
                    </h4>
                    <div className="p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-lightbg-border dark:border-darkbg-border text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2.5">
                      <Layers className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span>{selectedProject.architecture}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                            <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer (Action links) */}
                <div className="p-6 border-t border-lightbg-border dark:border-darkbg-border bg-white/20 dark:bg-slate-900/20 flex gap-4 sticky bottom-0 backdrop-blur-md">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-xl border border-lightbg-border dark:border-darkbg-border bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repo
                  </a>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold shadow-lg shadow-primary-500/10 transition-colors flex items-center justify-center gap-2"
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
    </section>
  );
}
