import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      localsConvention:"camelCase",
    }
  },
  build: {
    outDir: 'dist',  // Indique le dossier de sortie
    rollupOptions: {
      input: {
        main: 'index.html',  // Assure-toi que Vite utilise ton index.html
      },
    },
  },
})
