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
*     Code history:
*     08/02/2018:   File was created                    Ocampo, Pauline
*     08/02/2018:   Added UI components                 Ocampo, Pauline
*     08/02/2018:   Connected to backend                Daroya, Carlos Adrian A.
*     21/02/2018:   Changed response to 1D              Daroya, Carlos Adrian A.
*     07/03/2018:   Added basic styling                 Ocampo, Pauline L.
*     19/03/2018:   Added student info box styling      Ocampo, Pauline L.
*     21/03/2018:   Fixed code spacing                  Ocampo, Pauline L.
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     The HTML view for /student/{sno} route
-->

<template>
     <div id="student-wrapper">
          <div id="student-wrapper-left">
               <span v-if="stud"><stud-info :studObj="stud"></stud-info></span>
               <span v-else><p> Student information not found </p></span>
          </div>
          <div id="student-wrapper-right">
               <span v-if="stud && studLog"><stud-log :studLogObj="studLog"></stud-log></span>
               <span v-else><p> No logs available </p></span>
          </div>
     </div>
</template>

<script>
     import StudInfo from 'components/StudInfo.vue'
     import StudLog from 'components/StudLog.vue'
     import StudentService from '../services/StudentService'
     export default {
          data() {
               return {
                    stud: null,
                    studLog: null,
                    log: null,
                    searchStr: null
               }
          },
          components: { StudInfo, StudLog },
          methods: {
               async loadStudent() {
                    try {
                         this.searchStr = this.$route.params.studNo
                         //this.$router.push('/student/' + this.searchStr);
                         // this.$router.push('/student');
                         const response = (await StudentService.index({
                         search: this.searchStr
                         }, this.searchStr)).data
                         // You can call stud.sno, stud.first_name, etc
                         this.stud = response[0]
                         this.studLog = response[1]
                         // this.log = response[1]
                         console.log('hello')
                         console.log(this.stud.first_name)
                         console.log('student log:')
                         console.log(this.studLog)
                         // console.log(this.log)
                         // console.log('sending stud')
                         // this.$emit('foundStud', stud)
                    } catch(error){
                         // console.log(error)
                         console.log("An error occurred when searching the student " + this.searchStr + ". Please try again.")
                    }
               }
          },
          async mounted () {
               try{
                    this.loadStudent()
               } catch (error) {
                    console.error(error)
               }
          }
     }
</script>

<style scoped>
     #student-wrapper {
          overflow: hidden;
     }

     #student-wrapper > div {
          float: left;
          min-height: 400px;
          overflow: auto;
          padding: 1%;
     }

     #student-wrapper-left {
          width: 38%;
     }
     
     #student-wrapper-right {
          width: 58%;
     }
</style>