/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import { isVue2, isVue3 } from 'vue-demi'
import dts from 'vite-plugin-dts'

const name = isVue2 ? 'vue2' : 'vue3'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [isVue2 ? createVuePlugin() : vue(), isVue3 && dts()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    outDir: `dist/${name}`,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'moten',
      // the proper extensions will be added
      fileName: 'moten',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-demi'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 配置 mixin.scss 混合文件的全局引入
      scss: {
        additionalData: `@import "@/assets/styles/resources.scss";`,
      },
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      include: ['src/components/**/*'],
      exclude: ['src/**/schema.ts'],
    },
  },
})
