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
        // Champagne gold primary accent
        primary: {
          50: '#fbfaf7',
          100: '#f4f0e8',
          200: '#e7decb',
          300: '#d4c5a8',
          400: '#bfa780',
          505: '#c5a880', // base accent
          550: '#b39369',
          605: '#9b7a54',
          650: '#836340',
          700: '#6b4d2e',
          800: '#53371e',
          900: '#3b2311',
          950: '#231206',
        },
        zinc: {
          250: '#e7e5e4',
          305: '#e7e5e4',
          350: '#d6d3d1',
          355: '#ccccca',
          450: '#78716c',
          650: '#57534e',
          805: '#292524',
          850: '#1c1917',
          905: '#0f0e0d',
        },
        slate: {
          350: '#d6d3d1',
          650: '#57534e',
        },
        blue: {
          450: '#bfa780',
          605: '#9b7a54',
          650: '#836340',
        },
        darkbg: {
          base: '#0f0e0d',      // Obsidian charcoal
          card: 'rgba(22, 21, 20, 0.45)', // Warm dark card base
          border: 'rgba(255, 255, 255, 0.04)',
          accent: '#171514',
          glow: 'rgba(197, 168, 128, 0.05)',
        },
        lightbg: {
          base: '#fcfbf9',      // Warm linen/cream
          card: 'rgba(252, 251, 249, 0.55)', // Light glass card base
          border: 'rgba(0, 0, 0, 0.03)',
          accent: '#f5f4f0',
          glow: 'rgba(197, 168, 128, 0.02)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
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
