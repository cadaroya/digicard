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
*     21/02/2018:   File was created                                Ocampo, Pauline
*     22/02/2018:   Added "student not found" msg                   Ocampo, Pauline
*     08/03/2018:   Added if else for Timein/Timeout                Cai, Jann Willem
*     18/03/2018:   Added back-end response for available seats     Daroya, Carlos Adrian A.
*     19/03/2018:   Sync to Seats.vue                               Cai, Jann Willem B.
*     23/03/2018:   Disabled confirm button if no seat selected     Ocampo, Pauline L.
*     13/04/2018:   Edited style sheet, added auto-time-out         Ocampo, Pauline L.
*     22/04/2018:   Added scroll overflow                           Ocampo, Pauline L.
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The view displayed once a student has scanned their ID (either time in or out)
-->
<template>
     <div id="scanned-wrapper">
          <span v-if="studReturned">
               <span v-if="studReturned.session === 1">
                    <h1> Time In </h1>
                    <div class="scanned-wrapper-left">
                         <stud-info :studObj="studReturned"></stud-info>
                    </div>
                    <div class="scanned-wrapper-right">
                         <span v-if="noSeatsAvailable">
                              <p> No Seats Available :( </p>
                         </span>
                         <span v-else>
                              <div class="main-section">
                                   <seats :seat.sync="seat"></seats>
                              </div>
                              <div class="button-section">
                                   <button @click="confirmSeat" :disabled="seat == ''">Confirm Seat</button>
                              </div>
                         </span>
                    </div>
               </span>
               <span v-else-if="studReturned.session === 0">
                    <h1> Time Out </h1>
                    <div class="scanned-wrapper-left">
                         <stud-info :studObj="studReturned"></stud-info>
                    </div>
                    <div class="scanned-wrapper-right">
                         <div class="main-section">
                              <h1> Cost: </h1>
                              <p>₱{{this.studReturned.amountdue}}.00</p>
                         </div>
                    </div>
               </span>
          </span>
          <span v-else>
               <h1> Scanned Unidentified ID </h1>
               <p>Student not found.</p>
               <li><router-link to='/'>(back to instruct screen)</router-link></li>
          </span>
     </div>
</template>

<script>
/* eslint-disable */
import Seats from './Seats.vue'
import StudInfo from './StudInfo.vue'
import TimeInService from '../services/TimeInService'
import SeatPickService from '../services/SeatPickService'
/* import Seats from './Seats.vue' */

export default {
     name: 'Scanned',
     props: ['studNo'],
     data () {
          return {
               studReturned: null,
               seat: '',
               rid: null,
               noSeatsAvailable: false,
               availableSeats: null
          }
     },
     components: { StudInfo , Seats },
     methods: {
          async timein () {
               const response = await TimeInService.timein({
                    studNo: this.studNo
               })
               console.log("hey")
               this.studReturned = (response.data)[0]
               this.availableSeats = (response.data)[1]
               var x = this.availableSeats
               console.log("available seats: ")
               for(var i = 0; i < x.length; i++){
                   console.log(x[i].seatno)
               }
               console.log("--------")

               if (this.studReturned == null) {
                    return
               } else if (this.studReturned == "full") {
                    noSeatsAvailable = true
                    return
               } else {
                    this.rid = this.studReturned.rid
               }
          },
          async confirmSeat () {
               if (this.studReturned == null) {
                    console.log('Student is null in confirmSeat')
                    return
               } else if (this.seat == '') {
                    return
               } else {
                    console.log("hello i am here")
                    console.log(this.rid)
                    console.log(this.seat)
                    const seatResponse = await SeatPickService.pickSeat({
                         rid: this.rid,
                         seatNo: this.seat
                    })
                    this.$router.push('/')
               }
          },
          backToHome() {
               this.$router.push('/');
          }
     },
     async mounted () {
          try {
               await this.timein()

               if (this.studReturned != null) {
                    if (this.studReturned.session == 0) {
                         /* Time out; */
                         /* Go back to home page after 8 seconds */
                         setTimeout(this.backToHome, (8 * 1000));
                    }
               }
          } catch (error) {
               console.error(error)
          }
     }
}
</script>

<style scoped>
     #scanned-wrapper > div {
          min-height: 400px;
          padding: 1%;
     }
     .scanned-wrapper-left {
          float: left;
          width: 40%;
     }
     .scanned-wrapper-right {
          float: right;
          width: 60%;
     }
     .scanned-wrapper-right .main-section {
          border-radius: 6px;
          padding-top: 10px;
          background-color: #FFFFFF;
          height: 26em;
          overflow: scroll;
     }

     button {
          background-color: green;
          border: none;
          border-radius: 6px;
          color: white;
          margin: 10px;
          padding: 15px;
          font-size: 1.2em;
     }
     button:hover {
          background-color: lightgreen;
     }
     button:disabled {
          background-color: grey;
     }
</style>
