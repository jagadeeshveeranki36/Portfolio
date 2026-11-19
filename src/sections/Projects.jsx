import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Check, Server, Monitor, Layers } from 'lucide-react';
import MorphingBackground from '../components/MorphingBackground';
import LiquidButton from '../components/LiquidButton';

const projects = [
  {
    id: 1,
    title: 'Expense Tracker (Java Full-Stack Web App)',
    tagline: 'Enterprise personal finance management platform built with Spring Boot & React',
    summary: 'Architected and built a comprehensive full-stack multi-user personal finance platform featuring stateless JWT authentication, multi-currency ledger tracking across 8 currencies, and automated budget analytics.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate / JPA', 'MySQL', 'React', 'REST APIs', 'Docker', 'Maven'],
    architecture: 'Layered Enterprise Architecture with Spring Boot REST Controllers, Service Layer, Spring Data Repositories, and JWT stateless authentication.',
    features: [
      'Stateless authentication & role-based access control (RBAC) with Spring Security, BCrypt password hashing, and JWT tokens.',
      'Dynamic React analytics dashboard with animated stat counters, interactive charts (Chart.js), and real-time expense threshold triggers.',
      'Multi-format data export & reporting pipeline: structured Excel spreadsheets and branded PDF statements.',
      'Robust relational schema mapped via Hibernate ORM and Spring Data JPA with transactional consistency.',
      'Complete RESTful API specifications with request validation, global exception handlers, and structured HTTP error responses.',
      'Containerized with multi-stage Docker builds and automated Maven dependency management.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Expense-Tracker/#/landing',
    githubLink: 'https://github.com/jagadeeshveeranki36/Expense-Tracker',
    icon: <Server className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    color: 'from-sky-500/15 dark:from-sky-500/30 to-transparent'
  },
  {
    id: 2,
    title: 'Task Manager (Full-Stack & Productivity Engine)',
    tagline: 'A robust task scheduler and workflow management application',
    summary: 'Engineered a full-featured task and workflow manager combining a reliable background scheduling engine with instant user notifications, priority pipelines, and offline-first state synchronization.',
    tech: ['Java', 'Spring Boot', 'Spring Task Scheduler', 'Hibernate', 'SQLite / MySQL', 'React', 'Tailwind CSS'],
    architecture: 'Decoupled full-stack architecture utilizing Spring @Scheduled background task daemons, transactional persistence, and a companion responsive web interface.',
    features: [
      'High-precision background scheduling engine utilizing Spring Task Scheduler with automated job monitoring.',
      'Interactive alert notifications with live countdowns, snooze options, and instant status updates.',
      'Color-coded priority matrix (Low/Medium/High), live status metrics (Total/Pending/Done/Overdue), and multi-criteria filtering.',
      'Optimized relational data models with clean entity relationships, cascade operations, and indexed queries.',
      'Responsive, modern UI built with React and Tailwind CSS featuring instant client-side state caching.',
      'Full offline-first reliability and isolated local data persistence.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Task-Manager/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Task-Manager',
    icon: <Monitor className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    color: 'from-emerald-500/15 dark:from-emerald-500/30 to-transparent'
  },
  {
    id: 3,
    title: 'Portfolio',
    tagline: 'An award-winning caliber interactive portfolio',
    summary: 'Designed and developed this personal portfolio showcasing advanced motion design principles, a custom WebGL 3D canvas sphere, magnetic elements, and fluid layout storyboards.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
    architecture: 'Modular React architecture with code-split vendor chunks, custom hooks, and dynamic browser fallbacks.',
    features: [
      'Interactive 3D WebGL wireframe sphere with custom orbit dust particles that tracks mouse coords.',
      'GSAP animations and Framer Motion micro-interactions.',
      'Cassie-style string pull theme toggle with spring bounce and localStorage persistence.',
      'Smooth scroll reveals and kinetic typography reveals.',
      'Automatic CI/CD deployment pipeline via GitHub Actions and auto-sync file watchers.'
    ],
    demoLink: 'https://jagadeeshveeranki36.github.io/Portfolio/',
    githubLink: 'https://github.com/jagadeeshveeranki36/Portfolio',
    icon: <Layers className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    color: 'from-purple-500/15 dark:from-purple-500/30 to-transparent'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/40 dark:border-zinc-850 bg-transparent"
    >
      {/* Morphing Liquid Blobs Background */}
      <MorphingBackground colorTheme="blue" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Projects
          </h2>
        </div>

        {/* Responsive 3-Column Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                borderRadius: "20px 8px 20px 8px", 
                scale: 1.025,
                y: -6,
                borderColor: 'rgba(56, 189, 248, 0.4)',
                transition: { type: 'spring', stiffness: 350, damping: 14 } 
              }}
              className="glass-card glass-card-hover group cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 relative"
            >
              {/* Card Header Panel */}
              <div className={`h-24 bg-gradient-to-tr ${project.color} flex items-center justify-between px-6 border-b border-zinc-200/20 dark:border-zinc-800/35 relative overflow-hidden select-none`}>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center shadow-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white leading-tight">
                      {project.title.split(' (')[0]}
                    </h3>
                    <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-450 dark:text-zinc-500 font-bold">
                      {project.title.includes('(') ? '(' + project.title.split(' (')[1] : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between select-none">
                <div>
                  <h4 className="font-display italic text-sm text-primary-505 dark:text-primary-300 mb-2 font-light">
                    "{project.tagline}"
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[8px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded border border-zinc-200/20 dark:border-zinc-800/20 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="font-mono text-[8px] uppercase tracking-wider bg-primary-505/10 text-primary-505 dark:text-primary-300 px-2 py-0.5 rounded font-bold">
                        +{project.tech.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* Trigger study link */}
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-900 dark:text-white border-t border-zinc-200/30 dark:border-zinc-800/30 pt-4 group-hover:text-primary-505 dark:group-hover:text-primary-300 transition-colors font-bold">
                    <span>Explore Case Study</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              className="fixed inset-0 bg-zinc-955/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="bg-zinc-50 dark:bg-zinc-955 border border-zinc-250 dark:border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col font-sans"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-zinc-200 dark:border-zinc-800/60 flex items-start justify-between bg-zinc-50/80 dark:bg-zinc-955/85 sticky top-0 backdrop-blur-md z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-150 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="font-display italic text-sm text-primary-505 dark:text-primary-300 mt-1">
                      "{selectedProject.tagline}"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors border border-zinc-200/40 dark:border-zinc-800 cursor-pointer"
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
                  <p className="text-zinc-650 dark:text-zinc-300 text-base leading-relaxed">
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
                        className="font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-355 px-2.5 py-1 rounded border border-zinc-200/30 dark:border-zinc-800/30 font-bold"
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
                  <div className="p-4 rounded-xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-705 dark:text-zinc-300 text-sm leading-relaxed flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary-505 dark:text-primary-300 flex-shrink-0 mt-0.5" />
                    <span>{selectedProject.architecture}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 font-bold">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                        <div className="w-5 h-5 rounded-full bg-primary-505/10 dark:bg-primary-505/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-505/20">
                          <Check className="h-2.5 w-2.5 text-primary-505 dark:text-primary-300" strokeWidth={3} />
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
                  className="flex-1 btn-secondary"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Repo
                </LiquidButton>
                <LiquidButton
                  href={selectedProject.demoLink}
                  className="btn-primary flex-1 animate-shimmer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
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
