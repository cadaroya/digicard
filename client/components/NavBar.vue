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
*     08/02/2018:   File Created                        Ocampo, Pauline
*     20/02/2018:   Changed to .vue file                Cai, Jann Willem B.
*     07/03/2018:   Added basic styling                 Ocampo, Pauline L.
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*
*
*     File purpose:
*     HTML view component for navbar
*-->

<template>
     <div id="navbar-wrapper">
          <ul class="navbar-list">
               <li><router-link to='/home'>Home</router-link></li>
               <li><router-link to="/reports"> Reports </router-link></li>
               <li><router-link to='/'>"Log Out"</router-link></li>
          </ul>
     </div>
</template>

<script>
</script>

<style scoped>
     #navbar-wrapper {
          background-color: #4179f7;
          box-shadow: 5px 18px 18px 1px #eaeaea;
          height: 71px;
          margin: 40px 0px;
          padding: 0px;
     }
     #navbar-wrapper .navbar-list {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
     }
     #navbar-wrapper .navbar-list a {
          color: #e9f1f7;
          background-color: #4179f7;
          float: left;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: lighter;
          font-size: 20px;
          /* Padding value following was essentially trial and error w/ height... */
          padding: 24px 17px;
          text-decoration: none;
     }
     #navbar-wrapper .navbar-list a:hover {
          background-color: #2660e8
     }
</style>