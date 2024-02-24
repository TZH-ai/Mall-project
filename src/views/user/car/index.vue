<template>
  <el-card v-for="n in 2" :key="n" class="box-card" style="margin-bottom: 20px">
    <div v-for="item in products" :key="item.id" class="card-item"  @click="goToDetail(item.id)">
      <img :src="item.skuDefaultImg" alt="" class="card-img" />
      <div class="card-content">
        <h3>{{  item.name}}</h3>
        <p>{{  item.subtitle}}</p>
      </div>
    </div>
  </el-card>
</template>
    
<script setup lang='ts'>
import { ref,onMounted } from "vue";
import {useRouter} from 'vue-router';
import {
  reqSkuList,
  reqSaleSku,
  reqCancelSale,
  reqSkuInfo,
} from '@/api/product/sku'
import type {
  SkuData,
  SkuResponseData,
  SkuInfoData,
} from '@/api/product/sku/type'
let text = ref("");
const router=useRouter();
onMounted(() => {
  getProductList();
})
import EventBus from "@/utils/event-bus";
EventBus.on("search", (val: any) => {
  text.value = val;
  console.log("获取的值val", val);
});
// const products = [
//   { id: 1, name: '商品1', subtitle: '这是商品1的小标题', price: 100, image: '../../../img/bj.jpg' },
//   { id: 2, name: '商品2', subtitle: '这是商品2的小标题', price: 200, image: '../../../img/bj.jpg' },
//   { id: 3, name: '商品3', subtitle: '这是商品2的小标题', price: 200, image: '../../../img/bj.jpg' },
//   { id: 4, name: '商品4', subtitle: '这是商品2的小标题', price: 200, image: '../../../img/bj.jpg' },
// ];
const products=ref<SkuData[]>([])
const getProductList=async()=>{
 let res=await reqSkuList(1,8);
 if(res.code===200){
    console.log(res.data.records)
   products.value= res.data.records
 }
}
console.log('d',products.value)
const goToDetail=(productId:number)=>{
    router.push({name:'producdetail',query:{id:productId}});
}
</script>
    
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.box-card {
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.card-item {
  display: inline-block;
  width: 23%;
  margin-right: 2%;
  margin-bottom: 20px;
  vertical-align: top;
  border: 1px solid #ebeef5;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.card-item:nth-child(4n) {
  margin-right: 0;
}

.card-img {
  width: 100%;
  height: 160px;
  border-radius: 2px 2px 0 0;
}

.card-content {
  padding: 14px;
  text-align: left;
}

.card-content h3 {
  margin: 5px 0;
  font-size: 16px;
  color: #303133;
}

.card-content p {
  margin: 5px 0;
  color: #606266;
  font-size: 14px;
}
</style>