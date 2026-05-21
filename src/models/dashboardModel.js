var database = require("../database/config");

function totalUsuarios(){
    var instrucaoSql = `
    SELECT COUNT(*) AS total_usuarios
    FROM quiz;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function maisPopular(){
    var instrucaoSql = `
    SELECT funcao, COUNT(*) AS total
    FROM (
        SELECT 
            CASE 
                WHEN pontosDuelista >= pontosControlador 
                AND pontosDuelista >= pontosIniciador 
                AND pontosDuelista >= pontosSentinela THEN 'Duelista'
                
                WHEN pontosControlador >= pontosDuelista 
                AND pontosControlador >= pontosIniciador 
                AND pontosControlador >= pontosSentinela THEN 'Controlador'
                
                WHEN pontosIniciador >= pontosDuelista 
                AND pontosIniciador >= pontosControlador 
                AND pontosIniciador >= pontosSentinela THEN 'Iniciador'
                
                ELSE 'Sentinela'
            END AS funcao
        FROM quiz
    ) AS resultado
    GROUP BY funcao
    ORDER BY total DESC
    LIMIT 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function distribuicaoGeral(){
    var instrucaoSql = `
    SELECT 
        SUM(pontosDuelista) AS duelista,
        SUM(pontosControlador) AS controlador,
        SUM(pontosIniciador) AS iniciador,
        SUM(pontosSentinela) AS sentinela
    FROM quiz;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuariosFuncao(){
    var instrucaoSql = `
    SELECT funcao, COUNT(*) AS total
    FROM (
        SELECT 
            CASE 
                WHEN pontosDuelista >= pontosControlador 
                AND pontosDuelista >= pontosIniciador 
                AND pontosDuelista >= pontosSentinela THEN 'Duelista'
                
                WHEN pontosControlador >= pontosDuelista 
                AND pontosControlador >= pontosIniciador 
                AND pontosControlador >= pontosSentinela THEN 'Controlador'
                
                WHEN pontosIniciador >= pontosDuelista 
                AND pontosIniciador >= pontosControlador 
                AND pontosIniciador >= pontosSentinela THEN 'Iniciador'
                
                ELSE 'Sentinela'
            END AS funcao
        FROM quiz
    ) AS resultado
    GROUP BY funcao;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizDia(){
    var instrucaoSql = `
    SELECT 
        DATE_FORMAT(dtQuiz, '%d/%m/%Y') AS dia, 
        COUNT(*) AS total
    FROM quiz
    GROUP BY dia
    ORDER BY dia DESC
    LIMIT 7;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function compatibilidade(idUser){
    var instrucaoSql = ` 
    SELECT 
        pontosDuelista,
        pontosControlador,
        pontosIniciador,
        pontosSentinela
    FROM quiz 
    WHERE fkUser = ${idUser}
    ORDER BY dtQuiz DESC
    LIMIT 1;
    `
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    totalUsuarios,
    maisPopular,
    distribuicaoGeral,
    usuariosFuncao,
    quizDia,
    compatibilidade,
}
