var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

// KPI - total de usuários
router.get("/total-usuarios", function (req, res) {
    dashController.totalUsuarios(req, res);
});

// KPI - função mais popular
router.get("/mais-popular", function (req, res) {
    dashController.maisPopular(req, res);
});

// KPI - distribuição %
router.get("/distribuicao", function (req, res) {
    dashController.distribuicaoFuncao(req, res);
});

// Gráfico - distribuição geral (donut)
router.get("/distribuicao-geral", function (req, res) {
    dashController.distribuicaoGeral(req, res);
});

// Gráfico - usuários por função (barra)
router.get("/usuarios-funcao", function (req, res) {
    dashController.usuariosFuncao(req, res);
});

// Gráfico - evolução por dia (linha)
router.get("/quiz-dia", function (req, res) {
    dashController.quizDia(req, res);
});

// Gráfico - compatibilidade do usuário (polar)
router.get("/compatibilidade/:idUser", function (req, res) {
    dashController.compatibilidade(req, res);
});

module.exports = router;