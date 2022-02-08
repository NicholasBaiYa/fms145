/*
 * @Author: your name
 * @Date: 2022-02-08 13:33:24
 * @LastEditTime: 2022-02-08 15:16:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fms145\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 设置为@则使用时为"@/components/index.module.css"
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [vue()]
})
