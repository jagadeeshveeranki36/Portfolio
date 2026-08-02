import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Varaprasad Reddy Institute of Technology, Kantepudi',
    affiliation: 'Jawaharlal Nehru Technological University Kakinada (JNTUK)',
    duration: '2024 - 2026',
    grade: 'Pursuing',
    details: 'Focusing on advanced computer application paradigms, database systems, architecture, design patterns, computer networks, and full-stack development methodologies.',
    current: true
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    institution: 'Sir C.R. Reddy College (Autonomous), Eluru',
    affiliation: 'Adikavi Nannaya University',
    duration: '2021 - 2024',
    grade: 'CGPA 9.2',
    details: 'Concentrated in Computer Science, Mathematics, and Physics. Graduated with honors, establishing core logic structures and algorithms.',
    current: false
  },
  {
    degree: 'Intermediate Education (MPC)',
    institution: 'NRI Junior College, Eluru',
    affiliation: 'Board of Intermediate Education, AP',
    duration: '2019 - 2021',
    grade: '8.2% (82%)',
    details: 'Completed foundational coursework in Mathematics, Physics, and Chemistry (MPC) to establish strong mathematical capabilities.',
    current: false
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Vidyanilayam High School, Vidyanagar',
    affiliation: 'Board of Secondary Education, AP',
    duration: '2018 - 2019',
    grade: '8.8% (88%)',
    details: 'Completed general education with high distinction in Mathematics and Science disciplines.',
    current: false
  }
];

export default function Education() {
  const containerRef = useRef(null);

  // Track vertical scroll position progress of the education section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const scrollLineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      id="education" 
      className="py-32 relative overflow-hidden px-6 md:px-12 bg-transparent border-t border-zinc-200/40 dark:border-zinc-850"
    >
      <div className="max-w-5xl mx-auto relative z-10 pl-6 md:pl-10">
        
        {/* Scroll-scrubbed vertical timeline path line */}
        <div className="absolute left-0 top-[220px] bottom-0 w-[1.5px] bg-zinc-200 dark:bg-zinc-800">
          <motion.div 
            className="w-full bg-primary-505 dark:bg-primary-400 origin-top h-full"
            style={{ scaleY: scrollLineScale }}
          />
        </div>

        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            04 // ACADEMICS
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Education Timeline
          </h2>
        </div>

        {/* Split Timeline List */}
        <div className="space-y-16">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start border-b border-zinc-205/30 dark:border-zinc-850 pb-12 last:border-0 last:pb-0 relative"
            >
              {/* Left Column: Duration & Institution (cols 4) */}
              <div className="md:col-span-4 flex flex-col gap-1.5 select-none">
                <span className="font-mono text-xs font-bold text-primary-505 dark:text-primary-300">
                  {item.duration}
                </span>
                <span className="text-base font-bold text-zinc-900 dark:text-white leading-tight">
                  {item.institution}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                  {item.affiliation.split(' (')[0]}
                </span>
              </div>

              {/* Right Column: Degree & GPA & Description (cols 8) */}
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display font-bold text-xl text-zinc-905 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  <span className={`inline-flex items-center self-start sm:self-auto gap-1 text-[9.5px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-current/15 ${
                    item.current
                      ? 'bg-primary-505/10 text-primary-605 dark:text-primary-300'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400'
                  }`}>
                    {item.grade}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
