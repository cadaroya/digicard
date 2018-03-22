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
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The view showing students instructions on how to time in / time out
-->

<template>
     <div id ="instruct-wrapper">
          <div class = "photo">
               <img src="../images/engglib.png"/>
          </div>
          <br><br>
          <div class = "input">
               <h1> Digital Pink Card System </h1>
               <p> Scan your ID with the provided barcode scanner! </p>
               <input type="text" @keyup.enter="goToScanned" name="studNo" ref="scanInput" v-model="studNo" placeholder="(Enter student number)"/>
          </div>
          <div class = "photo">
               <img src="../images/penguin.png" height="150" width="150"/>
          </div>
          <br><br><br><br>
          <span v-if="full == 0">
               <see-seats></see-seats>
          </span>
          <span v-else>
               <p> No seats, sorry! </p>
          </span>
          <br>
     </div>
</template>

<script>
/* eslint-disable */
import SeeSeats from './SeeSeats.vue'
import LogoPhoto from '../images/engglib.png'
import PenguinPhoto from '../images/penguin.png'
import SeatPickService from '../services/SeatPickService'
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
     components: { LogoPhoto, PenguinPhoto, SeeSeats },
     methods: {
          goToScanned () {
               /* Remove the dash, if any, in the scanned studNo before pushing */
               this.studNo = this.studNo.replace('-', '')
               /* if the seats are full */
               if (this.full == 1) {
                    var count, length = this.currentstudents.length
                    for (count = 0; count < length; count++){
                         if (this.currentstudents[count].sno == this.studNo){
                              this.$router.push('/scanned/' + this.studNo);
                         }
                    }
                    
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#instruct-wrapper {
     
}
#instruct-wrapper .photo {
     min-height: 13em;
     width: 33%;
     float: left;
}
#instruct-wrapper .input {
     min-height: 13em;
     width: 33%;
     float: left;
}
</style>
