const {librarian} = require('../models')

module.exports = {
  async register (req, res, next) {
    try {
        const lib = await librarian.create(req.body)
        res.send(lib.toJSON())
    } catch (err){
        res.status(400).send({
            error: 'This email account is already in use.'
        })
    }
  }

     
}