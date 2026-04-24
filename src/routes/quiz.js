var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/quizPontuacao", function (req, res) {
    quizController.quizPontuacao(req, res);
});

module.exports = router; 