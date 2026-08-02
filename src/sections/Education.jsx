import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import MorphingBackground from '../components/MorphingBackground';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Varaprasad Reddy Institute of Technology, Kantepudi',
    affiliation: 'Jawaharlal Nehru Technological University Kakinada (JNTUK)',
    duration: '2024 - 2026',
    grade: 'Pursuing',
    details: 'Diving deep into advanced computer application paradigms, database architecture, design patterns, computer networks, and full-stack development methodologies.',
    current: true
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    institution: 'Sir C.R. Reddy College (Autonomous), Eluru',
    affiliation: 'Adikavi Nannaya University',
    duration: '2021 - 2024',
    grade: 'CGPA 9.2',
    details: 'Focused on Computer Science, Mathematics, and Physics. Graduated with honors, demonstrating high academic aptitude and coding fundamentals.',
    current: false
  },
  {
    degree: 'Intermediate Education (MPC)',
    institution: 'NRI Junior College, Eluru',
    affiliation: 'Board of Intermediate Education, AP',
    duration: '2019 - 2021',
    grade: '8.2% (82%)',
    details: 'Concentrated in Mathematics, Physics, and Chemistry (MPC) to establish strong mathematical and analytical problem-solving skills.',
    current: false
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Vidyanilayam High School, Vidyanagar',
    affiliation: 'Board of Secondary Education, AP',
    duration: '2018 - 2019',
    grade: '8.8% (88%)',
    details: 'Successfully completed foundation courses with high distinction in Mathematics and Science.',
    current: false
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden px-6 md:px-12 bg-transparent border-t border-zinc-200/50 dark:border-zinc-800/40">
      {/* Morphing Liquid Blobs Background */}
      <MorphingBackground colorTheme="graphite" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            04 // ACADEMICS
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Education Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-32 space-y-12">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              
              {/* Year label (visible on desktop) */}
              <div className="absolute -left-8 md:-left-32 top-1 text-xs md:text-sm font-bold text-zinc-400 dark:text-zinc-500 w-24 text-left md:text-right hidden md:block select-none">
                {item.duration}
              </div>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, type: 'spring' }}
                className={`absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center ${
                  item.current
                    ? 'bg-blue-500 border-blue-100 dark:border-zinc-900 shadow-md shadow-blue-500/30'
                    : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.current ? 'bg-white' : 'bg-zinc-400 dark:bg-zinc-500'}`} />
              </motion.div>

              {/* Detail Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  borderRadius: "20px 8px 20px 8px", 
                  scale: 1.015,
                  y: -3,
                  transition: { type: 'spring', stiffness: 350, damping: 15 }
                }}
                className={`glass-card p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer select-none origin-center ${
                  item.current
                    ? 'border-blue-500/20 dark:border-blue-500/30 bg-blue-500/[0.02] dark:bg-blue-500/[0.01]'
                    : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    {/* Mobile year badge */}
                    <span className="inline-flex md:hidden items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <h3 className="font-display font-bold text-lg md:text-xl text-zinc-900 dark:text-white leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-start md:self-center">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${
                      item.current
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 dark:border-blue-500/30'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200/50 dark:border-zinc-850'
                    }`}>
                      <Award className="h-3.5 w-3.5" />
                      {item.grade}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-355 text-sm leading-relaxed mb-3">
                  {item.details}
                </p>

                <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium font-mono">
                  Affiliation: {item.affiliation}
                </div>

              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
