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
*     19/03/2018:   Sync to Scanned.vue                 Cai, Jann Willem B.
*     19/03/2018:   Changed getSeatInfo() a bit         Cai, Jann Willem B.
*     20/03/2018:   Added styling                       Cai, Jann Willem B.
*     21/03/2018:   Added indicator on seat picked      Cai, Jann Willem B.
*     14/04/2018:   Edited stylesheet                   Ocampo, Pauline L.
*
*
*     Date created: 07 March 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     Choose seat
-->

<template>
     <div id="seats-wrapper">
          <div class="computer-wrapper">
          <p> Click on a seat below, then click confirm. </p>
               <div v-for="computer in seatList" v-bind:key="computer.seatno">
                    <div class = "seats-list">
                         <a v-on:click = "updateParent(computer.seatno)"
                            v-bind:class = "{active: seat == computer.seatno}">
                              <div v-if="computer.os == 'mac'">
                                        <div class = "computer mac">
                                             Mac <br>
                                             {{computer.seatno}}
                                        </div>
                              </div>
                              <div v-else-if="computer.os == 'windows'">
                                   <div class = "computer windows">
                                        Windows <br>
                                        {{computer.seatno}}
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
/* eslint-disable */
import SeatPickService from '../services/SeatPickService'
     export default{
          data () {
               return{
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
                         console.log((resp.data)[0].length)
                         if((resp.data)[0].length == 0){
                              this.full = 1
                              console.log("elow")
                              console.log(this.full)
                         } else {
                              this.seatList = (resp.data)[0]
                         }
                    } catch(err) {

                    }
               },
               updateParent(seatno) {
                    this.seat = seatno
                    this.$emit('update:seat', seatno)
               }
          },
          mounted () {
               this.getSeatInfo()
          }
     }

</script>

<style scoped>
     #seats-wrapper {
       padding: 10px;
     }
     #seats-wrapper .computer-wrapper {
          border-radius: 6px;
          padding-top: 10px;
          background-color: #FFFFFF;
          height: 26em;
     }
     #seats-wrapper .computer {
          font-size: 20px;
          text-align: center;
          display:inline-block;
          padding-top: 5px;
          position: relative;
          margin: 5px;
          float: left;
          width: 110px;
          height: 50px;
          border: 1px solid black;
     }

     #seats-wrapper .computer.windows {
          background-color: lightblue;
     }
     #seats-wrapper .computer.mac {
          background-color: white; 
     }
     #seats-wrapper .computer.unavailable {
          background-color: #DC143C; 
     }

     #seats-wrapper .seats-list a {
          float: left;
          padding: 0.5em 0.5em;
     }
     #seats-wrapper .seats-list a:hover {
          background-color: blue;
     }
     #seats-wrapper .active {
          float: left;
          padding: 0.5em 0.5em;
          background-color: blue;
     }
</style>