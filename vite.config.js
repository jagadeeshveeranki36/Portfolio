import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path matching repository name 'Portfolio' for GitHub Pages
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three-vendor';
            }
            if (id.includes('gsap')) {
              return 'gsap-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion-vendor';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})
