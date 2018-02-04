module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const Sequelize = require('sequelize');
    const Student = sequelize.define('student', {
      sno:          {type: Sequelize.STRING(20), primaryKey: true, allowNull: false},
      last_name:    Sequelize.STRING(50),
      first_name:   Sequelize.STRING(50),
      middle_name:  Sequelize.STRING(50),
      course:       Sequelize.STRING(50),
      college:      Sequelize.STRING(50),
      timein:       TIMESTAMP,
      timeout:      TIMESTAMP,
      validated:    Sequelize.BOOLEAN,
      session:      Sequelize.BOOLEAN,
      freehours:    Sequelize.TIME(2),
      seatno:       Sequelize.INTEGER(10),
      credits:      Sequelize.FLOAT(7,2)
    },
    {
      timestamps: false,
      freezeTableName: true
    })
    return Student;
}