<template>
  <div class="about">
    <div class="ui segment container]">
      <h1>聯絡方式</h1>
      <img class="logo" alt="logo" src="https://picsum.photos/seed/picsum1/300/200" />
      <h3><i class = "map icon"/>地址：xx市xx區xx路xx段xx號xx樓：
        <br class="thin-only" /><a href="https:map.google.com/">
        (看地圖)</a>
      </h3>
      <h3><i class = "phone icon"/>電話：09xx-xxx-xxx：
        <!-- <br class="thin-only" /><a href="tel:09xxxxxxxx">
        (<i class = "phone icon"/>打電話)</a> -->
      </h3>
      <h3><i class = "mail icon"/>Email：test@gmail.com：
        <!-- <br class="thin-only" /><a href="mailto:test@gmail.com">
        (<i class = "mail icon"/>寫email)</a>  -->
      </h3>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ContactView'
}
</script>

<style type="text/css" scoped>
  .logo {
    border-radius: 30px;
  }
</style>
