import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    // Define global constant replacements
    define: {
      'process.env': {
        VITE_EMAILJS_PUBLIC_KEY: JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
        VITE_EMAILJS_SERVICE_ID: JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
        VITE_EMAILJS_TEMPLATE_ID: JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID)
      }
    },
    build: {
      // Ensure environment variables are replaced at build time
      target: 'es2020',
      sourcemap: false,
      minify: 'esbuild' // Using esbuild for minification which is faster and included with Vite
    }
  }
})
