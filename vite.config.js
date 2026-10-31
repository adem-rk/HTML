import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' keeps asset paths valid under /html-mastery-academy/
export default defineConfig({ base: './', plugins: [react()] })
