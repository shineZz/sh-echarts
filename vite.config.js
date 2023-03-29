import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import commonjs from '@rollup/plugin-commonjs'
export default defineConfig({
  //   optimizeDeps: {
  //     include: [
  //       // 在这里列出需要通过 require 引入的依赖项
  //       'echarts',
  //     ],
  //   },

  plugins: [vue(), commonjs()],
  build: {
    //打包后文件目录
    outDir: 'es',
    //压缩
    minify: true,
    // commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      //忽略打包vue文件
      external: ['@tarojs/taro', 'vue'],
      output: {
        //打包格式
        format: 'es',
        // // //打包后文件名
        entryFileNames: '[name].js',
        // // //让打包目录和我们目录对应
        // preserveModules: true,
        // exports: 'named',
        //配置打包根目录
        dir: resolve(__dirname, 'pck'),
        globals: {
          vue: 'Vue',
          '@tarojs/taro': 'Taro',
        },
      },
    },
    lib: {
      entry: './lib/index.js',
      name: 'yr-echarts',
    },
  },
})
