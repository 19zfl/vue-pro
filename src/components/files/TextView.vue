<template>
    <h1>{{msg}}</h1>
</template>

<script>
export default {
    name: 'TextView',
    props: {
        msg: String
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>