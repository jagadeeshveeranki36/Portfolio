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

  // Theme-specific colors and alignments
  const themes = {
    violet: {
      blob1: 'fill-violet-500/8 dark:fill-violet-500/4',
      blob2: 'fill-indigo-500/7 dark:fill-indigo-500/4',
    },
    amber: {
      blob1: 'fill-amber-500/6 dark:fill-amber-500/3',
      blob2: 'fill-orange-500/5 dark:fill-orange-500/3',
    },
    graphite: {
      blob1: 'fill-zinc-400/8 dark:fill-zinc-700/5',
      blob2: 'fill-slate-400/7 dark:fill-slate-800/4',
    },
    blue: {
      blob1: 'fill-blue-500/7 dark:fill-blue-500/4',
      blob2: 'fill-cyan-500/6 dark:fill-cyan-500/3',
    },
  };

  const activeTheme = themes[colorTheme] || themes.blue;

  // Path morphing coordinate loops
  const path1 = [
    'M 200,150 C 130,150 90,200 90,270 C 90,340 150,380 230,380 C 310,380 350,330 350,270 C 350,210 270,150 200,150 Z',
    'M 200,150 C 150,110 80,180 80,250 C 80,320 170,390 250,390 C 330,390 350,290 340,220 C 330,150 250,190 200,150 Z',
    'M 200,150 C 120,130 100,220 100,290 C 100,360 140,360 220,360 C 300,360 330,350 330,290 C 330,230 280,170 200,150 Z',
    'M 200,150 C 130,150 90,200 90,270 C 90,340 150,380 230,380 C 310,380 350,330 350,270 C 350,210 270,150 200,150 Z',
  ];

  const path2 = [
    'M 250,180 C 190,180 140,230 140,290 C 140,350 200,390 270,390 C 340,390 380,340 380,290 C 380,240 310,180 250,180 Z',
    'M 250,180 C 160,150 110,250 110,310 C 110,370 220,360 290,360 C 360,360 390,320 370,250 C 350,180 340,210 250,180 Z',
    'M 250,180 C 200,200 160,210 160,270 C 160,330 180,410 250,410 C 320,410 390,360 390,300 C 390,240 300,160 250,180 Z',
    'M 250,180 C 190,180 140,230 140,290 C 140,350 200,390 270,390 C 340,390 380,340 380,290 C 380,240 310,180 250,180 Z',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* SVG gooey liquid rendering wrapper */}
      <svg className="w-full h-full min-h-screen opacity-70 filter blur-3xl select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gooey-blend">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>

        <g filter="url(#gooey-blend)">
          {/* Blob 1 */}
          <motion.path
            style={{ x: springX1, y: springY1 }}
            className={activeTheme.blob1}
            animate={{ d: path1 }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Blob 2 */}
          <motion.path
            style={{ x: springX2Inverted, y: springY2Inverted }}
            className={activeTheme.blob2}
            animate={{ d: path2 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>
      </svg>
    </div>
  );
}
