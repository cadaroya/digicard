/*     Digital Pink Card - All rights reserved
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


*     Code history:
*     06/02/2018: 	File Generated	                Daroya, Carlos Adrian A.
*     06/02/2018: 	Route for register              Daroya, Carlos Adrian A.
*     08/02/2018: 	Added all other routes          Ocampo, Pauline

*
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     This file administers all the routing in the frontend
*/

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Register from '../views/Register'
import Reports from '../views/Reports'
import SignUp from '../views/SignUp'
import Student from '../views/Student'
import AddStudent from '../views/AddStudent'
Vue.use(Router)

export default new Router({
     mode: 'hash',
     routes: [
          { path: '/', component: Login },
          { path: '/home', component: Home},
          { path: '/register', component: Register },
          { path: '/reports', component: Reports },
          { path: '/signup', component: SignUp },
          { path: '/student/:studNo', component: Student},
          { path: '/addstudent', component: AddStudent}
     ]
})
