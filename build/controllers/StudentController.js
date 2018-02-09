const {student} = require('../models')
const {report} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        search = req.query.search
        const stud = await student.findAll({
            where: {
                sno: search
            }
        })

        const log = await report.find({ where: {sno: search}})

        const response = [stud,log]
        //console.log(response)

        res.send(response)
    } catch (err){
        console.log("PIUTAA!")
        res.status(400).send({
            error: 'No such student found.'
        })

        console.error(error)
    }
  }
}