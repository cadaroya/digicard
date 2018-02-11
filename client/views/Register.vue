<!--
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


*     Code history:
*     07/02/2018: 	File was created                    Daroya, Carlos Adrian A.
*     07/02/2018: 	Added Forms                         Daroya, Carlos Adrian A.
*     07/02/2018: 	Error handling                      Daroya, Carlos Adrian A.
*     08/02/2018: 	Connected to backend            	Daroya, Carlos Adrian A.
*
* 
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     HTML view for the register page
-->

<template>
     <div class="page">
          <h1>REGISTER</h1>
          <h1> Register </h1>
          <input type="email" name="email" v-model="email" placeholder="email"/>
          <input type="password" name="password" v-model="password" placeholder="password"/>
          <br>
            
          <button @click="register"> Register </button>
          <button> 
               <router-link to="/home"> Home </router-link>
          </button>
     </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default{
     data () {
          return {
               email: 'abc',
               password: '123',
               error: null
          }
     },
     methods:{
          async register () {
               try {
                    const response = await AuthenticationService.register({
                         email: this.email,
                         password: this.password
                    })
                    console.log(response.data)
               }
               catch (error){
                    this.error = error.response.data.error
                    console.log("yep,error")
                    console.log(this.error)
               }
          }
     }
}
</script>