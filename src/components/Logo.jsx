import React from 'react';

export default function Logo({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} filter drop-shadow-[0_2px_8px_rgba(14,165,233,0.3)] transition-transform duration-300`}
      {...props}
    >
      {/* Definitions for Gradients */}
      <defs>
        <linearGradient id="logo-grad-primary" x1="0%" y1="0%" x2="100%" x2="100%">
          <stop offset="0%" stopColor="#38bdf8" /> {/* Ice Blue Light */}
          <stop offset="100%" stopColor="#0ea5e9" /> {/* Ice Blue Dark */}
        </linearGradient>
        <linearGradient id="logo-grad-accent" x1="0%" y1="100%" x2="100%" x2="0%">
          <stop offset="0%" stopColor="#8b5cf6" /> {/* Indigo / Violet */}
          <stop offset="100%" stopColor="#ec4899" /> {/* Pink / Fuchsia */}
        </linearGradient>
      </defs>

      {/* Futuristic Geometric 'J' & 'V' overlap */}
      
      {/* Outer Glow Backplate Ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        stroke="url(#logo-grad-primary)" 
        strokeWidth="1.5" 
        strokeDasharray="4 8" 
        className="animate-[spin_40s_linear_infinite] origin-center opacity-60"
      />

      {/* Inner geometric shapes */}
      {/* 'J' Branch */}
      <path
        d="M 28 25 L 44 25 L 44 65 C 44 74 37 80 28 80 C 19 80 14 74 14 68 L 26 68 C 26 70 27 71 28 71 C 30 71 32 69 32 65 L 32 37 L 28 37 Z"
        fill="url(#logo-grad-accent)"
        opacity="0.85"
      />

      {/* 'V' Branch */}
      <path
        d="M 52 25 L 64 25 L 78 68 L 92 25 L 100 25 L 82 80 L 74 80 Z"
        fill="url(#logo-grad-primary)"
      />
      
      {/* Center connection node */}
      <circle 
        cx="44" 
        cy="37" 
        r="5" 
        fill="#ffffff" 
        className="shadow-md"
      />
    </svg>
  );
}
