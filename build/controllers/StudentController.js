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
*     08/02/2018: 	Routes structured                  	Daroya, Carlos Adrian A.
*     08/02/2018: 	Search student fxn              	Daroya, Carlos Adrian A.
*     20/02/2018:   Added studlog response              Daroya, Carlos Adrian A.
*     21/02/2018:   Error checking for null             Daroya, Carlos Adrian A.
*
*
*     Date created: 6 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Student controller
*/

const {student} = require('../models')
const {report} = require('../models')

module.exports = {
     async index (req, res) {
          try {
               search = req.query.search

               // Initialize as null variables
               var studLog = null
               var stud = null
               var response = null

               // Query student and report
               stud = await student.find({
                    where: {
                         sno: search
                    }
               })
               
               studLog = await report.findAll({
                    where: {
                         sno: search
                    }
               })
               
               response = [stud,studLog]
               res.send(response)
          } catch (error){
               res.status(400).send({
                    error: 'An error occurred while searching. Please try again.'
               })
               console.error(error)
          }
     },

     async create (req, res) {
        try {
            const lib = await student.create(req.body)
            res.send(lib.toJSON())
       } catch (err){
            res.status(400).send({
                 error: 'Error occurred while creating the student.'
            })
       }
   }
}