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
*     23/03/2018:   Added no free hrs remaining msg     Ocampo, Pauline L.
*
*
*     Date created: 21 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*     File purpose:
*     Component that displays passed-in student information
-->

<template>
     <div id="stud-info-wrapper">
          <table>
               <tr>
                    <th>STUDENT NUMBER</th>
                    <td>{{studNo}}</td>
               </tr>
               <tr>
                    <th>LAST NAME</th>
                    <td>{{lastName}}</td>
               </tr>
               <tr>
                    <th>FIRST NAME</th>
                    <td>{{firstName}}</td>
               </tr>
               <tr>
                    <th>COLLEGE</th>
                    <td>{{college}}</td>
               </tr>
               <tr>
                    <th>STATUS</th>
                    <td>
                         <p v-if="isInSession" class="active-marker">Active</p>
                         <p v-else class="inactive-marker">Inactive</p>
                    </td>
               </tr>
               <tr>
                    <th>FREE HRS</th>
                    <td>
                         <span v-if="this.freehrs == null || this.freehrs.startsWith('-') || this.freehrs == '00:00:00'">
                              No free hours remaining.
                         </span>
                         <span v-else-if="this.freehrs != null">
                              {{freehrs}}
                         </span>
                    </td>
               </tr>
          </table>
     </div>
</template>

<script>
/* eslint-disable */
     export default {
          
          props: ['studObj'],
          data () {
               return {
                    studNo: this.studObj.sno,
                    lastName: this.studObj.last_name,
                    firstName: this.studObj.first_name,
                    college: this.studObj.college,
                    isInSession: this.studObj.session,
                    freehrs: this.studObj.freehours
               }
          }
     }
</script>

<style scoped>
     #stud-info-wrapper {
          margin: 10px;
          padding: 10px;
     }
     table, th, td {
          padding: 20px 10px;
          border-collapse: collapse;
          border-style: solid;
          border-width: 1px;
          border-color: black;
          text-align: center;
          color: black;
     }
     p.active-marker {
          color: green;
     }
     p.inactive-marker {
          color: grey;
     }

     

</style>
