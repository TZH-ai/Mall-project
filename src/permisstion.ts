import router from "./router";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
nprogress.configure({showSpinner:false});
import pinia from './store';
import useUserStore from './store/modules/user';
import setting from "./setting";

let userStore=useUserStore(pinia);
let username=userStore.username;
router.beforeEach(async(to:any, from:any, next:any) => {
    document.title=`${setting.title}-${to.meta.title}`
    nprogress.start();
    let token=userStore.token;
    let permit=['/index','/about','/services','/contact']
    if(permit.includes(to.path)){
      next();
      return
    }
    if(token){
        console.log('hhh',to.meta)
      if(to.path=='/login'){
        next({path:'/'});
       
      }else{
        if(username){
            next()
        }else{
            try {
            await userStore.userInfo();
            next();
            } catch (error) {
             userStore.userLogout();
             next({path:'/login',query:{redirect: to.path}});
            }
        }
      }
    }else{
       if(to.path=='/login'){
        next();
       }else{
        next({path:'/login',query:{redirect:to.path}});
       }
    }
});

router.afterEach((to:any, from:any) => {
    nprogress.done();
});
console.log(router)