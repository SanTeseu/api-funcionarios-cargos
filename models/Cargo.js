const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cargo = sequelize.define("Cargo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Cargo;
