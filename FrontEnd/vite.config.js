import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Your backend API
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: [
      'new12-2-ib79.onrender.com',  // Add your Render domain here
    ],
  },
  plugins: [react()],
});
