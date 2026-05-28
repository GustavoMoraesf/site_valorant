var rankingModel = require("../models/rankingModel");

function salvarRanking(req, res) {

    let precisao = req.body.precisaoServer;
    let pontos = req.body.pontosServer;
    let fkUser = req.body.fkUser;

    rankingModel.salvarRanking(precisao, pontos, fkUser)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function plotarRanking(req, res){
    rankingModel.plotarRanking()
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
}

module.exports = {
    salvarRanking,
    plotarRanking
}