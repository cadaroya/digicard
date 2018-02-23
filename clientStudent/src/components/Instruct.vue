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
*     22/02/2018:   Added dash stripper                 Ocampo, Pauline
*
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The view showing students instructions on how to time in / time out
-->

<template>
     <div>
          <h1> Digital Pink Card System </h1>
          <p> Scan your ID with the provided barcode scanner! </p>
          <br>
          <input type="text" @keyup.enter="goToScanned" name="studNo" ref="scanInput" v-model="studNo" placeholder="(Enter student number)" />
          <br>
     </div>

</template>

<script>
/* eslint-disable */
export default {
     name: 'Instruct',
     data () {
          return {
               studNo: '',
               studReturned: null
          }
     },
     methods: {
          goToScanned () {
               /* Remove the dash, if any, in the scanned studNo before pushing */
               this.studNo = this.studNo.replace('-', '')
               this.$router.push('/scanned/' + this.studNo)
          }
     },
     mounted () {
          this.$refs.scanInput.focus()
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
