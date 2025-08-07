import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Semua permintaan ke /api akan diteruskan ke target
      '/api': {
        target: 'https://myinstants-api.vercel.app', // Server API asli
        changeOrigin: true, // Ini penting untuk konfigurasi proxy
        rewrite: (path) => path.replace(/^\/api/, ''), // Hapus '/api' dari path
      },
    }
  }
})
