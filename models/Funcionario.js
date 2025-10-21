const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cargo = require("./Cargo");

const Funcionario = sequelize.define("Funcionario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Definindo a relação entre Funcionario e Cargo
Cargo.hasMany(Funcionario, { foreignKey: "cargoId" });
Funcionario.belongsTo(Cargo, { foreignKey: "cargoId" });

module.exports = Funcionario;
