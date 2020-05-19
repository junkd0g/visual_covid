import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'nprogress/nprogress.css';
import VueMeta from 'vue-meta'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

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

new Vue({
  router,
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Covid-19 info portal',
  },
  render: h => h(App),
}).$mount('#app')
