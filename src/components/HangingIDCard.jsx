import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HangingIDCard() {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    // A sudden "jump" up, followed by a pendulum swing left and right, settling back to 0
    controls.start({
      y: [0, -32, 14, -6, 2, 0],
      rotate: [0, 15, -11, 7, -3, 0],
      rotateY: [0, 18, -12, 6, -2, 0],
      transition: {
        duration: 1.4,
        ease: [0.25, 1, 0.5, 1], // snappy start, smooth decay
      }
    });
  };

  return (
    <div className="relative w-full h-[520px] flex justify-center items-start pointer-events-auto">
      {/* 3D Scene Wrapper for tilting depth */}
      <div 
        className="relative flex flex-col items-center select-none cursor-pointer"
        style={{ perspective: 1000 }}
        onMouseEnter={handleMouseEnter}
      >
        {/* Lanyard String */}
        <div className="absolute top-0 w-[2px] h-[90px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600 z-10" />

        {/* Lanyard Clip/Metal Ring */}
        <div className="absolute top-[88px] w-5 h-5 rounded-full border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-200 dark:bg-zinc-800 z-15 flex items-center justify-center shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400" />
        </div>

        {/* Clip connector */}
        <div className="absolute top-[102px] w-2.5 h-4 bg-zinc-500 dark:bg-zinc-600 rounded-sm z-15 shadow-sm" />

        {/* Card Body */}
        <motion.div
          animate={controls}
          initial={{ y: 0, rotate: 0, rotateY: 0 }}
          style={{ transformOrigin: 'top center' }}
          className="relative top-[114px] w-[260px] h-[360px] glass-card shadow-xl p-5 flex flex-col justify-between items-center text-center overflow-hidden border border-zinc-300/40 dark:border-zinc-700/40"
        >
          {/* Lanyard Slot Hole at the top edge of card */}
          <div className="absolute top-2.5 w-8 h-2 rounded-full bg-zinc-200 dark:bg-zinc-950 border border-zinc-300/30 dark:border-zinc-800/30" />

          {/* Top Stamp / Organization */}
          <div className="w-full flex justify-between items-center mt-3 text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 font-bold uppercase">
            <span>VRIT // MCA</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative w-36 h-36 mt-3 border border-zinc-300/60 dark:border-zinc-700/60 p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/80 shadow-inner overflow-hidden">
            <img 
              src="/Portfolio/profile.jpg" 
              alt="Veeranki Jagadeesh" 
              className="w-full h-full object-cover rounded-md filter contrast-[1.02]"
              onError={(e) => {
                // Fallback in case of absolute path issues
                e.target.src = "profile.jpg";
              }}
            />
          </div>

          {/* Name & Credentials */}
          <div className="mt-3 w-full">
            <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white leading-tight">
              Veeranki Jagadeesh
            </h3>
            <p className="font-mono text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">
              Python & Full-Stack Developer
            </p>
          </div>

          {/* Barcode & Student ID */}
          <div className="w-full mt-2 flex flex-col items-center">
            {/* Custom Barcode */}
            <div className="h-6 w-full flex items-center justify-between px-2 bg-zinc-900/5 dark:bg-white/5 rounded py-0.5 opacity-80 dark:opacity-90">
              <div className="w-1 h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[4px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[1px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-1 h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[3px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[2px] h-full bg-zinc-800 dark:bg-zinc-200" />
              <div className="w-[4px] h-full bg-zinc-800 dark:bg-zinc-200" />
            </div>
            <span className="font-mono text-[7px] text-zinc-400 dark:text-zinc-600 tracking-[0.25em] uppercase mt-1">
              *ID-2024-2026-MCA*
            </span>
          </div>

          {/* Hologram Overlay (Liquid Glass shimmer effect) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40 mix-blend-overlay rotate-12" />
        </motion.div>
      </div>
    </div>
  );
}
