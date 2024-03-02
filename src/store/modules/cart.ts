import { defineStore } from "pinia";
let useCartStore=defineStore('Cart',{
    state:()=>{
        return {
          cartList:[],
          test:'888'
        }
    },
    actions:{
      // addCart(store:any,obj:any){
      //   store.cartList.push(obj)
      //   console.log("调用了add",obj)
      // },
      addCart(obj:any){
        const exists = this.cartList.find(item => item.id === obj.id);
        if(exists){
          exists.cnt++;
        }else{
          this.cartList.push({...obj,cnt:1})
        }
       
      },
      getCart(){
        return this.cartList
      }
    },
    getters:{},
})
export default useCartStore;

