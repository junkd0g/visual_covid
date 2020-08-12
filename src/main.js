import Vue from 'vue'
import App from './App.vue'
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



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
