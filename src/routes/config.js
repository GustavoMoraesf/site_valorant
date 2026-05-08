var express = require("express");
var router = express.Router();

var configController = require("../controllers/configController");

router.put("/atualizar-foto/:idUser", function(req, res){
    configController.atualizarFoto(req, res);
});

module.exports = router;