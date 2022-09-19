<template>
  <div class="home">
    <img class="logo fat-only" alt="logo" src="https://picsum.photos/id/866/1200/800">
    <img class="logo2 thin-only" alt="logo2" src="https://picsum.photos/id/866/400/600">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style type="text/css" scoped>
  .logo, .logo2 {
    width: 100%;
    height: 100vh;
  }
</style>
