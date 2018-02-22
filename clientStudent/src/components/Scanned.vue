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
*     21/02/2018:   File was created                    Ocampo, Pauline
*     22/02/2018:   Added "student not found" msg       Ocampo, Pauline
*
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The view displayed once a student has scanned their ID (either time in or out)
-->
<template>
     <div>
          <h1> Successfully Scanned ID </h1>
          <span v-if="studReturned"><stud-info :studObj="studReturned"></stud-info></span>
          <span v-else><p>Student not found.</p></span>
          <li><router-link to='/'>(back to instruct screen)</router-link></li>
     </div>
</template>

<script>
import StudInfo from './StudInfo.vue'
import TimeInService from '../services/TimeInService'
export default {
     name: 'Scanned',
     props: ['studNo'],
     data () {
          return {
               studReturned: null
          }
     },
     components: { StudInfo },
     methods: {
          async timein () {
               const response = await TimeInService.timein({
                    studNo: this.studNo
               })
               console.log(response.data)
               this.studReturned = response.data
          }
     },
     async mounted () {
          try {
               this.timein()
          } catch (error) {
               console.error(error)
          }
     }
}
</script>

<style scoped>
</style>
