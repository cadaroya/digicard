const Joi = require('joi')

module.exports = {

     report (req, res, next) {
          const schema = {
               sno:          Joi.string().regex(new RegExp('^[0-9]{9}$')),
               last_name:    Joi.string().alphanum().min(1).max(50).required(),
               first_name:   Joi.string().alphanum().min(1).max(50).required(),
               middle_name:  Joi.string().alphanum().min(1).max(50).required(),
               course:       Joi.string().alphanum().min(1).max(50).required(),
               college:      Joi.string().alphanum().min(1).max(50).required()
          }
          const { error, value } = Joi.validate(req.body, schema)

          if (error) {
               switch (error.details[0].context.key) {
                    case 'sno':
                         res.status(400).send({
                              error: 'Not a valid student number'
                         })
                    case 'last_name':
                         res.status(400).send({
                              error: 'Not a valid last name'
                         })
                    case 'first_name':
                         res.status(400).send({
                              error: 'Not a valid first name'
                         })
                    case 'middle_name':
                         res.status(400).send({
                              error: 'Not a valid middle name'
                         })
                    case 'course':
                         res.status(400).send({
                              error: 'Not a valid course'
                         })
                    case 'college':
                         res.status(400).send({
                              error: 'Not a valid college'
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