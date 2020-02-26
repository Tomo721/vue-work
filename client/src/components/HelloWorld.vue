<template>
  <div class="hello">
    <h1 class="blue">{{ msg }}</h1>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 
}
</script>

<style lang="stylus" scoped>
  .blue
    color blue
</style>
