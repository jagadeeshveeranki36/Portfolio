import React from 'react';
import { motion } from 'framer-motion';

export default function LiquidButton({ children, onClick, className = '', type = 'button', href, download }) {
  const springConfig = { type: 'spring', stiffness: 500, damping: 12, mass: 0.6 };

  const buttonProps = {
    className: `relative overflow-hidden inline-flex items-center justify-center cursor-pointer select-none ${className}`,
    whileHover: {
      scaleX: 1.05,
      scaleY: 0.95,
      y: -2,
    },
    whileTap: {
      scaleX: 0.92,
      scaleY: 1.1,
      y: 1,
    },
    transition: springConfig,
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        download={download} 
        {...buttonProps}
      >
        {/* Shimmer liquid reflect element */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-shimmer pointer-events-none" />
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type} 
      onClick={onClick} 
      {...buttonProps}
    >
      {/* Shimmer liquid reflect element */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-shimmer pointer-events-none" />
      {children}
    </motion.button>
  );
}
