import React from 'react';
import { motion } from 'framer-motion';

export default function LiquidButton({ children, onClick, className = '', type = 'button', href, download }) {
  const buttonProps = {
    className: `relative overflow-hidden inline-flex items-center justify-center cursor-pointer select-none ${className}`,
    whileHover: {
      scale: 1.015,
      y: -2,
    },
    whileTap: {
      scale: 0.98,
      y: 0,
    },
    transition: { type: 'spring', stiffness: 450, damping: 15 },
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
