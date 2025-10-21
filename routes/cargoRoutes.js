const express = require("express");
const router = express.Router();

// rota de teste
router.get("/", (req, res) => {
  res.json({ message: "Rota de cargos funcionando!" });
});

module.exports = router;
