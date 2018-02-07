import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Register from '../views/Register'
import Reports from '../views/Reports'
import SignUp from '../views/SignUp'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home},
    { path: '/register', component: Register },
    { path: '/reports', component: Reports },
    { path: '/signup', component: SignUp }
  ]
})
