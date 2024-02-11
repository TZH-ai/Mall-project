<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    src="../../../public/favicon.ico"
    alt=""
    style="weight: 24px; height: 24px; margin: 0px 10px"
  />
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
    
<script setup lang='ts'>
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore=useLayOutSettingStore();
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
</script>
    
<style>
</style>