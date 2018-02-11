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
*     05/02/2018: 	File Created	                    Daroya, Carlos Adrian A.
*     06/02/2018: 	File reading!                     	Daroya, Carlos Adrian A.
*
*
*
*     Date created: 5 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Reads all other models so it is easily exported using this index.js file
*/

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
     config.db.database,
     config.db.user,
     config.db.password,
     config.db.options
)

fs
     .readdirSync(__dirname)
     .filter((file) =>
          file !== 'index.js'
     )
     .forEach((file) => {
          const model = sequelize.import(path.join(__dirname, file))
          db[model.name] = model
     })

Object.keys(db).forEach(function (modelName) {
     if ('associate' in db[modelName]) {
          db[modelName].associate(db)
     }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
