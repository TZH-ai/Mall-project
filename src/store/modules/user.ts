 import { defineStore } from "pinia";
 import {reqLogin} from '@/api/user';
 import type {LoginFormData,LoginResponseData} from '@/api/user/type'
 import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute,  anyRoute } from '@/router/routes'
 let useUserStore=defineStore('User',{
    state:()=>{
        return{
          token: GET_TOKEN()!,
          menuRoutes: constantRoute,
          username: '',
          avatar: '',
          buttons: [],
        }
    },
    actions:{
      async userLogin(data: LoginFormData) {
        let res: LoginResponseData = await reqLogin(data)
        // success=>token
        // error=>error.message
        if (res.code === 200) {
          this.token = res.data as string
          // 持久化
          SET_TOKEN(res.data as string)
          return 'ok'
        } else {
          return Promise.reject(new Error(res.data as string))
        }
      },
    },
    getters:{

    }
 })
 export default useUserStore;