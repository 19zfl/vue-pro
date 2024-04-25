import { createApp } from 'vue'
import heApp from '././components/weather/HelloWorld.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'element-plus/theme-chalk/index.css'

const app = createApp(heApp)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')