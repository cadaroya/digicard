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
*     13/04/2018:   Edited style sheet, renamed file    Ocampo, Pauline L.
*
*
*
*     Date created: 13 April 2018
*     Development Group: Cai, Daroya, Ocampo
*
*
*     File purpose:
*     HTML view component for student view header
*-->

<template>
     <div id="header-wrapper">
          <img src="../images/engglib.png"/>
          <div id="text-part">
               <h1> Digital Pink Card System </h1>
          </div>
     </div>
</template>

<script>
/* eslint-disable */
</script>

<style scoped>
     #header-wrapper {
          width: 100%;
          height: 130px;
          text-align: left;
          padding: 0px;
          margin: 0px;
          overflow: hidden;
     }

     #header-wrapper #text-part {
          align-items: center;
          display: flex;
          float: left;
          height: 100%;
     }

     #header-wrapper img {
          display: inline-block;
          max-width: 100%;
          max-height: 100%;
          height: auto;
          float: left;
     }
</style>