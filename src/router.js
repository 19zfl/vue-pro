import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: () => import('./components/files/Home.vue')},
        {
            path: '/movie', component: () => import('./components/files/moview.vue'),
            children:[
                {path: '/id', component: () => import('./components/files/movieDetail.vue')}
            ] 
        },
        {
            path: '/about', component: () => import('./components/files/About.vue'),
            children: [
                {path: 'tab1', component: () => import('./components/pages/tab1.vue')},
                {path: 'tab2', component: () => import('./components/pages/tab2.vue')}]
        }]
})

export default router