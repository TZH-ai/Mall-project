<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>
    
<script setup lang='ts'>
import { watch, ref,nextTick } from "vue";
import useLayOutSettingStore from "@/store/modules/setting";
let LayOutSettingStore = useLayOutSettingStore();
let flag = ref(true);
watch(
  () => LayOutSettingStore.refsh,
  () => {
    flag.value = false;
    nextTick(()=>{
      flag.value=true;
    })
  }
);
</script>
    
<style>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>