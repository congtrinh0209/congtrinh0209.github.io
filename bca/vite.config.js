import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
        $base-color: "#00803D";
        $app-name: 'vnu-hoso';
        $public-path: "";
        `
      },
      sass: {
        additionalData: `
        $base-color: "#00803D"
        $app-name: "vnu-hoso"
        $public-path: ""
        `
      }
    }
  },
  base: './'
}))
