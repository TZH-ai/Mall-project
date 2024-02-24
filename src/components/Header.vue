<template>
  <div class="top-navbar" :class="isFixed ? 'is-fixed' : 'title'" ref="fixedName">
    <div class="container">
      <ul>
        <li><router-link to="/index">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <a href="../views/Login.html" target="_blank">External Link</a>
        <el-button type="danger" size="small" :icon="Edit">fff</el-button>
      </ul>

      <ul>
        <li><a href="/login">登录</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">消息通知</a></li>
         <el-icon size="30" color="red">
          <ShoppingCart></ShoppingCart>
         </el-icon>
        <li><a href="#">购物车</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Edit } from "@element-plus/icons-vue";

let isFixed = ref(false);
let fixedName = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  isFixed.value = scrollTop > fixedName.value.getBoundingClientRect().top ? true : false;
}
</script>

<style scoped lang="scss">
//不吸顶
.title {
    // font-size: 30px;
    // font-weight: 500;
    color: #222222;
    line-height: 60px;
    text-align: center;
  }
//吸顶
  .is-fixed {
    position: fixed;
    top: 0;
    z-index: 100;
    // font-size: 30px;
    // font-weight: 500;
    // color: #222222;
    // line-height: 80px;
    // text-align: center;
    width: 100%;
    // height: 80px;
    // background-color: #fff;
  }
.submenu{
  position:absolute;
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

.top-navbar {
  background-color: #333;
  padding: 10px;
  text-align: center;
}

.top-navbar ul {
  list-style: none;
  /* float: left; */
  margin: 0;
  padding: 0;
}

.top-navbar li {
  display: inline;
  margin-right: 20px;
}

.top-navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.site-header {
  background-color: #4caf50;
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

  background-color: burlywood;
}

.site-header li {
  display: inline;
  margin-right: 20px;
}

.site-header a {
  text-decoration: none;
  color: white;
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
  background-color: red;
  width: 100px;
  height: 100px;
}
.top-navbar .container {
  display: flex;
  justify-content: space-between;
}
</style>
