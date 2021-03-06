/*
*     Digital Pink Card - All rights reserved
*     Copyright (C) 2018
*     Written by:
*     Cai, Jann Willem
*     Daroya, Carlos Adrian
*     Ocampo, Pauline
*
*     This program is free software: you can redistribute it and/or modify
*     it under the terms of the GNU General Public License as published by
*     the Free Software Foundation, either version 3 of the License, or
*     (at your option) any later version.
*
*     This program is distributed in the hope that it will be useful,
*     but WITHOUT ANY WARRANTY; without even the implied warranty of
*     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*     GNU General Public License for more details.
*
*     You should have received a copy of the GNU General Public License
*     along with this program.  If not, see <https://www.gnu.org/licenses/>.
*     This is a course requirement for CS 192
*     Software Engineering II under the
*     supervision of Asst. Prof. Ma. Rowena C.
*     Solamo of the Department of Computer
*     Science, College of Engineering, University
*     of the Philippines, Diliman for the AY 2017-2018
*
*     Code history:
*     21/02/2018:   File was created                    Daroya, Carlos
*     22/02/2018:   Edited routes                       Ocampo, Pauline
*
*
*     Date created: 23 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     routing file
*/

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
               //path: '/scanned/:studNo/:seat',
               path: '/scanned/:studNo',
               name: 'Scanned',
               component: Scanned,
               props: true
          }
     ]
})
