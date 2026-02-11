import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vercel: base '/'. GitHub Pages (repo portfilia): base '/portfilia/' – beddel kadib rebuild
  base: '/',
  css: { postcss: false },
  server: { port: 5173 },
});
