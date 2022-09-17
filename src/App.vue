<template>
  <div id="app">
    <nav class="ui menu inverted">
      <a class="item" @click="visible = !visible">
        <i class="bars icon"></i>
      </a>
      <div class="right menu">
        <router-link class="item" to ="/">
          <i class="home icon"/>
        </router-link>
        <router-link class="item" to ="/about">
          <i class="info icon thin-only"/>
          <span class="fat-only">關於本公司</span>
        </router-link>
        <router-link class="item" to ="/news">
          <i class="bullhorn icon"/>
          <span class="fat-only">最新消息</span>
        </router-link>
        <router-link class="item" to ="/projects">
          <i class="edit icon"/>
          <span class="fat-only">熱銷新案</span>
        </router-link>
        <router-link class="item" to ="/classics">
          <i class="file alternate icon"/>
          <span class="fat-only">經典作品</span>
        </router-link>
        <router-link class="item" to ="/contact">
          <i class="phone icon"/>
          <span class="fat-only">聯絡方式</span>
        </router-link>
      </div>
    </nav>
    <sui-sidebar-pushable>
      <sui-menu
        is="sui-sidebar"
        :visible="visible"
        animation="overlay"
        width="thin"
        icon="labeled"
        inverted
        vertical
      >
        <sui-menu-item><router-link to="/"> <sui-icon name="home" /> 首頁 </router-link></sui-menu-item>
        <sui-menu-item><router-link to="/about">
          <sui-icon name="info" /> 關於本公司
        </router-link></sui-menu-item>
        <sui-menu-item><router-link to="/news">
          <sui-icon name="bullhorn" /> 最新消息
        </router-link></sui-menu-item>
        <sui-menu-item><router-link to="/projects">
          <sui-icon name="edit" /> 熱銷新案
        </router-link></sui-menu-item>
        <sui-menu-item><router-link to="/classics">
          <sui-icon name="file alternate" /> 經典作品
        </router-link></sui-menu-item>
        <sui-menu-item><router-link to="/contact">
          <sui-icon name="phone" /> 聯絡方式
        </router-link></sui-menu-item>
      </sui-menu>
      <sui-sidebar-pusher>
        <router-view/>
      </sui-sidebar-pusher>
    </sui-sidebar-pushable>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'DemoApp',
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    console.log(window.innerWidth)
    if (window.innerWidth > 700) {
      // this.visible = true
    }
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
}

@media screen and (max-width: 700px) {
  .fat-only {
    display: none !important;
  }
}

@media screen and (min-width: 701px) {
  .thin-only {
    display: none !important;
  }
}

nav.ui.menu {
  margin-bottom: 0;
  border-radius: 0;
}

.about {
  min-height: 80vh;
}

p {
  font-size: 18px;
}

</style>
