<template>
  <div id="app">
    
        <!-- <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Перевернуть сообщение</button>
        <br>
        <input v-model="messagea">
        <p>{{ messagea }}</p> -->

        <app-button/>

  </div>
</template>

<script>

export default {

    data: () => ({
        
    }),
    methods: {
        
    },
    components:{
        appButton: () => import('@/components/AppButton'),
        // Counter: () => import('@/components/Counter'),
    },
  
}
  
</script>

<style lang="stylus">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
