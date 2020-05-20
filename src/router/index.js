import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import NProgress from 'nprogress'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

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
  },
  {
    path: '/Diagrams',
    name: 'Diagrams',
    component: () => import('../views/TotalDiagramsView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
