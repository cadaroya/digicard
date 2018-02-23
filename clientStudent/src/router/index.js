/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Instruct from '@/components/Instruct'
import Scanned from '@/components/Scanned'

Vue.use(Router)

export default new Router({
     routes: [
          {
               path: '/',
               name: 'Instruct',
               component: Instruct
          },
          {
               path: '/scanned/:studNo',
               name: 'Scanned',
               component: Scanned,
               props: true
          }
     ]
})
