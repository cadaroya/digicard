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
*     22/02/2018:   Added dash stripper                             Ocampo, Pauline
*     08/03/2018:   Added Table and some styling                    Cai, Jann Willem
*     18/03/2018:   Added back-end response for available seats     Daroya, Carlos Adrian A.
*     19/03/2018:   Added penguin.png                               Cai, Jann Willem
*     23/03/2018:   Clear textbox on incorrect input                Cai, Jann Willem
*     13/04/2018:   Edited style sheet                              Ocampo, Pauline L.
*
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The view showing students instructions on how to time in / time out
-->

<template>
     <div id ="instruct-wrapper">
          <app-header></app-header>
          <br><br>
          <div id = "input-section">
               <p>To book a computer, scan your ID with the provided barcode scanner.</p>
               <input type="text" @keyup.enter="goToScanned" name="studNo" ref="scanInput" v-model="studNo" placeholder="Scan your ID"/>
          </div>
          <br><br><br><br>
          <div id="seats-section">
               <span v-if="full == 0">
                    <see-seats></see-seats>
               </span>
               <span v-else>
                    <no-seats></no-seats>
               </span>
          </div>
          <br>
     </div>
</template>

<script>
/* eslint-disable */
import NoSeats from './NoSeats.vue'
import SeeSeats from './SeeSeats.vue'
import LogoPhoto from '../images/engglib.png'
import PenguinPhoto from '../images/penguin.png'
import SeatPickService from '../services/SeatPickService'
import AppHeader from './AppHeader.vue'
export default {
     name: 'Instruct',
     data () {
          return {
               studNo: '',
               studReturned: null,
               full: 0,
               seatList: null,
               currentstudents: null
          }
     },
     components: { LogoPhoto, PenguinPhoto, SeeSeats, AppHeader, NoSeats },
     methods: {
          goToScanned () {
               /* Remove all non-numeric characters (the dash and asterisks)
               if any, in the scanned studNo before pushing */
               this.studNo = this.studNo.replace(/\D/g, '');
               /* if the seats are full */
               if (this.full == 1) {
                    /* Check if student number is logged in */
                    var count, length = this.currentstudents.length;
                    for (count = 0; count < length; count++){
                         if (this.currentstudents[count].sno == this.studNo){
                              /* Log out the student */
                              this.$router.push('/scanned/' + this.studNo);
                              return;
                         }
                    }
                    this.studNo = '';
                    
               } else if (this.full == 0) {
                    this.$router.push('/scanned/' + this.studNo);
               }
          },
          async checkFull () {
               try{
                    const resp = await SeatPickService.checkFull() 
                    console.log("the data im looking for is here..")
                    console.log((resp.data))
                    console.log((resp.data)[0].length)
                    if((resp.data)[0].length == 0){
                         this.full = 1
                         this.currentstudents = (resp.data)[1]
                         console.log("elow")
                         console.log(this.full)
                    } else {
                         this.seatList = (resp.data)[0]
                    }
               } catch(err) {

               }

          }
     },
     mounted () {
          this.checkFull()
          this.$refs.scanInput.focus()
     }
}
</script>

<style scoped>
     #instruct-wrapper #input-section {
          padding: 0px;
          margin-bottom: 0px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 0px;
          width: 50%
     }

     #instruct-wrapper #input-section p {
          text-align: center;
     }

     #instruct-wrapper #seats-section {
          border-radius: 6px;
          margin: 0 5%;
     }

     #instruct-wrapper #input-section input[type=text] {
          border: none;
          border-radius: 6px;
          padding: 14px 20px;
          width: 60%;
          text-align: center;
          font-size: 1.5em;
     }
</style>
