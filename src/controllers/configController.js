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

module.exports = {
    atualizarFoto
}