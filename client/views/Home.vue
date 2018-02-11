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
*     08/02/2018: 	File was created                    Ocampo, Pauline
*     08/02/2018: 	Routes                              Ocampo, Pauline
*     08/02/2018: 	Added SearchBar comp                Ocampo, Pauline
*
* 
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     HTML view for home page
-->

<template>
     <div class="page">
          <h1> Home Page </h1>
               <button> 
                    <router-link to="/reports"> Reports </router-link>
               </button>
          <p> Search a student. </p>
          <!-- <search-bar @foundStud="goToStud($event)"></search-bar> -->
          <search-bar></search-bar>
     </div>
</template>

<script>
     import SearchBar from 'components/SearchBar'
     export default {
          components: {
               SearchBar
          }
          /*,
          methods: {
               goToStud(stud) {
                    this.$router.push('/student/' + stud.sno)
               }
          }
          */
     }
</script>

