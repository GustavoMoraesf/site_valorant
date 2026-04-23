# Projeto Individual: Valorant Universe

O objetivo deste projeto é o desenvolvimento de uma plataforma web interativa sobre Valorant, focada em exibir informações do jogo de forma dinâmica e divertida. A aplicação conta com um quiz interativo e um dashboard analítico para o ranking de agentes.

Foco: Estudo e aprendizado de novas ferramentas tecnológicas.
Autor: Gustavo Moraes
Instituição: SPTECH 2026

Para a utilização do projeto deve seguir os seguintes passo:

# 1 - Abra o terminal e execute: npm i

# 2 - Crie um arquivo .env e preencha com os seguintes dados:

    AMBIENTE_PROCESSO=producao

    # Configurações de conexão com o banco de dados
    DB_HOST=localhost
    DB_DATABASE='SEUDATABSE'
    DB_USER='USUARIODOBD'
    DB_PASSWORD='SENHADOBD'
    DB_PORT='3306'

    # Configurações do servidor de aplicação
    APP_PORT=8080
    APP_HOST=localhost

    # importante: caso sua senha contenha caracteres especiais, insira-a entre 'aspas'

# 3 - Crie um arquivo .env.dev e preencha com os seguintes dados:

    AMBIENTE_PROCESSO=desenvolvimento

    # Configurações de conexão com o banco de dados
    DB_HOST=localhost
    DB_DATABASE='SEUDATABSE'
    DB_USER='USUARIODOBD'
    DB_PASSWORD='SENHADOBD'
    DB_PORT='3306'

    # Configurações do servidor de aplicação
    APP_PORT=3333
    APP_HOST=localhost

    # importante: caso sua senha contenha caracteres especiais, insira-a entre 'aspas'

# 4 - Crie um banco de dados MySQL com as tabelas abaixo: 

    CREATE TABLE usuario(
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(45));

# 5 - Execute no terminal: npm start

