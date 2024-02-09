export  const constantRoute=[
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/AboutView.vue')
      },
      {
        path:'/Home',
        name:'Home',
        component:()=>import('@/views/Home.vue')
  
      },
      {
        path:'/Services',
        name:'Services',
        component:()=>import('@/views/Services.vue')
  
      },
      {
        path:'/Contact',
        name:'Contact',
        component:()=>import('../views/Contact.vue')
  
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue') 
      },
]

export const anyRoute = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
  },
}