<template>
  <Header/>
  <div class="container">
    <!-- Your website content goes here -->
    <header class="site-header">
      <div class="site-container">
        <img src="../../../public//favicon.ico" alt="" class="logo" />
        <nav>
          <ul class="categoryNav">
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">Products</a>
              <ul class="submenu">
                <li><a href="#">子菜单1</a></li>
                <li><a href="#">子菜单2</a></li>
                <li><a href="#">子菜单3</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Blog</a>
              <ul class="submenu">
                <li><a href="#">子菜单1</a></li>
                <li><a href="#">子菜单2</a></li>
                <li><a href="#">子菜单3</a></li>
              </ul>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div class="right">
          <el-input v-model="keyword"></el-input>
          <el-button type="success" size="small" icon="Search" @click="search"></el-button>
        </div>
      </div>
    </header>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="channel-list">
      <div class="channel-left">
        <ul>
          <li v-for="(item,index) in channelList" :key="index"><el-button type="" :icon="item.icon" @click="toShop(item)"></el-button>{{ item.name}}</li>
        </ul>
      </div>
      <img src="../.././img/loginbg.jpg" alt="" />
      <img src="../.././img/bj.jpg" alt="" />
      <img src="../.././img/loginbg.jpg" alt="" />
    </div>
    <div class="car">
      <Car></Car>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import {useRouter} from 'vue-router';
import {ref} from 'vue';
import {Iphone,Watch } from "@element-plus/icons-vue";
import Header from "@/components/Header.vue";
import Car from './car/index.vue';
import EventBus  from '@/utils/event-bus';
let router=useRouter();
let channelList=ref([{
  name:'iPhone 13',
  icon:'Iphone'
},
{
  name:'手表',
  icon:'Watch'
},
{
  name:'手表',
  icon:'Watch'
},
{
  name:'手表',
  icon:'Watch'
},
{
  name:'手表',
  icon:'Watch'
},
{
  name:'手表',
  icon:'Watch'
}

])
let keyword=ref('');
const search=()=>{
   EventBus.emit('search',keyword.value)
}
const toShop=(val:any)=>{
  router.push({path:'/shop',query:val})
}

</script>
  
<style scoped lang="scss">
.channel-list ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.main {
  height: 500px;
}

.channel-list {
  height: 170px;
  position: relative;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  .channel-left {
    display: flex;
    flex-direction: column;
    text-align: center; 
    align-items: center; 
    justify-content: center;
    li {
      width: calc(33.33% - 20px);
      margin: 10px; 
      text-align: center; 
      align-items: center; 
    }
  }
}
.container {
  max-width: 1228px;
  margin: 0 auto; /* 居中显示 */
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 样式部分 */
.carousel-container {
  display: flex;
  margin-top: 20px; /* 调整导航栏与轮播图之间的距离 */
}

.nav-container {
  width: 200px;
}

.nav-item {
  position: relative;
  margin-bottom: 10px;
}

.sub-menu {
  position: absolute;
  top: 0;
  left: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.sub-menu-nav {
  width: 100px;
  z-index: 3;
  background-color: #fff;
}

.carousel-wrapper {
  overflow: hidden;
  flex-grow: 1;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}

.carousel img {
  width: 100%;
  height: auto;
}

.carousel-button {
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-button {
  left: 150px;
}

.next-button {
  right: 10px;
}
.site-header {
  padding: 20px;
  text-align: center;
  color: white;
}

.site-header h1 {
  margin: 0;
}

.site-header nav {
  margin-top: 10px;
}

.site-header ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-header li {
  display: inline;
  margin-right: 20px;
}

.site-header a {
  text-decoration: none;

  font-weight: bold;
  font-size: 18px;
}

.container {
  max-width: 1228px;
  margin: 0 auto;
}

.main-content {
  padding: 20px;
}
.logo {
  width: 100px;
  height: 100px;
}
.top-navbar .container {
  display: flex;
  justify-content: space-between;
}
.submenu {
  position: absolute;
  width: max-content;
  display: none;
}
.subtitle {
  display: none;
}
* {
  margin: 0px;
  padding: 0px;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}
.categoryNav li:hover {
  position: relative;
  background-color: red; /* 鼠标悬停时的背景颜色 */
  color: #333; /* 鼠标悬停时的文字颜色 */
  cursor: pointer; /* 鼠标悬停时的指针样式 */
  .submenu {
    display: block;
  }
}

.site-container {
  display: flex;
  align-content: space-between;
  align-items: center;
  position: relative;
}
.right {
  margin-left: auto;
  display: flex;
}
</style>

