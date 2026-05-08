var database = require("../database/config");

function atualizarFoto(idUser, foto) {
    var instrucaoSql = `
        UPDATE usuario 
        SET foto = '${foto}'
        WHERE idUser = ${idUser};
    `;
    return database.executar(instrucaoSql);
}

function atualizarNome(idUser, novoNome){
    var instrucaoSql = `
        UPDATE usuario 
        SET nome = '${novoNome}'
        WHERE idUser = ${idUser};
    `;
    return database.executar(instrucaoSql);
}

function atualizarSenha(idUser, novaSenha){
    var instrucaoSql = `
        UPDATE usuario 
        SET senha = '${novaSenha}'
        WHERE idUser = ${idUser};
    `;
    return database.executar(instrucaoSql);
}



module.exports = {
    atualizarFoto,
    atualizarNome,
    atualizarSenha
}
