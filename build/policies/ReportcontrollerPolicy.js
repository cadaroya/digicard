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
*     08/02/2018: 	File Created	                    Cai, Jann Willem
*     08/02/2018: 	Error handling                   	Cai, Jann Willem
*
*
*
*     Date created: 8 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Error handling file for report entity
*/

const Joi = require('joi')

module.exports = {

     report (req, res, next) {
          const schema = {
               sno: Joi.string().regex(
                    new RegExp('^[0-9]{9}$')
               )
          }
          const { error, value } = Joi.validate(req.body, schema)

          if (error) {
               switch (error.details[0].context.key) {
                    case 'sno':
                         res.status(400).send({
                              error: 'Not a valid student number'
                         })
                    default:
                         res.status(400).send({
                              error: 'Invalid Registration Information'
                         })
               }
               else {
                    next()
               }
          }
     }
}