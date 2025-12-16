import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This base: './' is CRITICAL for GitHub Pages. 
  // It ensures assets are loaded relatively so the site works 
  // even if hosted at https://username.github.io/repo-name/
  base: './', 
});