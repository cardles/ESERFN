<p align="center">
  <a>
    <a href="https://eserfn.herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/deploy-heroku.com-blueviolet">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Database MongoDB" src="https://img.shields.io/badge/database-mongodb.com-green">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/node-v12.18.3-blueviolet">
    <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/cardles/ESERFN?color=green">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/cardles/ESERFN?color=blueviolet">
    <img alt="GitHub License" src="https://img.shields.io/badge/License-MIT-green.svg">
  </a>
</p>

<h1 align="center">
  <img src="public/images/eserfn_logo.png" alt="duas mãos criando manipulando um mapa e as iniciais do nome do projeto." width="750">
  <p align="center">E se essas ruas fossem nossas?</p>
</h1>
<h3 align="center">
  <p>O pertencimento feminino ao espaço público</p>
</h3>

> API que registra memórias de mulheres cisgênero/transgênero no território urbano (RMSP e RMR) com a finalidade de produzir e disponibilizar um mapeamento coletivo no qual as memórias estarão geoespacializadas e eternizadas, a fim de gerar um sentimento de pertencimento à cidade.  

      
## **Sumário**

- [Apresentação](#apresentação)
- [Contextualização](#contextualização)
- [Fonte dos dados](#fonte-dos-dados)
- [Funcionalidades](#funcionalidades)
- [Tecnologias, dependências e bibliotecas](#tecnologias-dependências-e-bibliotecas)
- [Instruções para instalação e contribuições no projeto](#instruções-para-instalação-e-contribuições-no-projeto)
- [Features e rotas](#features-e-rotas)
- [Referências](#referências)

## **Apresentação**

Apresente seu projeto.
      

## **Contextualização**

Conte o que está por trás dele.
      

## **Funcionalidades**

- [X] Liste
- [X] As
- [X] Funcionalidades


## **Tecnologias, bibliotecas e dependências**

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-yellow">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-yellow">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-yellow">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-yellow">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow">
    <a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.0-yellow">
    <a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-yellow">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow">
  </a> 
</p>

## **Instruções para instalação e contribuições no projeto**

- Faça um `fork` do projeto através do link (<https://github.com/priscilaestevao/pretitudes-project-reprograma/fork>);

- Copie o código do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.

      
## **Features e rotas**

Esta API está sendo escutada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

      
### _Manipulando registros como pessoa usuária_

| Feature | Método | Rota |
|---------|--------|------|
| Lista de todas as candidaturas negras de 2020 | GET | `/candidaturas-negras` |
| Lista de todos os movimentos populares | GET | `/candidaturas-negras/lista-movimentos` |
| Filtro de candidaturas negras por cidade | GET | `/candidaturas-negras/cidade/<nome-da-cidade>` |
| Lista de candidaturas negras eleitas em 2020 | GET | `/candidaturas-negras/eleitas2020` |

### _Manipulando registros como pessoa administradora (requer token de autenticação)_

| Feature | Método | Rota |
|---------|--------|------|
| Login de pessoa administradora | POST | `/admin/login` |
| Cadastro de candidaturas negras | POST | `/candidaturas-negras` |
| Atualização de cadastro de candidaturas por id | PUT | `/candidaturas-negras/:_id` |
| Remoção de candidaturas que não são de movimentos sociais | DELETE | `/candidaturas-negras/participacao?movimentoSocial=unidefined` |
| Cadastro de pessoa administradora | POST | `/admin/` |
| Lista de todas as pessoas administradoras | GET | `/admin` |
| Atualização de cadastro de pessoa administradora por id | PUT | `/admin/:id` |
| Remoção de pessoa administradora por email | DELETE | `/admin?email=<email_da_pessoa_administradora_castrada>` |

      
<hr>

Criado com :black_heart: por **Letícia Cardoso** e o apoio das professoras, monitoras, e colegas de turma da {reprograma}.
      


## rotas

### > index
[x] {GET}/  
Retorna nome da API, mensagem de boas-vindas, como usar a primeira vez e direcionamento para a documentação.  
HTTP 200 OK  

[x] {GET}/sobre  
Retorna mensagem sobre o intuito do projeto, o impacto que deseja causar e por quê ele existe. 
HTTP 200 OK  

[x] {GET}/contato  
Retorna mensagem com informações de contato da autora deste projeto, como nome, e-mail e LinkedIn.  
HTTP 200 OK  


### > my memories
[x]{GET}/minhas-memorias
Retorna todas as memórias da usuária.
HTTP 200 OK

[x]{POST}/minhas-memorias/criar  
Registra nova memória com informações via body.  
HTTP 201 CREATED  

[x]{DELETE}/minhas-memorias/apagar/:id  
Exclui memória por id.  
HTTP 200 OK   

[x]{PUT}/minhas-memorias/editar/:id  
Permite editar todo o corpo do item por id.  
HTTP 200 OK  


### > our memories
[x]{GET}/nossas-memorias  
Retorna todas as memórias já cadastradas no banco de dados.  
HTTP 200 OK 

[x]{GET}/nossas-memorias/cidade  
Retorna as memórias registradas na cidade requisitada.  
HTTP 200 OK  

[x]{GET}/nossas-memorias/:id  
Retorna uma memória especificada por id.  
HTTP 200 OK 


### > user
{POST}/usuaria/criar  
Cria usuária para que ela possa consultar, registrar, editar ou deletar suas memórias.  
HTTP 201 CREATED  

{POST}/usuaria/entrar  
HTTP 202 ACCEPTED  
