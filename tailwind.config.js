/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Ice-blue primary accent
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          505: '#0ea5e9', // Ice blue accent base
          550: '#0284c7',
          605: '#0369a1',
          650: '#075985',
          700: '#0c4a6e',
          800: '#0c4a6e',
          905: '#082f49',
          950: '#082f49',
        },
        zinc: {
          250: '#f4f4f5',
          305: '#e4e4e7',
          350: '#cbd5e1',
          355: '#94a3b8',
          450: '#64748b',
          650: '#475569',
          805: '#1e293b',
          850: '#0f172a',
          905: '#0a0a0b', // Pitch OLED Black
        },
        slate: {
          350: '#cbd5e1',
          650: '#475569',
        },
        blue: {
          450: '#38bdf8',
          605: '#0ea5e9',
          650: '#0284c7',
        },
        darkbg: {
          base: '#0a0a0b',      // Pitch OLED Black canvas
          card: 'rgba(18, 18, 20, 0.55)', // Liquid glass dark
          border: 'rgba(255, 255, 255, 0.05)',
          accent: '#111113',
          glow: 'rgba(14, 165, 233, 0.06)',
        },
        lightbg: {
          base: '#fafafa',      // Crisp off-white canvas
          card: 'rgba(255, 255, 255, 0.65)',
          border: 'rgba(0, 0, 0, 0.05)',
          accent: '#f4f4f5',
          glow: 'rgba(14, 165, 233, 0.02)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
