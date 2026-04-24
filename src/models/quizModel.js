var database = require("../database/config")

function quizPontuacao(ptDuelista, ptControlador, ptIniciador, ptSentinela, fkUser) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizPontuacao():", ptDuelista, ptControlador, ptIniciador, ptSentinela, fkUser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (pontosDuelista, pontosControlador, pontosIniciador, pontosSentinela, fkUser) VALUES ('${ptDuelista}', '${ptControlador}', '${ptIniciador}', '${ptSentinela}', '${fkUser}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    quizPontuacao
};