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
*
*     Code history:
*     08/02/2018: 	File was created                    Ocampo, Pauline
*     08/02/2018: 	Initial Layout                      Ocampo, Pauline
*     08/02/2018: 	Catching values from Student.vue    Ocampo, Pauline
*     09/03/2018:   Added basic styling                 Ocampo, Pauline L.
*     21/03/2018:   Displays reports                    Ocampo, Pauline L.
*     22/03/2018:   Added formatISOString()             Ocampo, Pauline L.
*     23/03/2018:   Added no free hrs remaining msg     Ocampo, Pauline L.
*
* 
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    
*
*     File purpose:
*     HTML view component (displayed in Student.vue)
*     Holds student information
-->

<template>
    <div id='studlog-wrapper'>
        <table class='records-table'>
            <thead>
                <tr>
                        <th>RID</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Seat Number</th>
                        <th>Amount Due</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="report in log" :key="report.rid">
                        <td>{{report.rid}}</td>
                        <td>{{formatISOString(report.timein)}}</td>
                        <td>{{formatISOString(report.timeout)}}</td>
                        <td>{{report.seatno}}</td>
                        <td><p v-if="report.amountdue != null">₱{{report.amountdue}}.00</p></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
     export default {
          props: ['studLogObj'],
          data: function() {
               return {
                    log: this.studLogObj
               }
          },
          methods: {
               /*   formatISOString
                    22 March 2018
                    Formats a date/time string in ISO format into a format for display

                    args: isoString (date/time string in ISO format)
                    returns: string formatted for display (or blank string if invalid)
                    reqd tables: none
               */
              formatISOString(isoString) {
                    var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    var dateObj = new Date(isoString);

                    if (isoString == null) {
                         return ''
                    }

                    var formatted = '';
                    formatted += MONTH_NAMES[dateObj.getMonth()];
                    formatted += ' ';
                    formatted += dateObj.getDate();
                    formatted += ', ';
                    formatted += dateObj.getFullYear();
                    formatted += ' ';

                    if (dateObj.getHours() < 10) {
                         formatted += '0'
                    }
                    formatted += dateObj.getHours();
                    
                    formatted += ':';
                    
                    if (dateObj.getMinutes() < 10) {
                         formatted += '0';
                    }
                    formatted += dateObj.getMinutes();

                    return formatted;
              }
          }
     }
</script>