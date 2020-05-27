import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'nprogress/nprogress.css';
import VueMeta from 'vue-meta'
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

Vue.config.productionTip = false

// From some method in one of your Vue components
// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day
 
// To get the value of a cookie use

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
