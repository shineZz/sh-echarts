import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

export default defineConfig({
  build: {
    //打包后文件目录
    outDir: 'es',
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['@tarojs/taro'],
      output: [
        {
          //打包格式
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          //配置打包根目录
          dir: resolve(__dirname, 'pck'),
        },
      ],
    },
    lib: {
      entry: './lib/index.js',
      name: 'yr-echarts',
    },
  },

  plugins: [vue()],
})
