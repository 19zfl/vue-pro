<template>
    <p>
        每次增加1：<button @click="increment">+</button>
        数字：{{this.$store.state.add}}
    </p>
    <p>
        每次减少1：<button @click="reduction">-</button>
        数字：{{this.$store.state.reduce}}
    </p>
</template>
<script>
    export default {
        name:'App',
        methods: {
            increment() {
                this.$store.commit("increase")
            },
            reduction() {
                this.$store.commit("decrease")
            }
        }
    }
</script>