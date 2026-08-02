import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('JV');
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Check sessionStorage to bypass on refreshes
    const hasLoaded = sessionStorage.getItem('portfolio-loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }
    setShouldLoad(true);

    let current = 0;
    const duration = 1200; // 1.2s load duration
    const intervalTime = 12;
    const step = 100 / (duration / intervalTime);

    const textStates = [
      'JV',
      'Python',
      'Flask',
      'Full-Stack',
      'SQLite',
      'Design',
      'Jagadeesh Veeranki'
    ];

    const textInterval = setInterval(() => {
      const idx = Math.floor(Math.random() * textStates.length);
      setText(textStates[idx]);
    }, 150);

    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        setCount(100);
        clearInterval(timer);
        clearInterval(textInterval);
        setText('Jagadeesh Veeranki');
        setTimeout(() => {
          sessionStorage.setItem('portfolio-loaded', 'true');
          onComplete();
        }, 300);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  if (!shouldLoad) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-[#06090f] z-[99999] flex flex-col items-center justify-between p-12 select-none"
      exit={{
        y: '-100%',
        transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Background noise grid */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      
      {/* Top logo identifier */}
      <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase z-10">
        JV Portfolio // 2026
      </div>

      {/* Center scrambling word with custom logo */}
      <div className="text-center z-10 flex flex-col items-center gap-4">
        <Logo className="w-16 h-16 animate-pulse" />
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight"
          key={text}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {text}
        </motion.h1>
      </div>

      {/* Bottom loading bar & progress */}
      <div className="w-full max-w-md flex flex-col gap-3.5 z-10">
        <div className="flex justify-between items-end">
          <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Initializing Canvas</span>
          <span className="text-2xl md:text-3xl font-display font-bold text-primary-500">{count}%</span>
        </div>
        <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
