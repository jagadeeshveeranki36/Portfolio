import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  const controls = useAnimation();
  const [isPulling, setIsPulling] = useState(false);

  const handlePull = async () => {
    if (isPulling) return;
    setIsPulling(true);
    
    // Simulate physics-based pull-down
    await controls.start({
      y: 16,
      transition: { type: 'spring', stiffness: 350, damping: 9 }
    });
    
    // Trigger theme swap at maximum displacement
    toggleTheme();

    // Release string and bounce back up
    await controls.start({
      y: 0,
      transition: { type: 'spring', stiffness: 450, damping: 14 }
    });
    setIsPulling(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-start h-20 w-10 z-50 group pt-2.5 pointer-events-auto">
      {/* Hanging string container */}
      <motion.div
        animate={controls}
        onClick={handlePull}
        className="cursor-pointer flex flex-col items-center origin-top relative select-none magnetic"
        style={{ y: 0 }}
        title="Pull to toggle theme"
      >
        {/* Cord line */}
        <div className="w-[1.5px] h-10 bg-slate-400 dark:bg-slate-600 group-hover:bg-primary-500 transition-colors" />
        
        {/* Pull handle bead/ring */}
        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900 group-hover:border-primary-500 group-hover:bg-primary-500/20 shadow-md transition-all duration-300 -mt-[1px] flex items-center justify-center">
          {/* Inner core */}
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-primary-500 transition-colors" />
        </div>

        {/* Ambient halo glow under the cord string knob in dark mode */}
        {theme === 'dark' && (
          <div className="absolute top-10 w-4 h-4 bg-amber-400/25 rounded-full filter blur-[3px] pointer-events-none group-hover:scale-150 transition-transform duration-300" />
        )}
      </motion.div>
    </div>
  );
}
