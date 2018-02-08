const {student} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        console.log("BOOOM!")
        //const stud = await student.find(req.body)
        //res.send(stud.toJSON())
    } catch (err){
        console.log("PIUTAA!")
        res.status(400).send({
            error: 'No such student found.'
        })
    }
  }
}