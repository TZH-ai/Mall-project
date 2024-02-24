import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute, MyconstantRoute } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute.concat(MyconstantRoute), // 将 MyconstantRoute 合并到 constantRoute 中
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
