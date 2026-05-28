var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.post("/rankingSalvar", function (req, res) {
    rankingController.salvarRanking(req, res);
});

router.get("/rankingPlotar", function (req, res) {
    rankingController.plotarRanking(req, res);
});

module.exports = router; 