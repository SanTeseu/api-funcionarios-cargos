const express = require("express");
const sequelize = require("./config/database");
const cargoRoutes = require("./routes/cargoRoutes");
const funcionarioRoutes = require("./routes/funcionariosRoutes");

const app = express();
const porta = 3000;

app.use(express.json());
app.use("/cargos", cargoRoutes);
app.use("/funcionarios", funcionarioRoutes);

sequelize.sync().then(() => {
  console.log("Banco sincronizado!");
  app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  });
});
