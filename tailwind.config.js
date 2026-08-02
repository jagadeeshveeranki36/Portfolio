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
        // Emerald green primary accent
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          505: '#10b981', // Emerald 500
          550: '#059669',
          605: '#047857',
          650: '#065f46',
          700: '#064e3b',
          800: '#064e3b',
          900: '#022c22',
          950: '#022c22',
        },
        zinc: {
          250: '#e4e4e7',
          305: '#d4d4d8',
          350: '#a1a1aa',
          355: '#71717a',
          450: '#52525b',
          650: '#3f3f46',
          805: '#27272a',
          850: '#18181b',
          905: '#09090b',
        },
        slate: {
          350: '#cbd5e1',
          650: '#475569',
        },
        blue: {
          450: '#34d399',
          605: '#10b981',
          650: '#059669',
        },
        darkbg: {
          base: '#09090b',      // Pure black canvas
          card: 'rgba(18, 18, 22, 0.45)', // Tech slate card
          border: 'rgba(255, 255, 255, 0.05)',
          accent: '#121214',
          glow: 'rgba(16, 185, 129, 0.05)',
        },
        lightbg: {
          base: '#ffffff',      // Pure white canvas
          card: 'rgba(255, 255, 255, 0.65)',
          border: 'rgba(0, 0, 0, 0.05)',
          accent: '#f4f4f5',
          glow: 'rgba(16, 185, 129, 0.02)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
