const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('temper', {
        id: {
            type: DataTypes.UUID,
        },
        name: {
            type: DataTypes.STRING
        }
    })
}

/*
ID
Nombre
*/