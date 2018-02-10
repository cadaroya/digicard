module.exports = (sequelize, Sequelize) => {
     const Librarian = sequelize.define('librarian', {
          email:        {type: Sequelize.STRING(20), unique: true, primaryKey: true, allowNull: false},
          password:     Sequelize.STRING(20)
     },
     {
          timestamps: false,
          freezeTableName: true
     })

     Librarian.associate = function (models) {
     }

     return Librarian
}