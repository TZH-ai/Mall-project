<template>
  <div
    class="top-navbar"
    :class="isFixed ? 'is-fixed' : 'title'"
    ref="fixedName"
  >
    <div class="container">
      <ul>
        <li><router-link to="/index">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <a href="../views/Login.html" target="_blank">External Link</a>
      </ul>

      <ul>
        <li v-if="userStore.username" class="test">
          
          <a href="/login">
            <el-dropdown>
      
      {{ userStore.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="Plus" @click="layout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

        </a></li>
        <li v-else><a href="/login">登录</a></li>
        <li><a href="#" v-show="!userStore.username">注册</a></li>
        <li><a href="#">消息通知</a></li>
        <el-icon size="30" color="red">
          <ShoppingCart v-show="cartStore.cartList.length == 0"></ShoppingCart>
          <ShoppingCartFull
            v-show="cartStore.cartList.length != 0"
          ></ShoppingCartFull>
        </el-icon>
        <li><a @click="goCart">购物车</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import useUserStore from "@/store/modules/user";
import { Edit } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import useCartStore from "@/store/modules/cart";
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
import { ElMessage } from "element-plus";
const cartStore = useCartStore();
const userStore=useUserStore();
let router = useRouter();
let isFixed = ref(false);
let fixedName = ref(null);

onMounted(() => {
  userStore.userInfo();
  window.addEventListener("scroll", handleScroll);
});
console.log(cartStore.cartList.length);
const handleScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  isFixed.value =
    scrollTop > fixedName.value.getBoundingClientRect().top ? true : false;
};
const goCart = () => {
  router.push("/cart");
};
const layout=()=>{
   userStore.userLogout();
   router.push('/login')
   ElMessage({
    type:'success',
    message:'退出成功'
   })
}
</script>

<style scoped lang="scss">
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.top-navbar ul {
  list-style: none;
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中对齐 */
  margin: 0;
  padding: 0;
}


.block-col-2 .el-dropdown-link {
  display: flex;
  align-items: center;
}
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


.cart-item {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  transition: transform 0.3s ease;
}


</style>
