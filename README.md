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

