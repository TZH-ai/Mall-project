<template>
  <div class="layou_container">
    <div class="layout_slider" :class="{fold:LayOutSettingStore.fold?true:false}">
      <Logo></Logo>
      <el-scrollbar height="400px" class="scrollbar">
        <el-menu
          background-color="#002519"
          text-color="white"
          :default-active="$router.path"
          :collapse="LayOutSettingStore.fold?true:false"
        >
          <!-- <el-menu-item index="1">Processing Center</el-menu-item>
          <el-menu-item index="2"> 数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>
                <span>角色管理</span>
            </template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-sub-menu> -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{fold:LayOutSettingStore.fold?true:false}">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main" :class="{fold:LayOutSettingStore.fold?true:false}">
      <Main></Main>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
import { useRoute } from "vue-router";
import Logo from "./logo/index.vue";
import Menu from "@/layout/menu/index.vue";
import useUserStore from "@/store/modules/user";
import Main from "@/layout/main/index.vue";
import Tabbar from "./tabbar/index.vue";
import useLayOutSettingStore from "@/store/modules/setting";
let  userStore = useUserStore();
let $router = useRoute();
let LayOutSettingStore=useLayOutSettingStore();
console.log(userStore.menuRoutes)
</script>
    
<style scoped lang="scss">
.layou_container {
  position: relative;
  width: 100%;
  height: 100vh;
  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all .3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);
      .el-menu {
        border-right: none;
      }
     
    }
    &.fold{
        width: $base-menu-min-width;
      }
  }
  .layout_tabbar {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
    top: 0px;
    left: $base-menu-width;
    transition: all .3s;
    &.fold{
      width: calc(100wh - $base-menu-min-width);
      left:$base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all .3s;
    &.fold{
      width: calc(100wh -  $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>