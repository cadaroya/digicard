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
*     01/02/2018: 	Generated through webpack module		Daroya, Carlos Adrian A.
*     04/02/2018:   Placed initial routes here        		Daroya, Carlos Adrian A.
*     05/02/2018:   Modified after creating controllers    	Daroya, Carlos Adrian A.
*     08/02/2018:   Added register POST	    	 			Daroya, Carlos Adrian A.
*     08/02/2018:   Added student and report GET/POST	  	Daroya, Carlos Adrian A.
*     16/02/2018:   TimeInOut POST route					Daroya, Carlos Adrian A.
*     16/02/2018:   pickSeat route						  	Daroya, Carlos Adrian A.
*     22/03/2018:   checkFull route						  	Daroya, Carlos Adrian A.
*     08/04/2018:   filter route						  	Daroya, Carlos Adrian A.
*   
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     This file administers all the backend routing. It will catch all the requests
* 	  from the frontend (vue)
*/

'use strict'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev')


const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationcontrollerPolicy')
const StudentController = require('./controllers/StudentController')
const ReportController = require('./controllers/ReportController')
const TimeInController = require('./controllers/TimeInController')
const SeatController = require('./controllers/SeatController')
module.exports = (app) => {
  	app.post('/register', AuthenticationControllerPolicy.register,
     	AuthenticationController.register)

  	app.get('/student/:studNo', StudentController.index)
  	//app.get('/student', StudentController.index)

  	app.get('/reports', ReportController.index)

	app.get('/filter/:type/:date', ReportController.filter)

	//app.get('/reports', ReportController.log)
	  
	app.post('/timein', TimeInController.post)

	app.post('/pickSeat', SeatController.post)

	app.post('/checkFull', SeatController.checkFull)

	app.post('/reports', ReportController.post)

	app.post('/createStudent', StudentController.create)
	
}
//