import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (!isMobile) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e) => {
        const target = e.target;
        const isClickable = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') || 
          target.classList.contains('clickable') ||
          target.getAttribute('role') === 'button';
        
        setHovered(!!isClickable);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('resize', checkDevice);
      };
    }
    return () => window.removeEventListener('resize', checkDevice);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    
    let animFrame;
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const ease = 0.15;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };

    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary-500 rounded-full pointer-events-none z-[9999]"
        style={{ x: position.x - 5, y: position.y - 5 }}
        animate={{
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? '#a78bfa' : '#8b5cf6',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-primary-500 rounded-full pointer-events-none z-[9998]"
        style={{ x: trail.x - 18, y: trail.y - 18 }}
        animate={{
          scale: hovered ? 1.4 : 1,
          borderColor: hovered ? '#a78bfa' : '#8b5cf6',
          backgroundColor: hovered ? 'rgba(139, 92, 246, 0.1)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      />
    </>
  );
}
