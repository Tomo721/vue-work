<template>
  <div>
      <p>d</p>
      <h1> {{count}} </h1>
    <button @click='increment'> Увеличить </button>
       
  </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        increment () {
            this.$store.commit('increment')
        },
    }
}
  
</script>

<style lang="stylus">

</style>
