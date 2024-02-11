 import { defineStore } from "pinia";
 import {reqLogin,reqUserInfo} from '@/api/user';
 import type {LoginFormData,LoginResponseData} from '@/api/user/type'
 import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute,  anyRoute,asyncRoute } from '@/router/routes'
import router from '@/router'
import cloneDeep from 'lodash/cloneDeep'
let dynamicRoutes = []
function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}

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
      async userInfo() {
        let res: userInfoResponseData = await reqUserInfo()
  
        if (res.code === 200) {
          this.username = res.data.name as string
          this.avatar = res.data.avatar as string
  
          let userAsyncRoute = filterAsyncRoute(
            cloneDeep(asyncRoute),
            res.data.routes,
          )
          this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
          dynamicRoutes = [...userAsyncRoute, anyRoute] // 记录动态添加的路由
          dynamicRoutes.forEach((route) => {
            router.addRoute(route) // 动态添加路由
          })
          return 'ok'
        } else {
          return Promise.reject(new Error(res.message))
        }
      },
    },
    getters:{

    }
 })
 export default useUserStore;