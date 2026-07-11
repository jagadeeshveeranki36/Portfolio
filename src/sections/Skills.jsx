import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Server, Laptop, Palette, Cpu, Heart, Award, GraduationCap, CheckCircle } from 'lucide-react';

export default function Skills() {
  const coreLanguages = [
    { name: 'Python', level: 'Expert', percentage: 95, icon: <Terminal className="h-4 w-4 text-violet-500" /> },
    { name: 'SQL', level: 'Advanced', percentage: 85, icon: <Database className="h-4 w-4 text-emerald-500" /> },
    { name: 'HTML5', level: 'Expert', percentage: 90, icon: <Code className="h-4 w-4 text-orange-500" /> },
    { name: 'CSS3', level: 'Advanced', percentage: 85, icon: <Code className="h-4 w-4 text-blue-500" /> },
    { name: 'JavaScript', level: 'Advanced', percentage: 80, icon: <Code className="h-4 w-4 text-amber-500" /> }
  ];

  const backendSkills = [
    { name: 'Flask Framework', level: 'Expert' },
    { name: 'Flask-SQLAlchemy', level: 'Expert' },
    { name: 'Flask-Login (Auth)', level: 'Advanced' },
    { name: 'Flask-Bcrypt (Security)', level: 'Advanced' },
    { name: 'REST API Design', level: 'Advanced' },
    { name: 'SQLite DB', level: 'Expert' }
  ];

  const toolsSkills = [
    { name: 'CustomTkinter', icon: <Laptop className="h-3.5 w-3.5 text-teal-400" /> },
    { name: 'APScheduler', icon: <Cpu className="h-3.5 w-3.5 text-pink-500" /> },
    { name: 'Docker', icon: <Cpu className="h-3.5 w-3.5 text-blue-500" /> },
    { name: 'Git & GitHub', icon: <Cpu className="h-3.5 w-3.5 text-slate-400" /> },
    { name: 'OpenPyXL (Excel)', icon: <Cpu className="h-3.5 w-3.5 text-emerald-500" /> },
    { name: 'FPDF2 (PDF)', icon: <Cpu className="h-3.5 w-3.5 text-red-500" /> }
  ];

  const softSkills = [
    'Adaptability & Flexibility',
    'Attention to Detail',
    'Decision-Making',
    'Effective Communication',
    'Creativity & Innovation'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 md:px-12 bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 dark:bg-violet-600/3 blur-[120px] rounded-full pointer-events-none" />

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
            Skills Bento Grid
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[230px] max-w-6xl mx-auto"
        >
          {/* TILE 1: Core Languages (Large - col-span-2, row-span-2) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.3)' }}
            className="glass-card md:col-span-2 md:row-span-2 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-none">Core Languages</h3>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500">Foundation Stack</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {coreLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        {lang.icon}
                        {lang.name}
                      </span>
                      <span className="text-xs font-bold text-primary-500">{lang.level} ({lang.percentage}%)</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 2: Backend Stack (Medium - col-span-1, row-span-2) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            className="glass-card md:col-span-1 md:row-span-2 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-none">Backend Stack</h3>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500">Frameworks & Database</span>
                </div>
              </div>

              <div className="space-y-3">
                {backendSkills.map((s) => (
                  <div key={s.name} className="flex items-center justify-between border-b border-lightbg-border dark:border-darkbg-border/60 pb-2 last:border-0 last:pb-0">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-350">{s.name}</span>
                    <span className="text-[10px] font-bold text-primary-500 bg-primary-500/5 dark:bg-primary-500/10 px-2 py-0.5 rounded-full border border-primary-500/10">
                      {s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 3: Desktop & Tools (Medium - col-span-2, row-span-1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(236, 72, 153, 0.3)' }}
            className="glass-card md:col-span-2 md:row-span-1 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center">
                  <Cpu className="h-4.5 w-4.5 text-pink-500" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-white">Desktop GUI & DevOps Tools</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toolsSkills.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-lightbg-border dark:border-darkbg-border hover:border-primary-500/20 transition-colors">
                    <div className="w-6 h-6 rounded bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                      {t.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate">{t.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 4: Stats & Achievements (Small - col-span-1, row-span-1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(245, 158, 11, 0.3)' }}
            className="glass-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full pointer-events-none" />
            <div className="flex items-center gap-2 text-amber-500 mb-3">
              <Award className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Achievements</span>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-display font-extrabold text-slate-800 dark:text-white leading-none">9.2</span>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">B.Sc. CGPA Honours</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-display font-extrabold text-slate-800 dark:text-white leading-none">5+</span>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">Certificates</p>
              </div>
            </div>
          </motion.div>

          {/* TILE 5: Education Current (Small - col-span-1, row-span-1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(16, 185, 129, 0.3)' }}
            className="glass-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-emerald-500 mb-3">
              <GraduationCap className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Academic Focus</span>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white">MCA Candidate</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">Varaprasad Reddy Institute of Technology (2024 - 2026)</p>
            </div>
          </motion.div>

          {/* TILE 6: Soft Skills (Medium - col-span-2, row-span-1) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.3)' }}
            className="glass-card md:col-span-2 md:row-span-1 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-500">
                  <Heart className="h-4 w-4" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-white">Professional Strengths</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-lightbg-border dark:border-darkbg-border/60 bg-white/40 dark:bg-slate-900/40 text-slate-650 dark:text-slate-300 hover:border-primary-500/20 hover:text-primary-500 transition-all duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Highlight Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            Certified in Python, Graphic Designing, AI, and Data Science. Hover over Bento tiles to explore properties.
          </p>
        </div>

      </div>
    </section>
  );
}
