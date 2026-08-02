import React from 'react';
import { motion } from 'framer-motion';
import { Award, Terminal, Palette, BrainCircuit, Database, Check } from 'lucide-react';

const certifications = [
  {
    title: 'Certification in Python',
    provider: 'OTP Technologies & Pvt Ltd',
    description: 'Comprehensive certification covering procedural programming, object-oriented concepts, and API integration in Python.',
    icon: <Terminal className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    badgeColor: 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
  },
  {
    title: 'Graphic Designing Course',
    provider: 'Co Skills',
    description: 'Practical training on layouts, visual storytelling, design principles, and modern typography guidelines.',
    icon: <Palette className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    badgeColor: 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
  },
  {
    title: 'Artificial Intelligence Introduction',
    provider: 'Great Learning',
    description: 'Foundational introduction to AI models, machine learning concepts, neural network architectures, and automation.',
    icon: <BrainCircuit className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    badgeColor: 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
  },
  {
    title: 'Python for Data Science',
    provider: 'IBM',
    description: 'Introduction to data analysis, cleaning, visualization libraries (Pandas, NumPy, Matplotlib) using Jupyter notebooks.',
    icon: <Database className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    badgeColor: 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
  },
  {
    title: 'Workshop on Python & its Applications',
    provider: 'APSDC',
    description: 'Hands-on practical workshop exploring local script scripting, background engines, automation, and real-world deployment cases.',
    icon: <Award className="h-5 w-5 text-primary-505 dark:text-primary-300" />,
    badgeColor: 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden px-6 md:px-12 bg-transparent border-t border-zinc-200/40 dark:border-zinc-850">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            05 // CREDENTIALS
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Certifications & Workshops
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-sans">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ 
                y: -4,
                borderColor: 'rgba(197, 168, 128, 0.3)',
                transition: { type: 'spring', stiffness: 400, damping: 15 }
              }}
              className="glass-card p-6 flex flex-col justify-between cursor-pointer group select-none relative overflow-hidden border border-zinc-200/40 dark:border-zinc-850 hover:shadow-md transition-all duration-300 origin-center"
            >
              <div>
                {/* Header Icon & Provider */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/40 dark:border-zinc-800/40 shadow-sm flex-shrink-0">
                    {cert.icon}
                  </div>
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-current/10 ${cert.badgeColor}`}>
                    {cert.provider}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-zinc-905 dark:text-white group-hover:text-primary-505 transition-colors duration-300 leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-500 border-t border-zinc-205/30 dark:border-zinc-850 pt-4">
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
