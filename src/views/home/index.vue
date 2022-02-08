<!--
 * @Author: your name
 * @Date: 2022-02-08 14:20:17
 * @LastEditTime: 2022-02-08 17:09:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fms145\src\view\home\home.vue
-->
<template>
   <div class="block">
    <el-carousel height="100vh" :interval="5000" arrow="always" :pause-on-hover="false">
      <el-carousel-item v-for="item in imglist" :key="item.name">
        <div class="coontent" :style="{'background-image': `url(${item.url})`}">
          <div>
            <h3>{{item.title}}</h3>
            <p class="msg">{{item.msg}}</p>
            <el-button></el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
  import head1 from '@/assets/home1.jpg'
  import head2 from '@/assets/home2.jpg'
  import head3 from '@/assets/home3.jpg'

  const imglist = [
    {url: head1, name: 'head1', title: '十四五规划冒冒本博连读 专业教材', msg: 'The 14th Five-Year Plan: Textbooks for the undergraduate and doctoral programs'},
    {url: head2, name: 'head2', title: '我们的家族FMS Start', msg: 'Family of the Maple Story'},
    {url: head3, name: 'head3', title: '其他攻略', msg: 'Other Guides, updated from time to time'}]
</script>

<style scoped>
.coontent{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
}
h3{
    text-align: center;
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'DIN';
    letter-spacing: 5px;
    font-weight: bold;
    margin-bottom: 35px;
}
.msg{
    text-align: center;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 40px;
}
</style>