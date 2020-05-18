import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import NProgress from 'nprogress'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Compare',
    name: 'Compare',
    component: () => import('../views/CurveView.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//router.beforeResolve((to, next) => {
  // If this isn't an initial page load.
  //if (to.name) {
    // Start the route progress bar.
    //NProgress.start()
  //}
  //next()
//})

//router.afterEach(() => {
  // Complete the animation of the route progress bar.
  //NProgress.done()
//})


export default router
