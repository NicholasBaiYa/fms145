/*
 * @Author: your name
 * @Date: 2022-02-08 14:51:42
 * @LastEditTime: 2022-02-08 15:33:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fms145\src\router\router.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const modules = import.meta.glob("../views/**/**.vue")

console.log(modules)

export const constantRoutes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;
