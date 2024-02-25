<template>
    <div class="cart-container">
      <h2>购物车</h2>
      <div class="cart-items">
        <div v-for="(item, index) in cartStore.cartList" :key="index" class="cart-item">
          <div class="left">
            <div>
              <p class="item-name">{{ item.skuName }}</p>
              <p>{{ item.skuDesc}}</p>
            <p class="item-price">{{ item.price }}元</p>
            </div>
          <button @click="removeItem(index)" class="remove-button">删除</button>
          </div>
          <div class="cart-img">
          <img :src="item.skuDefaultImg" alt="">
        </div>
        </div>
   
      </div>
      <div class="total">总计：{{ getTotal() }}</div>
      <button @click="checkout" class="checkout-button">结算</button>
      
    </div>
  </template>
  
  <script setup>
  import { ref ,onMounted} from 'vue';
  import useCartStore from '@/store/modules/cart'
  let cartStore=useCartStore();
    console.log(cartStore.test)
  onMounted(()=>{
    let cartStore=useCartStore();
  })
  // const cartItems = ref([
  //   { name: '商品1', price: 10 },
  //   { name: '商品2', price: 20 },
  //   { name: '商品3', price: 30 },
  // ]);

  const removeItem = (index) => {
    cartStore.cartList.splice(index, 1);
  };
  
  const getTotal = () => {
    return cartStore.cartList.reduce((total, item) => total + item.price, 0);
  };
  
  const checkout = () => {
    alert('结算成功！');
  };
  </script>
  
  <style lang="scss" scoped>
  
  .cart-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .cart-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  
  .cart-item {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    transition: transform 0.3s ease;
    display: flex;
    .left{
      div{
        width: 125px;
      height: 125px;
      }
      p{
       white-space: nowrap;
       text-overflow: ellipsis;
       overflow: hidden;
      }
    }
    .cart-img{
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
  
  .cart-item:hover {
    transform: scale(1.05);
  }
  
  .item-name {
    font-weight: bold;
  }
  
  .item-price {
    color: #ff6700;;
  }
  
  .remove-button {
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .remove-button:hover {
    background-color: #d32f2f;
  }
  
  .total {
    text-align: right;
    margin-top: 20px;
    font-weight: bold;
  }
  
  .checkout-button {
    margin-top: 20px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .checkout-button:hover {
    background-color: #388e3c;
  }
  </style>
  