 import { defineStore } from "pinia";
 let useUserStore=defineStore('User',{
    state:()=>{
        return{

        }
    },
    actions:{
        userLogin(){
            //用户登录的方法
            console.log('1234')
        }
    },
    getters:{

    }
 })
 export default useUserStore;