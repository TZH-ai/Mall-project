<template>
  <div class="sidebar">
    <el-aside width="150px" v-if="isSidebarVisible">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">手机app</el-menu-item>
        <el-menu-item index="2" @click="toUserInfo">个人中心</el-menu-item>
        <el-menu-item index="3">购物车</el-menu-item>
        <el-menu-item index="4" @click="scrollToTop">回顶部</el-menu-item>
      </el-menu>
    </el-aside>
    <el-button class="toggle-button" type="primary" @click="toggleSidebar" :icon="isSidebarVisible?'ArrowRightBold':'ArrowLeftBold'" size="small">
      <!-- {{ isSidebarVisible ? '隐藏侧边栏' : '显示侧边栏' }} -->
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
const isSidebarVisible = ref(true);
const router =useRouter();
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const toUserInfo=()=>{
   router.push('/userinfo');
}
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #f4f4f4;
    padding: 20px;
    border-left: 1px solid #ddd;
  }
.toggle-button {
  position: fixed;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>
