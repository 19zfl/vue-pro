<script>
import {marked} from 'marked'
export default {
  props: ["content"],
  computed: {
    data() {
      return marked(this.content)
    }
  }
}
</script>

<template>
  <p v-html="data"></p>
</template>

<style scoped>

</style>