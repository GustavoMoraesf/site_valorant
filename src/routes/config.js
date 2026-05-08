var express = require("express");
var router = express.Router();

var configController = require("../controllers/configController");

router.put("/atualizar-foto/:idUser", function(req, res){
    configController.atualizarFoto(req, res);
});

router.put("/atualizar-nome/:idUser", function(req, res){
    configController.atualizarNome(req, res);
});

router.put("/atualizar-senha/:idUser", function(req, res){
    configController.atualizarSenha(req, res);
});

module.exports = router;