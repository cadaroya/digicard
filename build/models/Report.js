module.exports = (sequelize, Sequelize) => {
     const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)
     const Report = sequelize.define('report', {
          rid:          {type: Sequelize.INTEGER(12), primaryKey: true, allowNull: false},
          sno:          Sequelize.STRING(20),
          freehours:    Sequelize.TIME(2),
          timein:       TIMESTAMP,
          timeout:      TIMESTAMP,
          amountdue:    Sequelize.INTEGER(10),
          seatno:       Sequelize.INTEGER(10)
     },
     {
          timestamps: false,
          freezeTableName: true
     })

     Report.associate = function (models) {
          Report.belongsTo(models.student, {foreignKey: 'sno', as: 'sno_rid'})
     }

     return Report
}