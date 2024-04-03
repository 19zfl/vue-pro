<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <TextView msg="这是自定义的组件TextView"/> -->
  <div class="app-container">
    <h1>App根组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'
import TextView from './components/TextView.vue'

export default {
  name: 'App',
  components: {
  }
}
</script> -->
<style scoped>
.app-container {
  text-align: center;
  font-size: 16px;
}
.app-container a {
  padding: 10px;
  color: #000;
}
.app-container a.router-link-active {
  color: #fff;
  background-color: #000;
}
</style>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
