const {student} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        search = req.query.search
        const stud = await student.findAll({
            where: {
                sno: search
            }
        })
        console.log(stud.dataValues)
        res.send(stud)
    } catch (err){
        console.log("PIUTAA!")
        res.status(400).send({
            error: 'No such student found.'
        })
    }
  }
}