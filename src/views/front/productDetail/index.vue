<template>
  <div class="product-detail">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="500px" width="500px">
    <el-carousel-item v-for="item in  data.skuImageList" :key="item">
      <img :src="item.imgUrl" alt="" width="100%" height="100%">
      <h3 text="2xl" justify="center">{{ item.imgUrl }}</h3>
     
    </el-carousel-item>
    
  </el-carousel>
    </div>

    <div class="product-info">
      <!-- 右侧商品信息部分 -->
      <el-row style="margin: 10px 0">
        <el-col :span="8">名称</el-col>
        <el-col :span="16">{{ data.skuName }}</el-col>
      </el-row>
      <el-row style="margin: 10px 0">
        <el-col :span="8">描述</el-col>
        <el-col :span="16">{{ data.skuDesc }}</el-col>
      </el-row>
      <el-row style="margin: 10px 0">
        <el-col :span="8">价格</el-col>
        <el-col :span="16">{{ data.price }}</el-col>
      </el-row>
      <el-row style="margin: 10px 0">
          <el-col :span="6">平台属性</el-col>
          <el-col :span="18">
            <el-tag
              style="margin: 5px"
              v-for="item in data.skuAttrValueList"
              :key="item.id"
            >
              {{ item.valueName }}
            </el-tag>
          </el-col>
        </el-row>
        <el-row style="margin: 10px 0">
          <el-col :span="6">销售属性</el-col>
          <el-col :span="18">
            <el-tag
              style="margin: 5px"
              v-for="item in data.skuSaleAttrValueList"
              :key="item.id"
            >
              {{ item.saleAttrValueName }}
            </el-tag>
          </el-col>
        </el-row>
        <el-row>
            <el-col :span="6"> </el-col>
            <el-col :span="16"><button @click="addToCart(data)">加入购物车</button></el-col>
          </el-row>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { useRoute,useRouter } from 'vue-router';
  import useCartStore from '@/store/modules/cart';
  import axios from 'axios';
  import {ref,onMounted} from 'vue';
  import {
  reqSkuList,
  reqSaleSku,
  reqCancelSale,
  reqSkuInfo,
} from '@/api/product/sku'
import type {
  SkuData,
} from '@/api/product/sku/type'
  const router=useRouter();
  const route = useRoute();
  let data=ref({})
  let cart=ref([])
  let cartStore=useCartStore();
  const productId = parseInt(route.params.id);
  onMounted(async()=>{
    let productId=router.currentRoute.value.query.id;
    let res =await reqSkuInfo(productId);
    if(res.code==200){
      data.value=res.data
      console.log('xxx',res.data)
      // console.log('datade',data.value)
    }
  })
  console.log(router.currentRoute.value.query.id)
  const addToCart = (data:any) => {
     router.push('/cart')
     cartStore.addCart(data)
  };

  </script>
  <style scoped>
  .product-detail {
    display: flex;
  }
  
  .carousel {
  width: 100%;
  overflow: hidden;
  flex: 2;
  align-self: center;
  height: 500px; 
}

  
  .carousel-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .product-info {
    flex: 1;
    padding: 20px;
  }
  .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
  </style>