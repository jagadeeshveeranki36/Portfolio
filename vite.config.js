import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: Update base path to match your actual GitHub repository name (e.g. '/<repo-name>/')
  base: '/Portfolio/',
})
