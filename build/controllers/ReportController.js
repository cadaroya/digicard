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
     }
}