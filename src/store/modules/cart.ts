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
        this.cartList.push(obj)
        console.log("调用了add",obj)
      },
      getCart(){
        return this.cartList
      }
    },
    getters:{},
})
export default useCartStore;