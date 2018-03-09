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
            console.log("HELLO I AM POSTINGGGGGGGGGGGGGGGGGGGG><><><><><><><><><><><><><")
            async function getAvailable(os){
              var seat = null
              var seat_os = await sequelize.query("SELECT * FROM seat WHERE os = ? AND seatno NOT IN (SELECT seatno FROM report WHERE timeout IS NULL)" , {replacements: [os],type: sequelize.QueryTypes.SELECT})

              // If preferred seats are available
              if(seat_os != null){
                // Randomize from AVAILABLE computers
                const max = seat_os.length - 1
                const min = 0
                seat = Math.floor(Math.random() * (max - min + 1)) + min
                  
                // Get the i*th element (seat) from seat_os
                seat = seat_os[seat].seatno
                return seat
              }else{
                return null
              }
            }
            ////////////////////////////////////////////////////////////////////////////////
            // Initialize search variables
            const search = req.body.studNo
            var seat = req.body.seatNo
            var rid = req.body.rid
            var studReport = null

            // Constant OS strings
            const windows = "windows"
            const mac = "mac"

            // If student didn't pick a seat
            if(seat == null){
              // Get (studReport.preferred to be edited)
              var seat_preferred = getAvailable(windows)
              var seat_other = getAvailable(mac)

              if(seat_preferred != null){
                seat = seat_preferred
              }
              else if(seat_preferred == null && seat_other != null){
                seat = seat_other
              }
              else{
                seat = null
              }
            }

            // Check if seat is still null
            if(seat != null){
              // Update Timein timestamp and seatno 
              await sequelize.query("UPDATE report SET timein = NOW(), seatno = ? WHERE rid = ?" , { replacements: [seat,rid], type: sequelize.QueryTypes.UPDATE})
              
              // Search report with seatno (to be edited because of integration with timein[rid])
              studReport = await sequelize.query("SELECT * FROM student NATURAL JOIN report WHERE rid = ?" , {replacements: [rid],type: sequelize.QueryTypes.SELECT})
              studReport = studReport[0]
              res.send(studReport)
            }else{
              res.send(null)
            }

          } catch (error){
            res.send(error)
            console.log(error)
          }
     }
}