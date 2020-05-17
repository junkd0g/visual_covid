import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://127.0.0.1::9080',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
  }
})

//new Vue({
  //el: '#app',
  //router,
  //template: '<App/>',
  //components: { App }
//})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
