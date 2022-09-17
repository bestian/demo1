<template>
  <div class="home">
    <img class="logo" alt="logo" src="https://picsum.photos/seed/picsum1/1024/800">
    <HelloWorld msg="歡迎"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style type="text/css" scoped>
  .logo {
    width: 100%;
    min-height: 88vh;
  }
</style>
