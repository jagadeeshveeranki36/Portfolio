import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HangingIDCard() {
  const controls = useAnimation();
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      controls.set({ y: 0, rotate: 0, opacity: 1 });
      setIsHoverable(true);
      return;
    }

    // Sequence the signature lanyard drop and sway animations
    const runIntroAnimation = async () => {
      // 1. Initial off-screen setting
      controls.set({ y: -450, rotate: 0, opacity: 1 });

      // 2. Drop down using spring physics
      await controls.start({
        y: 0,
        transition: { type: 'spring', stiffness: 130, damping: 15, mass: 1 }
      });

      // 3. Immediately trigger pendulum sway swings on landing
      await controls.start({
        rotate: [0, 8, -6, 4, -2.5, 1.2, -0.6, 0],
        transition: { duration: 2.8, ease: 'easeOut' }
      });

      // 4. Begin the continuous slow idle sway
      setIsHoverable(true);
      controls.start({
        rotate: [1, -1, 1],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      });
    };

    runIntroAnimation();
  }, [controls]);

  const handleMouseEnter = async () => {
    if (!isHoverable) return;

    // Temporary stop idle loop, trigger bump nudge rotation swing, then resume idle
    await controls.start({
      rotate: [0, 5, -3.5, 2, -1, 0],
      transition: { duration: 1.3, ease: 'easeOut' }
    });

    controls.start({
      rotate: [1, -1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    });
  };

  return (
    <div className="relative w-full h-[500px] flex justify-center items-start pointer-events-auto select-none">
      {/* 3D Wrapper */}
      <div 
        className="relative flex flex-col items-center cursor-pointer"
        style={{ perspective: 1000 }}
        onMouseEnter={handleMouseEnter}
      >
        {/* Lanyard Strap Wire */}
        <div className="absolute top-0 w-[1.5px] h-[95px] bg-gradient-to-b from-sky-400/80 via-zinc-500 to-zinc-600 dark:from-sky-500/60 dark:via-zinc-700 dark:to-zinc-800 z-10" />

        {/* Lanyard Metal Clip */}
        <div className="absolute top-[93px] w-4.5 h-4.5 rounded-full border-2 border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 z-15 flex items-center justify-center shadow-md">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
        </div>

        {/* Metal ring connector */}
        <div className="absolute top-[106px] w-2.5 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-sm z-15 shadow-sm" />

        {/* Hanging Badge Card body */}
        <motion.div
          animate={controls}
          initial={{ y: -450, rotate: 0, opacity: 0 }}
          style={{ transformOrigin: 'top center' }}
          className="relative top-[114px] w-[250px] h-[350px] glass-card shadow-2xl p-5 flex flex-col justify-between items-center text-center overflow-hidden border border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-md"
        >
          {/* Badge slot hole */}
          <div className="absolute top-2.5 w-7 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-950 border border-zinc-300/30 dark:border-zinc-850/30" />

          {/* Org tag stamp */}
          <div className="w-full flex justify-between items-center mt-2.5 text-[8.5px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 font-bold uppercase">
            <span>VRIT // MCA</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative w-32 h-32 mt-3.5 border border-zinc-200 dark:border-zinc-800 p-1 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 shadow-inner overflow-hidden">
            <img 
              src="./profile.jpg" 
              alt="Veeranki Jagadeesh, Python Developer" 
              className="w-full h-full object-cover rounded-md filter contrast-[1.02] grayscale hover:grayscale-0 transition-all duration-500"
              draggable="false"
            />
          </div>

          {/* Name & Title */}
          <div className="mt-3.5 w-full">
            <h3 className="font-display font-extrabold text-base text-zinc-900 dark:text-white leading-tight uppercase tracking-tight">
              Veeranki Jagadeesh
            </h3>
            <p className="font-mono text-[8.5px] font-bold text-emerald-500 dark:text-emerald-450 uppercase tracking-widest mt-1">
              Python Developer
            </p>
          </div>

          {/* Barcode representation */}
          <div className="w-full mt-2 flex flex-col items-center">
            <div className="h-6 w-full flex items-center justify-between px-2.5 bg-zinc-900/5 dark:bg-white/5 rounded py-0.5 opacity-80">
              <div className="w-[1.5px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[4px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-300" />
              <div className="w-[4px] h-full bg-zinc-800 dark:bg-zinc-300" />
            </div>
            <span className="font-mono text-[7px] text-zinc-400 dark:text-zinc-600 tracking-[0.25em] uppercase mt-1">
              *ID-2024-2026-MCA*
            </span>
          </div>

          {/* Hologram Glass Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40 mix-blend-overlay rotate-12" />
        </motion.div>
      </div>
    </div>
  );
}
