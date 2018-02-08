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