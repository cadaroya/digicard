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
*     07/03/2018:   File was created                    Cai, Jann Willem
*     18/03/2018:   Changed to make table from database Cai, Jann Willem
*
*     Date created: 07 March 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     See Seat Availability Table
-->
<template>
     <div id="see-seats-wrapper">
          <div class = "computer-wrapper">
               <p> Available Seats </p>
               <div v-for="seat in seatList" v-bind:key="seat.seatno">
                    <div v-if="seat.os == 'mac'">
                         <div class = "computer mac">
                              Mac <br>
                              {{seat.seatno}}
                         </div>
                    </div>
                    <div v-else-if="seat.os == 'windows'">
                         <div class = "computer windows">
                              Windows <br>
                              {{seat.seatno}}
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import SeatPickService from '../services/SeatPickService'
/* eslint-disable */
     export default {
          props: ['selected'],
          data () {
               return {
                    /*
                    seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
                         20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
                    
                    */
                    seat: '',
                    full: 0,
                    seatList: null
               }
          },
          methods: {
               async getSeatInfo () {
                    try{
                         const resp = await SeatPickService.checkFull() 
                         console.log("the data im looking for is here..")
                         console.log((resp.data))
                         if((resp.data).length == 0){
                              this.full = 1
                              console.log("elow")
                              console.log(this.full)
                         } else {
                              this.seatList = resp.data
                         }
                    } catch(err) {

                    }
               }
          },
          mounted () {
               this.getSeatInfo()
          }
     }
</script>

<style scoped>
#see-seats-wrapper .computer-wrapper {
     padding-top: 1em;
     background-color: orange;
     margin-top: 6em;
     margin-left: 6em;
     margin-right: 6em;
     height: 29em;
}

#see-seats-wrapper .computer {
     font-size: 1.25em;
     text-align: center;
     display:inline-block;
     padding-top: 1em;
     position: relative;
     margin: 1em;
     float:left;
     width: 6em;
     height: 3em;
     border: 0.1em solid black;
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