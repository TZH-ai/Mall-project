<template>
  <!-- <div>{{ menuList }}</div> -->
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
<template  v-if="item.children && item.children.length == 1">
    <el-menu-item
      :index="item.children[0].path"
     v-if="!item.children[0].meta.hidden"
     @click="goRoute"
    >
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
</template>
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
      @click="goRoute"
    >
    <el-icon>
            <component :is="item.meta.icon"></component>
        </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
    
<script setup lang='ts'>
import { useRouter } from 'vue-router';
defineProps(["menuList"]);
let $router=useRouter()
const goRoute=(vc:any)=>{
     console.log(vc.index)
     $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: "Menu",
};
</script>
<style>
</style>