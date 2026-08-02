import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function About() {
  const facts = [
    {
      num: '01',
      title: 'Academic Foundation',
      description: 'Currently pursuing MCA at VRIT (JNTUK, 2024-2026). Graduated B.Sc. with a 9.2 CGPA from Sir C.R. Reddy College, establishing strong database and logic fundamentals.',
    },
    {
      num: '02',
      title: 'Relocatable / Remote',
      description: 'Based in Naguladevunipadu, India. Prepared for remote team workflows, structured collaboration, or relocating to development hubs.',
    },
    {
      num: '03',
      title: 'Design-Code Union',
      description: 'Certified in graphic design. I bridge backend system logic (Python/Flask) with visually cohesive layouts and fluid interactive transitions.',
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden px-6 md:px-12 border-t border-zinc-200/40 dark:border-zinc-850 bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading - Swiss Minimal Brandbook */}
        <div className="w-full flex items-baseline justify-between mb-20 border-b border-zinc-200/40 dark:border-zinc-850 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
            01 // ABOUT
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight text-3xl text-zinc-900 dark:text-white">
            Philosophy & Background
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Narrative (Spans 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-zinc-650 dark:text-zinc-300 text-base md:text-lg leading-relaxed font-sans"
          >
            {/* Bold Lead Statement */}
            <p className="font-display italic text-3xl text-zinc-900 dark:text-white leading-tight font-light">
              “I believe in writing code that is as secure and reliable as it is visually precise.”
            </p>
            
            <p>
              I am Jagadeesh Veeranki, a Master of Computer Applications (MCA) student at Varaprasad Reddy Institute of Technology (VRIT), Guntur. I specialize in building backend web structures with Python and Flask, planning structured relational databases, and designing intuitive frontends.
            </p>

            <p>
              My coding journey focuses on building applications that solve real-world problems. Whether designing multi-blueprint Flask web dashboards with airtight security controls (bcrypt, custom CAPTCHA, rate-limiting) or coding desktop task managers with active background reminder daemons, I prioritize clean, secure code and premium usability.
            </p>

            <p>
              Complementing my technical capabilities is a certified background in Graphic Design. This allows me to approach development from a visual standpoint—designing clean grids, respecting whitespace, and incorporating micro-interactions that elevate user experiences from ordinary to crafted.
            </p>
            
            <div className="pt-6 flex items-center gap-3 text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              <Heart className="h-3.5 w-3.5 text-primary-505 dark:text-primary-300 animate-pulse fill-primary-505/20" />
              <span>Adaptable · Detail-Oriented · Creative</span>
            </div>
          </motion.div>

          {/* Right Column: Typographic Fact Cards (Spans 5) */}
          <div className="lg:col-span-5 space-y-6">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ 
                  borderRadius: "20px 8px 20px 8px", 
                  scale: 1.025,
                  y: -4,
                  borderColor: 'rgba(197, 168, 128, 0.4)',
                  transition: { type: 'spring', stiffness: 400, damping: 12 }
                }}
                className="glass-card p-6 flex flex-col gap-4 border border-zinc-200/40 dark:border-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 shadow-sm cursor-pointer select-none origin-center"
              >
                <div className="flex items-baseline justify-between border-b border-zinc-250/20 dark:border-zinc-800/40 pb-2">
                  <span className="font-display text-2xl font-semibold text-primary-505 dark:text-primary-300">
                    {fact.num}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">
                    FACT SHEET
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-zinc-909 dark:text-white mb-2 leading-tight">
                    {fact.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                    {fact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
