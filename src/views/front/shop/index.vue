<template>
  <div>
    <h1>搜索结果</h1>
    <p>您搜索的关键字是：{{ keyword.value }}</p>
    <ul>
        <li v-for="item in searchResult" :key="item.id">结果:{{ item.name}}</li>
    </ul>
  </div>
</template>
    
<script setup lang='ts'>
import { useRouter } from "vue-router";
import { ref, onMounted,computed } from "vue";
const router = useRouter();
const keyword: any = ref("");
const products = ref([
  { id: 1, name: "iPhone 13",price:100 },
  { id: 2, name: "Apple Watch Series 7",price:200 },
  { id: 3, name: "MacBook Pro" ,price:1000},
  { id: 4, name: "iPad Air" },
  { id: 5, name: "AirPods Pro",price:1004 },
]);
onMounted(() => {
  keyword.value = router.currentRoute.value.query.name;
});
const searchResult=computed(()=>{
    return products.value.filter((item)=>item.name.toLowerCase().includes(keyword.value))
})
console.log(searchResult.value)
</script>
    
<style>
</style>