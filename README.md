# vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 知识点积累：
#### 更改端口：

第一种：

在根目录创建vue.config.js，添加以下代码

```js
module.exports = {
  devServer: {
    port: 8000
  }
}
```

第二种：

修改vue-cli源码，打开node_modules/@vue/cli-service/lib/commands/serve.js文件

```
const defaults = {
  host: '0.0.0.0',
  port: 80,
  https: false
}
```

如果同时设置了serve.js、vue.config.js最终的启动端口是以vue.config.js内的端口为准。

#### 路由配置：

路由配置基本使用步骤：

- 定义路由组件
- 定义路由链接和路由视图
- 创建路由模块
- 导入并挂载路由模块

基本使用：

1.定义路由组件：src/components/创建Home.vue和About.vue

```vue
<!-- Home.vue文件 -->
<template>
  <div class="home-container">
    <h3>Home组件</h3>
  </div>
</template>
<style scoped>
.home-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}
</style>

<!-- About.vue文件 -->
<template>
  <div class="about-container">
    <h3>About组件</h3>
  </div>
</template>
<style scoped>
.about-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}
</style>
```

2.定义路由链接和路由视图：在App.vue中通过``<router-link></router-link>``标签定义路由链接方便在不同组件之间切换

```vue
<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
```

3.创建路由模块：

在src中创建router.js文件作为路由模块，并在该文件中导入路由相关函数

```vue
import { createRouter, createWebHashHistory } from 'vue-router'
```

在router.js文件中导入需要被路由控制的Home组件和About组件

```vue
import Home from './components/Home.vue'
import About from './components/About.vue'
```

在router.js文件中创建路由实例对象

```vue
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About },
  ]
})
```

在router.js文件中导出路由实例对象

```vue
export default router
```

4.导入并挂载路由模块：在src/main.js文件中导入并挂载路由模块

```vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'	// 导入路由模块
const app = createApp(App)
app.use(router)		// 挂载路由模块
app.mount('#app')
```

#### 路由重定向：

路由重定向可以使用户在访问一个URL地址时，强制跳转到另一个URL地址，从而展示特定的组件。通过路由匹配规则中的redirect属性可以指定一个新的路由地址，从而实现路由重定向。

```js
routes: [
        {path: '/', redirect: '/home'}, // 实现当用户访问“/”路径时，将路由重定向到“/home”路径
        {path: '/home', component: () => import('./components/Home.vue')}, // 懒加载方式加载组件
        {path: '/about', component: () => import('./components/About.vue')}
    ]
```

#### 嵌套路由：

嵌套路由是指通过路由实现组件的嵌套展示，它主要由页面结构决定。实际项目中的应用界面通常由多层嵌套的组件组合而成，为了使多层嵌套的组件能够通过路由访问，路由也需要具有嵌套关系，也就是在路由里面嵌套它的子路由。

路由匹配规则中通过children属性定义子路由匹配规则。

#### 动态路由：

动态路由是一种路径不固定的路由，路径中可变的部分被称为动态路径参数（Dynamic Segment），使用动态路径参数可以提高路由规则的可复用性。在Vue Router的路由路径中，使用“:参数名”的方式可以在路径中定义动态路径参数。

获取动态路径参数值的2种方式：使用$route.params获取参数值、使用props获取参数值。

