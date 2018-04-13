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
*     08/02/2018:   File Generated                    Daroya, Carlos Adrian A.
*     20/02/2018:   Changed to .vue file              Cai, Jann Willem B. 
*     07/03/2018:   Added basic styling               Ocampo, Pauline L.
*     21/03/2018:   Added default table styles        Ocampo, Pauline L.
*     08/04/2018:   CSS for Filter dropdown           Daroya, Carlos Adrian A.
*     13/04/2018:   Renamed nav bar component in code Ocampo, Pauline L.
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*
*     File purpose:
*     Index for app. Used by other views.
*-->

<template>
     <div id="app" class="app-wrapper">
          <nav-bar></nav-bar>
          <router-view></router-view>
     </div>
</template>

<script>
    import NavBar from './NavBar.vue'
     export default {
          components: {
              NavBar
          }
     }
</script>

<style>
     #app {
          /* Default font properties, unless overriden in components */
          color: #121824;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 17px;
     }
     
     /* Set a default style for any logs */
     .records-table {
          border-collapse: collapse;
          /* Center table */
          margin-left: auto;
          margin-right: auto;
          text-align: center;
     }

     .records-table th, td {
          padding: 2px 10px;
     }

     .records-table th {
          font-size: 1.4em;
     }

     .records-table tr:nth-child(odd) {
          background-color:  #f3f8fe;
     }

     /*Drop down stuff*/
    .dropdown {
        position: relative;
        display: inline-block;
        background-color: #3498DB;
        
    }

    .dropdown:hover, .dropdown:focus {
        background-color: #2980B9;
    }

    .dropdown__header {
    cursor: pointer;
    line-height: 50px;
    padding-left: 10px;
    padding-right: 50px;
    position: relative;
    text-overflow: ellipsis;
    }

    .dropdown__header.is-active + .dropdown__content {
    height: auto;
    opacity: 1;
    visibility: visible;
    background-color: rgb(113, 193, 247);
    }
    .dropdown__content {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 15px 10px;
    transition: opacity 0.3s;
    visibility: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 160px;
    background-color: #3498DB;
    z-index: 1;
    position: absolute;
    text-align: left;

    }

    .ddowncontent:hover, .ddowncontent:focus{
        background-color: #2980B9;
        
    }
</style>