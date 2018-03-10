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
*     06/03/2018:   File was created                    Cai, Jann Willem
*
*
*     Date created: 06 March  2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     Showing seats
-->

<template>
     <div id="see-seats-wrapper">
          <div class = "computer-wrapper">
               <div v-for="seat in seats" v-bind:key="seat">
                    <div v-if="seat === 0">
                         <div class = "computer unavailable">
                              X <br>
                              {{seat}}
                         </div>
                    </div>
                    <div v-else-if="seat <= 30">
                         <div class = "computer mac">
                              Mac <br>
                              {{seat}}
                         </div>
                    </div>
                    <div v-else-if="seat > 30">
                         <div class = "computer windows">
                              Windows <br>
                              {{seat}}
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
/* eslint-disable */
     export default {
          props: ['selected'],
          data () {
               return {
                    seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                         20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
                    seat: ''
               }
          }
     }
</script>

<style scoped>
#see-seats-wrapper .computer-wrapper {
     padding-top: 20px;
}

#see-seats-wrapper .computer {
     font-size: 20px;
     text-align: center;
     display:inline-block;
     padding-top: 5px;
     position: relative;
     margin: 5px;
     float:left;
     width: 110px;
     height: 50px;
     border: 1px solid black;
}

#see-seats-wrapper .computer.windows {
     background-color: lightblue;
}
#see-seats-wrapper .computer.mac {
     background-color: white; 
}
#see-seats-wrapper .computer.unavailable {
     background-color: #DC143C; 
}
</style>