import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

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
    <section id="education" className="py-24 relative overflow-hidden px-6 md:px-12 bg-slate-500/5">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Education Timeline
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              
              {/* Year label (visible on desktop) */}
              <div className="absolute -left-8 md:-left-32 top-1 text-xs md:text-sm font-bold text-slate-400 dark:text-slate-500 w-24 text-left md:text-right hidden md:block select-none">
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
                    ? 'bg-primary-500 border-primary-100 dark:border-primary-950 shadow-md shadow-primary-500/30'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.current ? 'bg-white' : 'bg-slate-400 dark:bg-slate-500'}`} />
              </motion.div>

              {/* Detail Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${
                  item.current
                    ? 'border-primary-500/20 dark:border-primary-500/30 bg-primary-500/[0.02] dark:bg-primary-500/[0.01]'
                    : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    {/* Mobile year badge */}
                    <span className="inline-flex md:hidden items-center gap-1.5 text-xs font-bold text-primary-500 mb-2">
                      <Calendar className="h-3 w-3" />
                      {item.duration}
                    </span>
                    <h3 className="font-display font-bold text-lg md:text-xl text-slate-800 dark:text-white leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-start md:self-center">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${
                      item.current
                        ? 'bg-primary-500/10 text-primary-500 border-primary-500/20 dark:border-primary-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-lightbg-border dark:border-darkbg-border'
                    }`}>
                      <Award className="h-3.5 w-3.5" />
                      {item.grade}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-3">
                  {item.details}
                </p>

                <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
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
