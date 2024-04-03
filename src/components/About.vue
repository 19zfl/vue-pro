<template>
    <div class="about-container">
        <h3>About组件</h3>
        <router-link to="/about/tab1">Tab1组件</router-link>
        <router-link to="/about/tab2">Tab2组件</router-link>
        <br><br>
        <router-view></router-view>
    </div>
</template>
<style scoped>
.about-container {
    min-height: 150px;
    background-color: #f2f2f2;
    padding: 15px;
}
.about-container a {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 0 5px;
}
.about-container a.router-link-active {
  color: #000;
  background-color: #deebf6;
}
</style>