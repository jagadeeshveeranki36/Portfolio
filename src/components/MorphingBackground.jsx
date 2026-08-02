import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MorphingBackground({ colorTheme = 'blue' }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring inertia for mouse movements
  const springX1 = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY1 = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const springX2 = useSpring(mouseX, { stiffness: 35, damping: 24 });
  const springY2 = useSpring(mouseY, { stiffness: 35, damping: 24 });

  const springX2Inverted = useTransform(springX2, (x) => -x * 1.2);
  const springY2Inverted = useTransform(springY2, (y) => -y * 1.2);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xOffset = (e.clientX - window.innerWidth / 2) * 0.08;
      const yOffset = (e.clientY - window.innerHeight / 2) * 0.08;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Theme-specific pastel colors for soft background orbs
  const themes = {
    violet: {
      orb1: 'bg-violet-400/10 dark:bg-violet-500/5',
      orb2: 'bg-indigo-400/8 dark:bg-indigo-500/4',
    },
    amber: {
      orb1: 'bg-amber-400/8 dark:bg-amber-500/4',
      orb2: 'bg-orange-400/8 dark:bg-orange-500/4',
    },
    graphite: {
      orb1: 'bg-zinc-300/10 dark:bg-zinc-700/5',
      orb2: 'bg-slate-300/8 dark:bg-slate-800/4',
    },
    blue: {
      orb1: 'bg-sky-300/12 dark:bg-sky-500/5',
      orb2: 'bg-cyan-200/10 dark:bg-cyan-500/4',
    },
  };

  const activeTheme = themes[colorTheme] || themes.blue;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1: Top Left */}
      <motion.div
        style={{ x: springX1, y: springY1 }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          borderRadius: ["40% 60% 60% 40% / 40% 40% 60% 60%", "60% 40% 40% 60% / 60% 60% 40% 40%", "40% 60% 60% 40% / 40% 40% 60% 60%"]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-20 -left-20 w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] blur-[90px] ${activeTheme.orb1}`}
      />

      {/* Orb 2: Bottom Right */}
      <motion.div
        style={{ x: springX2Inverted, y: springY2Inverted }}
        animate={{
          scale: [1, 0.9, 1.15, 1],
          borderRadius: ["60% 40% 40% 60% / 60% 60% 40% 40%", "40% 60% 60% 40% / 40% 40% 60% 60%", "60% 40% 40% 60% / 60% 60% 40% 40%"]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -bottom-20 -right-20 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] blur-[110px] ${activeTheme.orb2}`}
      />
    </div>
  );
}
