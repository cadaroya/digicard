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
*     08/02/2018: 	GET functionality             	    Daroya, Carlos Adrian A.
*
*
*
*     Date created: 6 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Report controller
*/

const {report} = require ('../models')

module.exports = {
     async index (req, res){
          console.log("!amzing")
          try {
               const rep = await report.findAll()
               res.send(rep)
          } catch (err) {
               res.status(400).send({
                    error: 'An error has occurred trying to fetch reports.'
               })
               console.log(err)
          }
     },
     async log (req, res){
          console.log("!amzing")
          try {
               const rep = await report.findAll()
               res.send(rep)
          } catch (err) {
               res.status(400).send({
                    error: 'An error has occurred trying to fetch reports.'
               })
               console.log(err)
          }
     },

     async post (req, res){
          try {
               res.send("baby!")
               //const rep = report.create(req.body)
               // res.send(rep)
          } catch (err) {
               res.status(400).send({
               error: 'An error has occurred trying to create report.'
               })
          }
     },


     async filter (req, res){
        try {
             const type = req.params.type
             var date = req.params.date
             var response = null
             console.log("IM IN!")
             console.log(type)
             console.log(date)
             date = "2018-03-22T10:20:30Z"
             var real_date = new Date(date)
             console.log(real_date)
             console.log(real_date.getYear())
             console.log(real_date.add(1, 'days'))

             if(type.localeCompare("all") == 0){
                response = await report.findAll()
             }else if(type.localeCompare("recent") == 0){
                response = await report.findAll({
                    order: [
                        ['timein', 'DESC']
                    ]
                })
             }else{
                response = await report.findAll({
                    where: {timein: {[$gte]: real_date,
                            $and: [
                                {
                                    timein: {[$lte]: (real_date).add(1, 'days')}
                                }
                            ]}},
                    order: [
                        ['timein', 'DESC']
                    ]
                })
             }
             res.send(response)
             //const rep = report.create(req.body)
             // res.send(rep)
        } catch (err) {
             res.status(400).send({
             error: 'An error has occurred trying to create report.'
             })
        }
   }
}