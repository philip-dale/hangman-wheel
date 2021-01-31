import Vue from 'vue'
import VueRouter from 'vue-router'
import Setup from '../views/setup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/play',
    name: 'Play',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/play.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
