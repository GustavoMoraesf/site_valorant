var dashModel = require("../models/dashboardModel");

// KPI - total usuários
function totalUsuarios(req, res) {
    dashModel.totalUsuarios()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// KPI - função mais popular
function maisPopular(req, res) {
    dashModel.maisPopular()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Gráfico - donut
function distribuicaoGeral(req, res) {
    dashModel.distribuicaoGeral()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Gráfico - barra
function usuariosFuncao(req, res) {
    dashModel.usuariosFuncao()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Gráfico - linha (evolução por dia)
function quizDia(req, res) {
    dashModel.quizDia()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

// Gráfico - compatibilidade 
function compatibilidade(req, res){
    var idUser = req.params.idUser;

    dashModel.compatibilidade(idUser)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado");
            }
        })
        .catch(erro => {
            console.log("Erro compatibilidade:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    totalUsuarios,
    maisPopular,
    distribuicaoGeral,
    usuariosFuncao,
    quizDia,
    compatibilidade
};