var database = require("../database/config")

function salvarRanking(precisao, pontos, fkUser) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizPontuacao():", precisao, pontos, fkUser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO aimlab (precisao, pontos, fkUser) VALUES ('${precisao}', '${pontos}', '${fkUser}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function plotarRanking(){
    console.log("ACESSEI O RANKING MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarRanking():");
    var instrucaoSql = `
        SELECT 
            pontos,
            precisao,
            nome
        FROM aimlab
        JOIN usuario ON fkUser = idUser
        ORDER BY pontos DESC
        LIMIT 5;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarRanking,
    plotarRanking
};