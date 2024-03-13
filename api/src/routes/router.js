const express = require("express");
const router = express.Router();

const clientes = require("../controllers/cliente");
const funcionarios = require("../controllers/funcionario");
const entregas = require("../controllers/entrega");
const pedidos = require("../controllers/pedido");
const veiculos = require("../controllers/veiculo");
const rotas = require("../controllers/rota");

const verifier = (req, res) => {
    res.json("Back-end sucinto");
}

router.get("/", verifier);

router.get("/clientes", clientes.getAll)
router.get("/clientes/:id", clientes.get);
router.post("/clientes", clientes.create);
router.put("/clientes/:id", clientes.update);
router.delete("/clientes/:id", clientes.deleteData);

router.get("/funcionarios", funcionarios.getAll)
router.get("/funcionarios/:id", funcionarios.get);
router.post("/funcionarios", funcionarios.create);
router.put("/funcionarios/:id", funcionarios.update);
router.delete("/funcionarios/:id", funcionarios.deleteData);

router.get("/entregas", entregas.getAll)
router.get("/entregas/:id", entregas.get);
router.post("/entregas", entregas.create);
router.put("/entregas/:id", entregas.update);
router.delete("/entregas/:id", entregas.deleteData);

router.get("/pedidos", pedidos.getAll)
router.get("/pedidos/:id", pedidos.get);
router.post("/pedidos", pedidos.create);
router.put("/pedidos/:id", pedidos.update);
router.delete("/pedidos/:id", pedidos.deleteData);

router.get("/veiculos", veiculos.getAll)
router.get("/veiculos/:id", veiculos.get);
router.post("/veiculos", veiculos.create);
router.put("/veiculos/:id", veiculos.update);
router.delete("/veiculos/:id", veiculos.deleteData);

router.get("/rotas", rotas.getAll)
router.get("/rotas/:id", rotas.get);
router.post("/rotas", rotas.create);
router.put("/rotas/:id", rotas.update);
router.delete("/rotas/:id", rotas.deleteData);

module.exports = router;
