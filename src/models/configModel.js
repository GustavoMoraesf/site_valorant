var database = require("../database/config");

function atualizarFoto(idUser, foto) {
    var instrucaoSql = `
        UPDATE usuario 
        SET foto = '${foto}'
        WHERE idUser = ${idUser};
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    atualizarFoto
}
