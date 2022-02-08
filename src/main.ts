/*
 * @Author: your name
 * @Date: 2022-02-08 13:33:24
 * @LastEditTime: 2022-02-08 16:03:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fms145\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
// import lang from 'element-plus/lib/locale/lang/zh-cn';

const app = createApp(App)

app.use(router).use(ElementPlus).mount('#app');

