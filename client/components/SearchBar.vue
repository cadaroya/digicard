<!--  Digital Pink Card - All rights reserved
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
*
*     Code history:
*     08/02/2018:   File Created                       Ocampo, Pauline
*     20/02/2018:   Changed to .vue file               Cai, Jann Willem B.
*     07/03/2018:   Added basic styling                Ocampo, Pauline L.
*     21/03/2018:   Added search on Enter-press        Ocampo, Pauline L.
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*
*     File purpose:
*     Holds the search bar render function
*-->

<template>
     <div id='searchbar-wrapper'>
          <input v-model="searchStr" @keyup.enter="goToStudent" placeholder="Enter Student Number" />
          <button v-on:click="goToStudent"> Search </button>
     </div>
</template>

<script>
     import StudentService from '../services/StudentService'

     export default {
          data: function() {
               return {
                    searchStr: ''
               }
          },
          methods: {
               async goToStudent() {
                    this.$router.push('/student/' + this.searchStr);
               }
          }
     }
</script>

<style scoped>
     #searchbar-wrapper {
          margin-bottom: 0px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 0px;
          padding: 50px 0px;
          text-align: center;
     }

     #searchbar-wrapper button {
          background-color: #4179f7;
          border: none;
          border-radius: 50%;
          color: #e9f1f7;
          font-size: 17px;
          height: 80px;
          padding: 5px;
          position: relative;
          right: 30px;
          width: 80px;
     }

     #searchbar-wrapper button:hover {
          background-color: #2660e8
     }

     #searchbar-wrapper input {
          border: #f9f9f9;
          box-shadow: 0px 0px 30px 6px #eaeaea;
          font-size: 17px;
          height: 40px;
          outline: none;
          padding-left: 3%;
          width: 55%;
     }
     
     #searchbar-wrapper ::placeholder{
          color: #78aeee;
     }
</style>