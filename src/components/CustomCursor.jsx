import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const trailX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const trailY = useSpring(mouseY, { stiffness: 350, damping: 28 });

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

    // Magnetic pull updates
    const updateMagneticHandlers = () => {
      const magneticElements = document.querySelectorAll('.magnetic');
      
      const handleMagneticMove = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;
        const distanceX = e.clientX - elX;
        const distanceY = e.clientY - elY;
        const force = 0.25;

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
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[99999] mix-blend-difference bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />

      {/* Trailing Outer Ring (Restrained, elegant) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998] border"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'project' ? 64 : cursorType === 'magnetic' ? 44 : hovered ? 36 : 20,
          height: cursorType === 'project' ? 64 : cursorType === 'magnetic' ? 44 : hovered ? 36 : 20,
          borderColor: cursorType === 'project' ? 'rgba(56, 189, 248, 0.6)' : cursorType === 'magnetic' ? 'rgba(56, 189, 248, 0.85)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: cursorType === 'project' ? 'rgba(56, 189, 248, 0.05)' : cursorType === 'magnetic' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />
    </>
  );
}
