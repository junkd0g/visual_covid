import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

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
