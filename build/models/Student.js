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
*     06/02/2018: 	File Created	                    Daroya, Carlos Adrian A.
*     06/02/2018: 	Schema created                   	Daroya, Carlos Adrian A.
*     06/02/2018: 	Association (foreign key)        	Daroya, Carlos Adrian A.
*
*
*
*     Date created: 6 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Database model for student entity
*/

module.exports = (sequelize, Sequelize) => {
     const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)
     const Student = sequelize.define('student', {
          sno:          {type: Sequelize.STRING(20), primaryKey: true, allowNull: false},
          last_name:    Sequelize.STRING(50),
          first_name:   Sequelize.STRING(50),
          middle_name:  Sequelize.STRING(50),
          course:       Sequelize.STRING(50),
          college:      Sequelize.STRING(50),
          timein:       TIMESTAMP,
          timeout:      TIMESTAMP,
          validated:    Sequelize.BOOLEAN,
          session:      Sequelize.BOOLEAN,
          freehours:    Sequelize.TIME(2),
          seatno:       Sequelize.INTEGER(10),
          credits:      Sequelize.FLOAT(7,2)
     },
     {
          timestamps: false,
          freezeTableName: true
     })

     Student.associate = function (models) {
          Student.hasMany(models.report, {foreignKey: 'sno'})
     }

     return Student
}