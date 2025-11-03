import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    base: '/mfe/shared/',
    plugins: [
        react(),
        federation({
            name: 'shared',
            filename: 'sharedEntry.js',
            exposes: {
                './shared': './src/index.js',
            },
            shared: ['react', 'react-dom', 'formik', 'yup', 'axios', 'bootstrap'],
        }),
    ],
    server: { port: 5177 },
    build: { target: 'esnext', minify: false },
})