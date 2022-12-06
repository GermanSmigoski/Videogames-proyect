const {DataTypes, UUID, UUIDV4, STRING} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('genre', {
        id:{
            type: UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false
        }
    })
}