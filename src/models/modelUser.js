const {DataTypes} = require('sequelize')
const sequelize = require('../db/database')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capitalPrestado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaPrestamo: {
        type: DataTypes.STRING
    },
    fechaPago: {
        type: DataTypes.STRING
    },
    paymentMethod: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    pagado:{
        type: DataTypes.BOOLEAN
    },
    cancelado:{
        type: DataTypes.BOOLEAN
    },
    daysPayment: {
        type: DataTypes.STRING
    },
    moneyToPayment: {
        type: DataTypes.INTEGER
    },
    modalityPayment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grupo: {
        type: DataTypes.STRING
    },
    totalPagado: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'User'
})

module.exports = User