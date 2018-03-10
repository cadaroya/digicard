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
*
*     Code history:
*     07/03/2018:   File was created                    Ocampo, Pauline
*
*     Date created: 07 March 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     Choose seat
-->

<template>
     <div id="seats-wrapper">
          <select :value="seat" @change="$emit('update:seat', $event.target.value)">
               <option disabled value="">Please select one</option>
               <option v-for="seat in seats"  v-bind:key="seat">
                    {{seat}}
               </option>
          </select>
     </div>
</template>

<script>
/* eslint-disable */
     export default{
          props: ['selected'],
          data () {
               return{
                    seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                         20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
                    seat: ''
               }
          }
     }
</script>

<style scoped>
     #seats-wrapper .seats-list a {
          color: #e9f1f7;
          background-color: #4179f7;
          float: left;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: lighter;
          font-size: 20px;
          /* Padding value following was essentially trial and error w/ height... */
          padding: 24px 17px;
          text-decoration: none;
     }
     #seats-wrapper .seats-list a:hover {
          background-color: #2660e8
     }
</style>