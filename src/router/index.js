import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Compare',
    name: 'Compare',
    component: () => import('../views/Compare.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/GlobalData',
    name: 'Diagrams',
    component: () => import('../views/GlobalData.vue'),
  },
  {
    path: '/Country/:id',
    name: 'Country',
    component: () => import('../views/Country.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
