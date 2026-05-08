var configModel = require("../models/configModel");

function atualizarFoto(req, res) {
    var idUser = req.params.idUser;
    var foto = req.body.foto;

    configModel.atualizarFoto(idUser, foto)
        .then(() => {
            res.json({ mensagem: "Foto atualizada com sucesso" });
        })
        .catch(erro => {
            res.status(500).json(erro);
        });
}

function atualizarNome(req, res) {
    var idUser = req.params.idUser;
    var novoNome = req.body.nome;

    configModel.atualizarNome(idUser, novoNome)
        .then(() => {
            res.json({ mensagem: "Nome atualizado" });
        })
        .catch(erro => {
            res.status(500).json(erro);
        });

}

function atualizarSenha(req, res) {
    var idUser = req.params.idUser;
    var novaSenha = req.body.senha;

    configModel.atualizarSenha(idUser, novaSenha)
        .then(() => {
            res.json({ mensagem: "Senha atualizada" });
        })
        .catch(erro => {
            res.status(500).json(erro);
        });

}

module.exports = {
    atualizarFoto,
    atualizarNome,
    atualizarSenha
}