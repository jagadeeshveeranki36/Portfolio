import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Sparkles, Heart } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <BookOpen className="h-5 w-5 text-violet-500" />,
      title: 'Education Focus',
      description: 'Currently pursuing MCA. Solid background in Computer Applications & relational databases.',
    },
    {
      icon: <MapPin className="h-5 w-5 text-indigo-500" />,
      title: 'Location',
      description: 'Based in Naguladevunipadu, India. Ready to work remotely or relocate.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: 'Core Philosophy',
      description: 'Creating secure, accessible, and high-performance digital tools with clean code.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6 md:px-12 bg-slate-500/5">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2"
          >
            Get To Know Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-slate-600 dark:text-slate-300 space-y-6 text-base md:text-lg leading-relaxed"
          >
            <h3 className="text-2xl font-display font-semibold text-slate-800 dark:text-white mb-2 text-center lg:text-left">
              Crafting solutions at the intersection of <span className="text-primary-500 font-bold">Python</span> and <span className="text-primary-500 font-bold">Full-Stack Dev</span>.
            </h3>
            
            <p>
              I am Jagadeesh Veeranki, an adaptable and detail-oriented Computer Applications student and developer based in Naguladevunipadu, India. Currently pursuing my Master of Computer Applications (MCA) at VRIT (JNTUK) with a strong academic foundation (9.2 CGPA from my B.Sc. studies), I specialize in building secure full-stack web applications and robust Python utilities.
            </p>

            <p>
              My coding journey focuses on building applications that solve real-world problems. Whether designing multi-blueprint Flask web dashboards with airtight security controls (bcrypt, custom CAPTCHA, rate-limiting) or coding desktop task managers with active background reminder daemons, I prioritize clean, secure code and premium usability.
            </p>

            <p>
              As a certified Graphic Designer, I also bring a keen eye for layouts, animations, and visual harmony. I thrive in collaborative environments where communication, problem-solving, and attention to detail are key to shipping successful projects.
            </p>
            
            <div className="pt-4 flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
              <span>Adaptable · Detail-Oriented · Creative</span>
            </div>
          </motion.div>

          {/* Right Column: Grid Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 flex gap-4 hover:border-primary-500/25 dark:hover:border-primary-500/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 dark:bg-primary-500/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                    {card.description}
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
