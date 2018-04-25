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
*     21/04/2018: 	File was created                    Cai, Jann Willem
*     22/04/2018: 	Added backend                       Daroya, Carlos Adrian
*
* 
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     The librarian interface for adding students to the student database
-->

<template>
     <div id = "addstudent-wrapper">
          Student Number:<br>
          <input v-model="sno" placeholder="Enter Student Number"><br><br>
          Last Name:<br>
          <input v-model="last_name" placeholder="Enter Last Name"><br><br>
          First Name:<br>
          <input v-model="first_name" placeholder="Enter First Name"><br><br>
          Middle Name:<br>
          <input v-model="middle_name" placeholder="Enter Middle Name"><br><br>
          College:<br>
          {{college}}<br><br>
          Course:<br>
               <select v-model="course" style="min-width:20%">
                    <option v-for="option in courses" v-bind:value="option" :key="option">
                         {{option}}
                    </option>
               </select>
               <br><br>
          Preferred OS:<br>
               <input type="radio" value="windows" v-model="preferred_os"> Windows <br>
               <input type="radio" value="mac" v-model="preferred_os"> Mac <br><br>
          <button v-on:click="addStudent"> Add Student </button>
     </div>
</template>

<script>
import StudentService from '../services/StudentService'
     export default {
          data () {
               return {
                    sno: '',
                    last_name: '',
                    first_name: '',
                    middle_name: '',
                    course: '',
                    college: 'Engineering',
                    preferred_os: '',
                    courses: [ 'BS Chemical Engineering',
                              'BS Civil Engineering',
                              'BS Computer Engineering',
                              'BS Computer Science',
                              'BS Electrical Engineering',
                              'BS Electronics and Communications Engineering',
                              'BS Geodetic Engineering',
                              'BS Industrial Engineering',
                              'BS Materials Engineering',
                              'BS Mechanical Engineering',
                              'BS Metallurgical Engineering',
                              'BS Mining Engineering'
                         ]
               }
          },
          methods: {
               async addStudent(){
                    const response = (await StudentService.create({
                         sno: this.sno,
                         last_name: this.last_name,
                         first_name: this.first_name,
                         middle_name: this.middle_name,
                         course: this.course,
                         college: this.college,
                         freehours: '20:00:00.00',
                         validated: 1,
                         session: 0,
                         credits: 0,
                         preferred: this.preferred_os
     
                    })).data

                    console.log(response)
                    
               } 
          }
     }
</script>

<style scoped>
     #addstudent-wrapper {
          text-align: center;
     }
</style>