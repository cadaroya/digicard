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
*
*
*     Code history:
*     08/02/2018:   File Created                            Ocampo, Pauline
*     08/02/2018:   Passing of student info to views        Ocampo, Pauline
*     20/02/2018:   Changed to .vue file                    Cai, Jann Willem B.
*     07/03/2018:   Added basic styling                     Ocampo, Pauline L.
*     23/03/2018:   Added no free hrs remaining msg         Ocampo, Pauline L.
*
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*
*     File purpose:
*     For passing variables from one .vue file to another
*-->

<template>
     <div id='studinfo-wrapper'>
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
                    <th>VALIDATED</th>
                    <td>
                         <p v-if="isValidated">Yes</p>
                         <p v-else>No</p>
                    </td>
               </tr>
               <tr>
                    <th>FREE HOURS</th>
                    <td>
                         <p v-if="remHours == null || remHours.startsWith('-') || remHours == '00:00:00'">
                              No free hours remaining.
                         </p>
                         <p v-else>
                              {{remHours}}
                         </p>
                    </td>
               </tr>
          </table>
     </div>
</template>

<script>
     export default {
          props: ['studObj'],
          data: function() {
               return {
                    studNo: this.studObj.sno,
                    lastName: this.studObj.last_name,
                    firstName: this.studObj.first_name,
                    college: this.studObj.college,
                    isValidated: this.studObj.validated,
                    remHours: this.studObj.freehours
               }
          }
     }
</script>

<style scoped>
     #studinfo-wrapper table {
          background-color: #f3f8fe;
          color: #4179f7;
          margin: 0px;
          padding: 5px;
     }
     #studinfo-wrapper p {
          margin: 0px;
     }
     #studinfo-wrapper th {
          font-weight: normal;
          text-align: left;
          width: 60%;
     }
     #studinfo-wrapper td {
          text-align: right;
          padding: 5px;
          width: 40%;
     }
</style>