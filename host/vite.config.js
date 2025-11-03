import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        crm: 'http://localhost:5174/assets/crmEntry.js',
        scm: 'http://localhost:5175/assets/scmEntry.js',
        pmc: 'http://localhost:5176/assets/pmcEntry.js',
      },
      shared: ['react', 'react-dom', 'formik', 'yup', 'axios', 'bootstrap'],
    }),
  ],
   optimizeDeps: {
    exclude: ['quill'],  // 👈 this prevents Vite from trying to pre-bundle Quill
  },
  server: { port: 5173 },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['quill'], // 👈 tell Rollup to ignore missing quill
    },
  },
})
