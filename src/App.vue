<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Header.vue'
import Primary from './components/Carousel.vue'
import Footer from './components/Footer.vue'
import Siderbar from '@/components/sidebar/index.vue'
// import axios from 'axios';
// axios({
//   url:'/api/user/login',
//   method:'post',
//   data:{
//     username:'admin',
//     password:'1111pppp11'
//   }
// })
</script>

<template>
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <!-- <Home/> -->
      <div class="container">
        <!-- <Primary/> -->
       
        <!-- <Footer/> -->
      </div>  
      <router-view></router-view>
      <!-- <Siderbar></Siderbar> -->
</template>

<style scoped>
.container {
  max-width: 1228px;
  margin: 0 auto; /* 居中显示 */
}

</style>
