import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePluginFonts } from 'vite-plugin-fonts'
import bundleAnalyzer from "rollup-plugin-bundle-analyzer";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) =>({
  build: {
    rollupOptions: {
      plugins: [bundleAnalyzer()]
    },
    // sourcemap: command === 'dev' ? 'inline' : false,
    cssCodeSplit: true,
    modulePreload: true
  },
  plugins: [
    vue(),
    vuetify(),
    VitePluginFonts({
      google: {
        families: ['Roboto', 'Roboto Slab'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-color: "#1E7D30";
        $app-name: 'bca-a05';
        $public-path: "";
        `
      },
      sass: {
        additionalData: `
        $base-color: "#1E7D30"
        $app-name: "bca-a05"
        $public-path: ""
        `
      }
    }
  },
  base: './'
}))
