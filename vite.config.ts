import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
import pugPlugin from 'vite-plugin-pug'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
import tsconfigPaths from 'vite-tsconfig-paths'

import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Layouts from 'vite-plugin-vue-layouts'

import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main";`,
      },
    },
  },
  plugins: [
    terser({
      warnings: false,
      compress: {
        defaults: false,
        drop_console: true,
      },
    }),
    legacy(),
    pugPlugin(),
    tsconfigPaths(),
    vue(),
    WindiCSS(),
    ViteComponents(),
    Layouts(),
    Pages(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'program.pdf',
        'speakers.html',
        'favicon/*.png',
        'obsah.pdf',
      ],
      manifest: {
        name: 'Konference k distančnímu vzdělávání',
        start_url: '.',
        short_name: 'KDV',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/favicon/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
    exclude: ['vue-demi'],
  },
})
