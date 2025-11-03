import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const prod = "https://mukhesh4416.github.io"
const prod1 = "https://mukhesh4416.github.io/assets/index-XqJQp53A.js"
const prod2 = "https://mukhesh4416.github.io/assets/index-CMF_dOlt.js"
const prod3 = "https://mukhesh4416.github.io/assets/index-DmXJ6iaW.js"
const env = true

// remotes: {
//     crm: `${env?prod1:"http://localhost:5174/"}assets/crmEntry.js`,
//     scm: `${env?prod2:"http://localhost:5175/"}assets/scmEntry.js`,
//     pmc: `${env?prod3:"http://localhost:5176/"}assets/pmcEntry.js`,
//   },

export default defineConfig({
  base: '/mfe/',
  plugins: [
    react(),
    federation({
      remotes: {
         shared: 'https://mukhesh4416.github.io/mfe/shared/assets/sharedEntry.js',
        crm: env
          ? 'https://mukhesh4416.github.io/mfe/crm/assets/crmEntry.js'
          : 'http://localhost:5174/assets/crmEntry.js',
        scm: env
          ? 'https://mukhesh4416.github.io/mfe/scm/assets/scmEntry.js'
          : 'http://localhost:5175/assets/scmEntry.js',
        pmc: env
          ? 'https://mukhesh4416.github.io/mfe/pmc/assets/pmcEntry.js'
          : 'http://localhost:5176/assets/pmcEntry.js',
      },
      shared: ['react', 'react-dom', 'formik', 'yup', 'axios', 'bootstrap'],
    }),
  ],
  server: { port: 5173 },
  build: {
    target: 'esnext',
  },
})
