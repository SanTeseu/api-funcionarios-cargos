const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Cargo = require("./Cargo")

const Funcionario = sequelize.define("Funcionario",{
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Cargo.hasMany(Funcionario,{
    foreignKey:"cargoId",
    as:"funcionarios"
})

Funcionario.belongsTo(Cargo,{
    foreignKey:"cargoId",
    as:"cargo"
})

module.exports = Funcionario
