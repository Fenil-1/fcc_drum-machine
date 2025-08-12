import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png', 'audio/*.mp3'],
      manifest: {
        name: 'Drum Machine',
        short_name: 'Drums',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#FF5722',
        icons: [
          {
            src: '/icon192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'audio',
            handler: 'CacheFirst',
            options: {
              cacheName: 'drum-audio-cache',
              expiration: { maxEntries: 20 }
            }
          }
        ]
      }
    })
  ]
});
