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
*     07/03/2018: 	File Created               Daroya, Carlos Adrian A.
*
*
*     Date created: 07 March 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     Seat Controller
*/
const {sequelize} = require('../models')
const {student} = require('../models')
const {report} = require('../models')

module.exports = {
    async post (req, res) {
          try {
            // Initialize null variables
            const search = req.body.studNo
            var stud = null
            var studReport = null

            stud = await student.find({
              where: {
                   sno: search
              }
            })

            if(stud != null){
              // If session == 0, time in
              if(stud.session == 0){
                // Select timestamp
                const timeIN = (await sequelize.query("SELECT NOW() AS time" , {type: sequelize.QueryTypes.SELECT}))[0].time

                // Create Report (timein only)
                const data = {
                  rid: null,
                  sno: stud.sno,
                  freehours: stud.freehours,
                  timein: timeIN,
                  timeout: null,
                  amountdue: null,
                  seatNo: null
                }

                report.create(data)

                // Update student session to 1
                await sequelize.query("UPDATE student SET session = 1 WHERE sno = ?" , { replacements: [search], type: sequelize.QueryTypes.UPDATE})

                studReport = (await sequelize.query("SELECT * FROM student A JOIN report B ON A.sno = ? WHERE rid = (SELECT max(rid) FROM report WHERE sno = ?)" , { replacements: [search,search], type: sequelize.QueryTypes.SELECT}))
                studReport = studReport[0]
              // If session == 1, time out
              } else{
                
                // Update student session, seatno, freehours
                await sequelize.query("UPDATE student SET session = 0 WHERE sno = ?" , { replacements: [search], type: sequelize.QueryTypes.UPDATE})

                // Retrieve Latest (Report!) of student
                studReport = await sequelize.query("SELECT * FROM report WHERE rid = (SELECT max(rid) FROM report WHERE sno = ?)" , { replacements: [search], type: sequelize.QueryTypes.SELECT})
                studReport = studReport[0]

                // Student
                studLog = await student.find({
                  where: {
                       sno: search
                  }
                })

                
               
                // Update Report: timeout
                await sequelize.query("UPDATE report SET timeout = NOW() WHERE rid = ?" , { replacements: [studReport.rid], type: sequelize.QueryTypes.UPDATE})

                // Calculate timediff in hours
                const resp = (await sequelize.query("SELECT TIMESTAMPDIFF(SECOND,timein,timeout) AS timediff FROM report WHERE rid = ?", {replacements: [studReport.rid], type: sequelize.QueryTypes.SELECT }))[0]
                const timediff = resp.timediff
                const freehours = studLog.freehours
                const amountdue = timediff/60/60*20
                // Update timediff, amountdue, (seatno) for REPORT
                await sequelize.query("UPDATE report SET amountdue = ? WHERE rid = ?" , { replacements: [amountdue,studReport.rid], type: sequelize.QueryTypes.UPDATE})

                // Update timediff, (seatno) for STUDENT 
                await sequelize.query("UPDATE student SET freehours = TIMEDIFF(?,?) WHERE sno = ?" , { replacements: [freehours,timediff,search], type: sequelize.QueryTypes.UPDATE})
                              
                // Find Student
                studReport = await sequelize.query("SELECT * FROM student A JOIN report B ON A.sno = ? WHERE rid = ?" , { replacements: [search,studReport.rid], type: sequelize.QueryTypes.SELECT})
                studReport = studReport[0]
              }
            }

            res.send(studReport)
          } catch (error){
            res.send(error)
            console.log(error)
          }
     }
}