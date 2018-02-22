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


*     Code history:
*     16/02/2018:   File created                      Cai, Jann Willem B.
*     20/02/2018:   Changed to .vue file              Cai, Jann Willem B. 
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Change Credits field
*-->

<template>
     <div class='changecredits-wrapper'>
          <input v-model="amountdue" placeholder="Type the amount here"/>
          <br>
          <button v-on:click="changeamountdue"> Change Amount Due </button>
     </div>
</template>

<script>
     import ReportService from '../services/ReportService'
     export default {
          data: function() {
               return {
                    //report: this.report,
                    amountdue: this.report.amountdue
               }
          },
          methods: {
               async changeamountdue() {     
                    console.log(this.amountdue)
               }
          },
          props: ['report']
     }
</script>

<style scoped>
</style>