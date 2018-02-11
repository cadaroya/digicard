/*     Digital Pink Card - All rights reserved
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
*     01/02/2018: 	Generated through webpack module	Daroya, Carlos Adrian A.
*     05/02/2018: 	Changed title,host,port          	Daroya, Carlos Adrian A.
*
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Config for identifying database and server signatures
*/

'use strict'
const pkg = require('../package')

module.exports = {
     title: 'digicard',
     // Options for webpack-dev-server
     // See https://webpack.js.org/configuration/dev-server
     devServer: {
          host: 'localhost',
          port: 4000
     },
     // when you use electron please set to relative path like ./
     // otherwise only set to absolute path when you're using history mode
     publicPath: './',
     electron: true,
     cssModules: true,
     jsx: true
}
