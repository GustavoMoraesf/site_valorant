# Projeto Individual — Valorant Universe

O **Valorant Universe** é uma plataforma web interativa desenvolvida com foco em entretenimento e análise de dados do jogo Valorant.  
O projeto apresenta informações sobre agentes, além de funcionalidades como **quiz interativo** e **dashboard analítico** para exibição de rankings e estatísticas.

O principal objetivo do projeto é aplicar e aprofundar conhecimentos em desenvolvimento web, banco de dados e integração entre front-end e back-end.

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- MySQL

---

# Funcionalidades

- Sistema de cadastro e login
- Escolha de foto de perfil
- Quiz interativo sobre classes de agentes
- Dashboard com ranking e estatísticas
- Armazenamento de resultados em banco de dados
- Interface dinâmica e responsiva
- Jogo para o usuario treinar mira (Aim Lab)

---

# Autor

**Gustavo Moraes**  
Projeto acadêmico desenvolvido na SPTech — 2026.

---

# Como Executar o Projeto

## 1. Instale as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

---

## 2. Configure o arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes configurações:

```env
AMBIENTE_PROCESSO=producao

# Configurações do banco de dados
DB_HOST=localhost
DB_DATABASE=SEU_DATABASE
DB_USER=USUARIO_DO_BD
DB_PASSWORD=SENHA_DO_BD
DB_PORT=3306

# Configurações da aplicação
APP_PORT=8080
APP_HOST=localhost
```

> Caso sua senha possua caracteres especiais, utilize aspas (`' '`).

---

## 3. Configure o arquivo `.env.dev`

Crie um arquivo chamado `.env.dev` e adicione:

```env
AMBIENTE_PROCESSO=desenvolvimento

# Configurações do banco de dados
DB_HOST=localhost
DB_DATABASE=SEU_DATABASE
DB_USER=USUARIO_DO_BD
DB_PASSWORD=SENHA_DO_BD
DB_PORT=3306

# Configurações da aplicação
APP_PORT=3333
APP_HOST=localhost
```

---

## 4. Configure o Banco de Dados

Crie um banco de dados MySQL e execute os comandos abaixo:

```sql
CREATE DATABASE ValorantUniverse;
USE ValorantUniverse;

CREATE TABLE usuario(
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45) UNIQUE,
    senha VARCHAR(45),
    foto VARCHAR(45)
);

CREATE TABLE quiz(
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    pontosDuelista INT,
    pontosControlador INT,
    pontosIniciador INT,
    pontosSentinela INT,
    dtQuiz DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUser INT,
    CONSTRAINT fk_usuario 
	FOREIGN KEY (fkUser) REFERENCES usuario(idUser)
);

CREATE TABLE aimlab(
	id INT PRIMARY KEY AUTO_INCREMENT,
	pontos INT,
	precisao INT,
	fkUser INT,
	CONSTRAINT ctFkUser 
	FOREIGN KEY (fkUser) REFERENCES usuario(idUser)
);
```

---

## 5. Execute o Projeto

No terminal, execute:

```bash
npm start
```

---

# Estrutura do Projeto

```bash
📁 assets
📁 node_modules
📁 public
 ┣ 📁 assets
 ┣ 📁 css
 ┣ 📁 js
 ┣ 📁 user_login
 ┣  ┣ 📁 agentes
 ┣  ┣ 📁 aimLab
 ┣  ┣ 📁 configuracoes
 ┣  ┣ 📁 dashboard
 ┣  ┣ 📁 index
 ┣  ┣ 📁 mapas
 ┣  ┗ 📁 quiz
 ┣ 📁 agentes
 ┣ 📁 cadastro
 ┣ 📁 index
 ┣ 📁 login
 ┗ 📁 mapas

📁 src
 ┣ 📁 controllers
 ┣ 📁 database
 ┣ 📁 models
 ┣ 📁 routes
 ┗ 📁 database

📄 app.js
📄 package.json
```

---

# Objetivo Acadêmico

Este projeto foi desenvolvido com fins educacionais, buscando aprimorar conhecimentos em:

- Desenvolvimento Full Stack
- Manipulação de DOM
- APIs e rotas
- Integração com banco de dados
- Visualização de dados

---
