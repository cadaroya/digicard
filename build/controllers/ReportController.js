const {report} = require ('../models')

module.exports = {
     async report (req, rest, next){
          try {
               const rep = await report.create(req.body)
               res.send(rep.toJSON())
          } catch (err) {
               res.status(400).send({
                    error: 'This email account is already in use.'
               })
          }
     }
}