import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
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
    
  ]
})

export default router
