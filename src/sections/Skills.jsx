import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Code, Server, Laptop, Palette, Cpu, Heart, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'core', name: 'Core & Languages' },
  { id: 'backend', name: 'Backend & DB' },
  { id: 'frontend', name: 'Frontend & UI' },
  { id: 'desktop', name: 'Desktop & Tools' },
  { id: 'soft', name: 'Soft Skills' }
];

const skills = [
  // Languages & Core
  { name: 'Python', category: 'core', level: 'Expert', percentage: 95, icon: <Terminal className="h-4 w-4 text-violet-500" /> },
  { name: 'HTML5', category: 'core', level: 'Expert', percentage: 90, icon: <Code className="h-4 w-4 text-orange-500" /> },
  { name: 'CSS3', category: 'core', level: 'Advanced', percentage: 85, icon: <Code className="h-4 w-4 text-blue-500" /> },
  { name: 'JavaScript (ES6)', category: 'core', level: 'Advanced', percentage: 80, icon: <Code className="h-4 w-4 text-amber-500" /> },
  { name: 'SQL', category: 'core', level: 'Advanced', percentage: 85, icon: <Database className="h-4 w-4 text-emerald-500" /> },

  // Backend
  { name: 'Flask Framework', category: 'backend', level: 'Expert', percentage: 92, icon: <Server className="h-4 w-4 text-sky-500" /> },
  { name: 'Flask-SQLAlchemy', category: 'backend', level: 'Expert', percentage: 90, icon: <Database className="h-4 w-4 text-emerald-600" /> },
  { name: 'Flask-Login (Auth)', category: 'backend', level: 'Advanced', percentage: 85, icon: <Server className="h-4 w-4 text-indigo-500" /> },
  { name: 'Flask-WTF & Validation', category: 'backend', level: 'Advanced', percentage: 80, icon: <Server className="h-4 w-4 text-violet-400" /> },
  { name: 'Flask-Bcrypt (Security)', category: 'backend', level: 'Advanced', percentage: 88, icon: <Server className="h-4 w-4 text-rose-500" /> },
  { name: 'Flask-Migrate', category: 'backend', level: 'Advanced', percentage: 80, icon: <Server className="h-4 w-4 text-pink-500" /> },
  { name: 'Flask-CORS', category: 'backend', level: 'Advanced', percentage: 82, icon: <Server className="h-4 w-4 text-sky-400" /> },
  { name: 'REST API Design', category: 'backend', level: 'Advanced', percentage: 85, icon: <Server className="h-4 w-4 text-cyan-500" /> },
  { name: 'SQLite', category: 'backend', level: 'Expert', percentage: 88, icon: <Database className="h-4 w-4 text-blue-400" /> },
  { name: 'Relational Design', category: 'backend', level: 'Advanced', percentage: 85, icon: <Database className="h-4 w-4 text-teal-500" /> },

  // Frontend & UI
  { name: 'Bootstrap 5', category: 'frontend', level: 'Advanced', percentage: 85, icon: <Laptop className="h-4 w-4 text-purple-600" /> },
  { name: 'Vanilla JS DOM', category: 'frontend', level: 'Advanced', percentage: 82, icon: <Laptop className="h-4 w-4 text-amber-500" /> },
  { name: 'Chart.js Visuals', category: 'frontend', level: 'Advanced', percentage: 80, icon: <Laptop className="h-4 w-4 text-rose-400" /> },
  { name: 'Responsive Layouts', category: 'frontend', level: 'Expert', percentage: 90, icon: <Laptop className="h-4 w-4 text-indigo-400" /> },
  { name: 'Graphic Designing', category: 'frontend', level: 'Certified', percentage: 85, icon: <Palette className="h-4 w-4 text-violet-500" /> },

  // Desktop & Tools
  { name: 'CustomTkinter / Tkinter', category: 'desktop', level: 'Expert', percentage: 95, icon: <Laptop className="h-4 w-4 text-teal-400" /> },
  { name: 'APScheduler Engine', category: 'desktop', level: 'Advanced', percentage: 85, icon: <Cpu className="h-4 w-4 text-pink-500" /> },
  { name: 'Docker Containers', category: 'desktop', level: 'Advanced', percentage: 80, icon: <Cpu className="h-4 w-4 text-blue-500" /> },
  { name: 'Gunicorn Production', category: 'desktop', level: 'Intermediate', percentage: 75, icon: <Cpu className="h-4 w-4 text-indigo-600" /> },
  { name: 'Git & GitHub', category: 'desktop', level: 'Advanced', percentage: 85, icon: <Cpu className="h-4 w-4 text-slate-800 dark:text-slate-200" /> },
  { name: 'python-dotenv', category: 'desktop', level: 'Advanced', percentage: 90, icon: <Cpu className="h-4 w-4 text-yellow-500" /> },
  { name: 'OpenPyXL (Excel)', category: 'desktop', level: 'Advanced', percentage: 82, icon: <Cpu className="h-4 w-4 text-emerald-500" /> },
  { name: 'FPDF2 (PDF Reports)', category: 'desktop', level: 'Advanced', percentage: 80, icon: <Cpu className="h-4 w-4 text-red-500" /> },

  // Soft Skills
  { name: 'Adaptability & Flexibility', category: 'soft', level: 'Expert', percentage: 95, icon: <Heart className="h-4 w-4 text-pink-500" /> },
  { name: 'Attention to Detail', category: 'soft', level: 'Expert', percentage: 95, icon: <Heart className="h-4 w-4 text-violet-500" /> },
  { name: 'Decision-Making', category: 'soft', level: 'Advanced', percentage: 88, icon: <Heart className="h-4 w-4 text-sky-500" /> },
  { name: 'Effective Communication', category: 'soft', level: 'Expert', percentage: 92, icon: <Heart className="h-4 w-4 text-indigo-500" /> },
  { name: 'Creativity & Innovation', category: 'soft', level: 'Expert', percentage: 90, icon: <Heart className="h-4 w-4 text-amber-500" /> }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 md:px-12 bg-transparent">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/5 dark:bg-violet-600/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Skills & Toolkit
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 bg-white/20 dark:bg-slate-900/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-lightbg-border dark:border-darkbg-border'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full -z-10 shadow-md shadow-violet-500/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card glass-card-hover p-5 flex flex-col justify-between hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-lightbg-base dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-display font-semibold text-sm text-slate-800 dark:text-slate-100 leading-snug">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-500 dark:text-primary-400 bg-primary-500/5 px-2 py-0.5 rounded-full border border-primary-500/10">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 mb-1.5">
                    <span>Proficiency</span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-lightbg-base dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Legend / Certifications Hook */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Certified in Python, Graphic Designing, and Data Science. Scroll down to Certifications to see more.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
