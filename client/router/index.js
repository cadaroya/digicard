import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Register from '../views/Register'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
