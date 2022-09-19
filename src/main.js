import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(SuiVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
