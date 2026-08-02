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
          505: '#0ea5e9', // main accent
          550: '#0ea5e9',
          605: '#0284c7',
          650: '#0369a1',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        zinc: {
          250: '#e2e2e5',
          305: '#e4e4e7',
          350: '#d4d4d8',
          355: '#cccccc',
          450: '#8e8e93',
          650: '#4b5563',
          805: '#202024',
          850: '#1a1a1c',
          905: '#080809',
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
          base: '#080809',      // Pitch-black premium OLED canvas
          card: 'rgba(14, 14, 16, 0.45)', // Glassmorphic brand dark card base
          border: 'rgba(255, 255, 255, 0.05)',
          accent: '#0d0d0f',
          glow: 'rgba(14, 165, 233, 0.06)',
        },
        lightbg: {
          base: '#fafafc',      // Warm-white premium brandbook base
          card: 'rgba(255, 255, 255, 0.55)', // Light glass card base
          border: 'rgba(0, 0, 0, 0.04)',
          accent: '#f4f4f6',
          glow: 'rgba(14, 165, 233, 0.03)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
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
