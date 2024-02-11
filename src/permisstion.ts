import router from "./router";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
import pinia from './store';
import useUserStore from './store/modules/user';


let userStore=useUserStore(pinia);
let username=userStore.username;
router.beforeEach(async(to:any, from:any, next:any) => {
    nprogress.start();
    let token=userStore.token;
    if(token){
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