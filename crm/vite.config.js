import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'crm',
            filename: 'crmEntry.js',
            exposes: {
                './CRMApp': './src/App.jsx',
            },
            shared: ['react', 'react-dom', 'formik', 'yup', 'axios', 'bootstrap'],
        }),
    ],
    server: { port: 5174 },
    build: { target: 'esnext' },
})