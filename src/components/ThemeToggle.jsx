import React from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  // Ray configurations for the Sun icon state
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md cursor-pointer select-none flex items-center justify-start p-1 shadow-inner focus:outline-none transition-colors duration-300 group pointer-events-auto"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-label="Toggle theme mode"
    >
      {/* Sliding and morphing thumb knob */}
      <motion.div
        className="w-6 h-6 rounded-full relative flex items-center justify-center overflow-visible"
        animate={{
          x: isDark ? 22 : 0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="overflow-visible"
        >
          <defs>
            {/* Mask to cut a circular shape out of the center sun, forming a moon crescent */}
            <mask id="theme-mask">
              <rect x="0" y="0" width="24" height="24" fill="white" />
              <motion.circle
                cx="12"
                cy="12"
                r="7"
                fill="black"
                animate={{
                  cx: isDark ? 18 : 28,
                  cy: isDark ? 6 : -4,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              />
            </mask>
          </defs>

          {/* Central Sun/Moon Body */}
          <motion.circle
            cx="12"
            cy="12"
            r="6"
            mask="url(#theme-mask)"
            animate={{
              fill: isDark ? '#E4E4E7' : '#38bdf8',
              scale: isDark ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Sun Rays: rotate out and scale down in dark mode */}
          {rays.map((angle, i) => (
            <motion.line
              key={i}
              x1="12"
              y1="4"
              x2="12"
              y2="2"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{ transformOrigin: '12px 12px' }}
              animate={{
                rotate: angle,
                scale: isDark ? 0 : 1,
                opacity: isDark ? 0 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 18,
                delay: isDark ? 0 : i * 0.02 
              }}
            />
          ))}
        </svg>

        {/* Halo Glow Ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-blue-500/20 dark:border-blue-400/25 pointer-events-none scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"
          animate={{
            borderColor: isDark ? 'rgba(56, 189, 248, 0.2)' : 'rgba(14, 165, 233, 0.2)',
          }}
        />
      </motion.div>
    </button>
  );
}
