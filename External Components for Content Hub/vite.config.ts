import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    lib: {
      formats: ['es'],
      fileName: process.env.npm_config_component,
      entry: 'src/components/${process.env.npm_config_component}/index.tsx'
    }
  }
})
