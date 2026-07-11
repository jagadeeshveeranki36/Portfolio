import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Award, Terminal, Palette, BrainCircuit, Database, Check } from 'lucide-react';

const certifications = [
  {
    title: 'Certification in Python',
    provider: 'OTP Technologies & Pvt Ltd',
    description: 'Comprehensive certification covering procedural programming, object-oriented concepts, and API integration in Python.',
    icon: <Terminal className="h-6 w-6 text-violet-500" />,
    color: 'from-violet-500/10 to-indigo-500/10',
    badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
  },
  {
    title: 'Graphic Designing Course',
    provider: 'Co Skills',
    description: 'Practical training on layouts, visual storytelling, design principles, and modern typography guidelines.',
    icon: <Palette className="h-6 w-6 text-rose-500" />,
    color: 'from-rose-500/10 to-pink-500/10',
    badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
  },
  {
    title: 'Artificial Intelligence Introduction',
    provider: 'Great Learning',
    description: 'Foundational introduction to AI models, machine learning concepts, neural network architectures, and automation.',
    icon: <BrainCircuit className="h-6 w-6 text-indigo-500" />,
    color: 'from-indigo-500/10 to-sky-500/10',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
  },
  {
    title: 'Python for Data Science',
    provider: 'IBM',
    description: 'Introduction to data analysis, cleaning, visualization libraries (Pandas, NumPy, Matplotlib) using Jupyter notebooks.',
    icon: <Database className="h-6 w-6 text-amber-500" />,
    color: 'from-amber-500/10 to-orange-500/10',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
  },
  {
    title: 'Workshop on Python & its Applications',
    provider: 'APSDC',
    description: 'Hands-on practical workshop exploring local script scripting, background engines, automation, and real-world deployment cases.',
    icon: <Award className="h-6 w-6 text-emerald-500" />,
    color: 'from-emerald-500/10 to-teal-500/10',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  }
];

export default function Certifications() {
  const triggerConfetti = (e) => {
    // Get mouse position relative to window for confetti launch source
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ['#8b5cf6', '#6366f1', '#a78bfa', '#f43f5e', '#10b981'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden px-6 md:px-12 bg-transparent">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
          >
            My Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Certifications & Workshops
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 italic">
            Click on any credential card to celebrate!
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={triggerConfetti}
              className="glass-card glass-card-hover p-6 flex flex-col justify-between cursor-pointer group select-none relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-300 pointer-events-none`} />

              <div>
                {/* Header Icon & Provider */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-lightbg-base dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    {cert.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-current/10 ${cert.badgeColor}`}>
                    {cert.provider}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-white group-hover:text-primary-500 transition-colors duration-300 leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 border-t border-lightbg-border dark:border-darkbg-border pt-4">
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </div>
                Verified Credential
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
