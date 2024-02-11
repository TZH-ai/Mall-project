<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    alt=""
    style="weight: 24px; height: 24px; margin: 0px 10px; border-radius:50%"
  />
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ userStore.username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a" @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
    
<script setup lang='ts'>
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting';
import { useRouter,useRoute } from 'vue-router';
let $router=useRouter();
let $rouer=useRoute();
let LayOutSettingStore=useLayOutSettingStore();
let userStore=useUserStore();
const updateRefsh=()=>{
  LayOutSettingStore.refsh=!LayOutSettingStore.refsh;
}
//全屏
const fullScreen=()=>{
  let full=document.fullscreenElement;
   if(!full){
    document.documentElement.requestFullscreen();
   }else{
    document.exitFullscreen();
   }
}
const logout=()=>{
  userStore.userLogout();
  $router.push({path:'/login',query:{redirect:$rouer.path}});
}
</script>
    
<style>
</style>