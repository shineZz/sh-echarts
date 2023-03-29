import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
const entryDir = resolve(__dirname, 'lib')
// 出口文件夹
const outDir = resolve(__dirname, 'pck')
const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ['vue', '@tarojs/taro'],
  // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: 'Vue',
      '@tarojs/taro': 'Taro',
    },
  },
}
export default defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()],
  build: {
    // esbuild 打包更快，但是不能去除 console.log
    minify: 'esbuild',
    rollupOptions,
    // rollupOptions: {
    //   external: ['@tarojs/taro', 'vue'],
    //   output: [
    //     {
    //       //打包格式
    //       //打包后文件名
    //       entryFileNames: '[name].js',
    //       //让打包目录和我们目录对应
    //       preserveModules: true,
    //       exports: 'named',
    //       //配置打包根目录
    //       dir: resolve(__dirname, 'pck'),
    //     },
    //   ],
    // },
    lib: {
      entry: resolve(entryDir, 'index.js'),
      name: 'yr-echarts',
      fileName: (format) => `index.${format}.js`, // 输出文件名
      formats: ['es', 'umd'],
    },
    outDir,
  },
})
