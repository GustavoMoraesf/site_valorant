var quizModel = require("../models/quizModel");

function quizPontuacao(req, res) {

    let ptDuelista = req.body.ptDuelista;
    let ptControlador = req.body.ptControlador;
    let ptIniciador = req.body.ptIniciador;
    let ptSentinela = req.body.ptSentinela;
    let fkUser = req.body.fkUser;

    quizModel.quizPontuacao(ptDuelista, ptControlador, ptIniciador, ptSentinela, fkUser)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    quizPontuacao
}