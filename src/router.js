import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import ScrollBar from './views/ScrollBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/scroll',
      component: ScrollBar
    },
    {
      path: '/popper',
      component: () => import('./views/popper.vue')
    }
  ]
})
