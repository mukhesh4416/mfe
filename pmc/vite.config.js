import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'pmc',
            filename: 'pmcEntry.js',
            exposes: {
                './PMCApp': './src/App.jsx',
            },
            shared: ['react', 'react-dom', 'formik', 'yup', 'axios', 'bootstrap', 'primereact', 'primeicons'],
        }),
    ],
    server: { port: 5176 },
    build: { target: 'esnext' },
})