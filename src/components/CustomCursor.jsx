import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'link', 'project', 'magnetic'
  const [isMobile, setIsMobile] = useState(true);

  // Coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring animations for the trailing outer ring
  const trailX = useSpring(mouseX, { stiffness: 240, damping: 25 });
  const trailY = useSpring(mouseY, { stiffness: 240, damping: 25 });

  // Calculate mouse velocity vector
  const xVelocity = useVelocity(mouseX);
  const yVelocity = useVelocity(mouseY);

  // Determine pointer travel speed (magnitude of velocity vector)
  const speed = useTransform([xVelocity, yVelocity], ([vx, vy]) => {
    return Math.min(Math.sqrt(vx * vx + vy * vy) / 900, 0.45);
  });

  // Stretch scale along path of motion, squash orthogonally to preserve area
  const scaleX = useSpring(useTransform(speed, [0, 0.45], [1, 1.45]), { stiffness: 350, damping: 24 });
  const scaleY = useSpring(useTransform(speed, [0, 0.45], [1, 0.65]), { stiffness: 350, damping: 24 });

  // Rotate the stretched trailing oval to align with path of travel
  const rotate = useSpring(
    useTransform([xVelocity, yVelocity], ([vx, vy]) => {
      if (Math.abs(vx) < 8 && Math.abs(vy) < 8) return 0;
      return Math.atan2(vy, vx) * (180 / Math.PI);
    }),
    { stiffness: 350, damping: 22 }
  );

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button';
      const isProjectCard = target.closest('.project-card-container') || target.classList.contains('project-card-container');

      if (isProjectCard) {
        setHovered(true);
        setCursorType('project');
      } else if (isLink || isButton) {
        setHovered(true);
        setCursorType('link');
      } else {
        setHovered(false);
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Magnetic pull logic
    const updateMagneticHandlers = () => {
      const magneticElements = document.querySelectorAll('.magnetic');
      
      const handleMagneticMove = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;

        const distanceX = e.clientX - elX;
        const distanceY = e.clientY - elY;

        const force = 0.28;
        el.style.transform = `translate(${distanceX * force}px, ${distanceY * force}px)`;
        
        setCursorType('magnetic');
      };

      const handleMagneticLeave = (e) => {
        const el = e.currentTarget;
        el.style.transform = '';
        setCursorType('default');
      };

      magneticElements.forEach((el) => {
        el.addEventListener('mousemove', handleMagneticMove);
        el.addEventListener('mouseleave', handleMagneticLeave);
      });

      return () => {
        magneticElements.forEach((el) => {
          el.removeEventListener('mousemove', handleMagneticMove);
          el.removeEventListener('mouseleave', handleMagneticLeave);
        });
      };
    };

    const cleanMagnetic = updateMagneticHandlers();

    const observer = new MutationObserver(updateMagneticHandlers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkDevice);
      cleanMagnetic();
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Snappy Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 1.4 : 1,
          backgroundColor: cursorType === 'project' ? '#93c5fd' : '#ffffff',
        }}
        transition={{ type: 'spring', stiffness: 550, damping: 28 }}
      />

      {/* Velocity-Reactive Staggered Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] flex items-center justify-center border"
        style={{
          x: trailX,
          y: trailY,
          scaleX: scaleX,
          scaleY: scaleY,
          rotate: rotate,
          translateX: '-50%',
          translateY: '-50%',
          transformOrigin: 'center center',
        }}
        animate={{
          width: cursorType === 'project' ? 84 : cursorType === 'magnetic' ? 52 : hovered ? 46 : 28,
          height: cursorType === 'project' ? 84 : cursorType === 'magnetic' ? 52 : hovered ? 46 : 28,
          borderColor: cursorType === 'project' ? 'rgba(96, 165, 250, 0.55)' : cursorType === 'magnetic' ? 'rgba(37, 99, 235, 0.85)' : 'rgba(255, 255, 255, 0.28)',
          backgroundColor: cursorType === 'project' ? 'rgba(96, 165, 250, 0.08)' : cursorType === 'magnetic' ? 'rgba(37, 99, 235, 0.12)' : 'rgba(255, 255, 255, 0)',
          borderWidth: cursorType === 'magnetic' ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      >
        {cursorType === 'project' && (
          <span className="text-[9px] font-bold text-blue-300 absolute inset-0 flex items-center justify-center tracking-widest uppercase font-mono select-none">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
