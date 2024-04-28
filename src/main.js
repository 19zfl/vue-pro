import { createApp } from 'vue'
import blogApp from '@/components/modules/blog/BlogApp.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'element-plus/theme-chalk/index.css'

const app = createApp(blogApp)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')