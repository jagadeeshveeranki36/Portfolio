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
        // Deep Indigo/Slate primary accent
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // electric violet/indigo accent
          605: '#7c3aed',
          650: '#6d28d9',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        zinc: {
          250: '#e2e2e5',
          305: '#e4e4e7',
          350: '#d4d4d8',
          355: '#cccccc',
          450: '#8e8e93',
          650: '#4b5563',
          805: '#202024',
          850: '#1c1c1f',
          905: '#0f0f11',
        },
        slate: {
          350: '#cbd5e1',
          650: '#475569',
        },
        blue: {
          450: '#60a5fa',
          605: '#2563eb',
          650: '#1d4ed8',
        },
        darkbg: {
          base: '#090d16',      // Premium dark background (sleek deep blue-black)
          card: 'rgba(20, 27, 45, 0.6)', // Glassmorphic card base
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#111827',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        lightbg: {
          base: '#f8fafc',      // Soft off-white
          card: 'rgba(255, 255, 255, 0.7)', // Glassmorphic light card
          border: 'rgba(0, 0, 0, 0.06)',
          accent: '#f1f5f9',
          glow: 'rgba(139, 92, 246, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Source Serif 4', 'serif'],
        display: ['Playfair Display', 'serif'],
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
