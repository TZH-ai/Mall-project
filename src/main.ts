import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import pinia from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import  './permisstion'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(ElementPlus,{
    locale: zhCn,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
    