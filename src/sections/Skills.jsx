import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Server, Laptop, Cpu, Heart, Award, GraduationCap, CheckCircle, Check } from 'lucide-react';
import MorphingBackground from '../components/MorphingBackground';

export default function Skills() {
  const coreLanguages = [
    { name: 'Java', icon: <Code className="h-4 w-4 text-primary-505 dark:text-primary-300" /> },
    { name: 'Python', icon: <Terminal className="h-4 w-4 text-primary-505 dark:text-primary-300" /> },
    { name: 'SQL', icon: <Database className="h-4 w-4 text-primary-505 dark:text-primary-300" /> },
    { name: 'HTML5', icon: <Code className="h-4 w-4 text-primary-505 dark:text-primary-300" /> },
    { name: 'CSS3', icon: <Code className="h-4 w-4 text-primary-505 dark:text-primary-300" /> },
    { name: 'JavaScript', icon: <Code className="h-4 w-4 text-primary-505 dark:text-primary-300" /> }
  ];

  const backendSkills = [
    { name: 'Flask Framework' },
    { name: 'Flask-SQLAlchemy' },
    { name: 'Flask-Login (Auth)' },
    { name: 'Flask-Bcrypt (Security)' },
    { name: 'REST API Design' },
    { name: 'SQLite Database' }
  ];

  const toolsSkills = [
    { name: 'CustomTkinter', icon: <Laptop className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> },
    { name: 'APScheduler', icon: <Cpu className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> },
    { name: 'Docker', icon: <Cpu className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> },
    { name: 'Git & GitHub', icon: <Cpu className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> },
    { name: 'OpenPyXL (Excel)', icon: <Cpu className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> },
    { name: 'FPDF2 (PDF)', icon: <Cpu className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300" /> }
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
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const hoverSpring = {
    borderRadius: "20px 8px 20px 8px",
    scale: 1.015,
    y: -4,
    borderColor: 'rgba(56, 189, 248, 0.4)', // Ice Blue
    transition: { type: 'spring', stiffness: 350, damping: 14 }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/40 dark:border-zinc-850 bg-transparent">
      {/* Morphing Liquid Blobs Background (Ice Blue Theme) */}
      <MorphingBackground colorTheme="blue" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Skills
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto max-w-6xl mx-auto font-sans animate-fade-in"
        >
          {/* TILE 1: Core Languages */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-2 p-6 md:p-8 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-pointer select-none origin-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/40">
                  <Terminal className="h-5 w-5 text-primary-505 dark:text-primary-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white leading-none">Core Languages</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-zinc-550 dark:text-zinc-400">Foundation Stack</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {coreLanguages.map((lang) => (
                  <div 
                    key={lang.name} 
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/30 dark:border-zinc-800/40 hover:border-primary-505 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm"
                  >
                    {lang.icon}
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 2: Backend Stack */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-1 p-6 md:p-8 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-pointer select-none origin-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/40">
                  <Server className="h-5 w-5 text-primary-505 dark:text-primary-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white leading-none">Backend Stack</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-zinc-550 dark:text-zinc-400">Frameworks & SQLite</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {backendSkills.map((s) => (
                  <div 
                    key={s.name} 
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/30 dark:border-zinc-800/40 hover:border-primary-505 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 3: Desktop & Tools */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-2 p-6 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-pointer select-none origin-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/40">
                  <Cpu className="h-4.5 w-4.5 text-primary-505 dark:text-primary-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">Desktop GUI & DevOps Tools</h3>
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-zinc-550 dark:text-zinc-400">Utilities & Environment</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {toolsSkills.map((t) => (
                  <div 
                    key={t.name} 
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/30 dark:border-zinc-800/40 hover:border-primary-505 dark:hover:border-primary-400 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm"
                  >
                    {t.icon}
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TILE 4: Stats & Achievements */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-1 p-6 flex flex-col justify-between relative overflow-hidden border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 shadow-sm cursor-pointer select-none origin-center"
          >
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-450 mb-4">
              <Award className="h-5 w-5 text-primary-505 dark:text-primary-300" />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Achievements</span>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <span className="text-3xl font-display font-bold text-zinc-900 dark:text-white leading-none">9.2</span>
                <p className="font-mono text-[8px] font-bold text-zinc-550 dark:text-zinc-400 mt-1.5 uppercase tracking-widest">B.Sc. CGPA Honours</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-display font-bold text-zinc-900 dark:text-white leading-none">5+</span>
                <p className="font-mono text-[8px] font-bold text-zinc-550 dark:text-zinc-400 mt-1.5 uppercase tracking-widest">Certificates</p>
              </div>
            </div>
          </motion.div>

          {/* TILE 5: Academic Focus */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-1 p-6 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 cursor-pointer select-none origin-center"
          >
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-455 mb-4">
              <GraduationCap className="h-5 w-5 text-primary-505 dark:text-primary-300" />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Academic Focus</span>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-white">MCA Candidate</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-455 mt-1 leading-relaxed">Varaprasad Reddy Institute of Technology (2024 - 2026)</p>
            </div>
          </motion.div>

          {/* TILE 6: Soft Skills */}
          <motion.div
            variants={itemVariants}
            whileHover={hoverSpring}
            className="glass-card md:col-span-2 p-6 flex flex-col justify-between border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-850 transition-all duration-300 cursor-pointer select-none origin-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/40">
                  <Heart className="h-4 w-4 text-primary-505 dark:text-primary-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">Professional Strengths</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] font-semibold px-3 py-1 rounded-full border border-zinc-200/40 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-650 dark:text-zinc-350 hover:border-primary-505/20 hover:text-primary-505 transition-all duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Highlight Banner */}
        <div className="mt-16 text-center font-sans">
          <p className="font-mono text-[10px] text-zinc-405 dark:text-zinc-500 flex items-center justify-center gap-1.5 uppercase tracking-wider">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            Certified in Python, Graphic Designing, AI, and Data Science.
          </p>
        </div>

      </div>
    </section>
  );
}
