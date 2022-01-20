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

> API que registra memórias de mulheres cis e trans no território urbano, emglobando a Região Metropolitana de São Paulo e na Região Metropolitana de Recife. Dessa forma, vamos construir uma coleção dessas memórias, que possibilitará um futuro mapeamento coletivo. Nele, as histórias das mulheres estarão espacializadas e eternizadas, a fim de fomentar um sentimento de pertencimento e apropriação da cidade.

      
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

Este projeto foi criado como Trabalho Final do curso intensivo da {reprograma} em 2021 e sua execução é dividida em duas frentes: a primeira, esta API, tem como função criar um banco de dados com as histórias de diversas mulheres de São Paulo e Recife e sua relação com a cidade, dotadas de informações de localização geográfica; enquanto a segunda trata-se de uma geoespacialização dessas histórias, criando um mapa coletivo e interativo a ser disponibilizado online.
      

## **Contextualização**

As opressões de gênero, classe, raça e sexualidade compõem uma cultura que se reflete no espaço urbano: a cultura segregação, da exclusão. Ao impor papéis de gênero baseados no sexo biológico, a estrutura capitalista e patriarcal confina as mulheres aos limites de suas casas, o que faz com que tenhamos maior dificuldade de deslocamento e menos acesso aos espaços públicos - o que gera mais segregação socioespacial e menor representatividade, apropriação da cidade e identificação.  
A Pesquisa de Origem e Destino feita pelo Metrô em 2017 indica que, no geral, mulheres se deslocam menos que homens e percorrem distâncias mais curtas. O grau de instrução, a renda, o local de residência e atribuições familiares são fatores que restrigem o deslocamento das mulheres às proximidades de sua casa, geralmente utilizando transporte público ou se locomovendo a pé.  
Dito isto, reverter as estruturas sociais e, consequentemente, a territorialidade já imposta é um plano à longo prazo. Aos poucos, as mulheres tem vivenciado mais o espaço público e, como forma de incentivo e com o objetivo de gerar maior pertencimento e identificação com esses espaços, para que possamos ocupá-los cada vez mais, essa API foi criada.
      

## **Funcionalidades**

- [X] Criar usuária
- [X] Fazer login com e-mail e senha
- [X] Criar suas memórias
- [X] Editar memórias
- [X] Excluir memórias
- [X] Visualizar memórias
- [X] Filtar memórias por cidade
- [X] Filtar memórias por id


## **Tecnologias, bibliotecas e dependências**

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-2.34.1-green">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-16.13.1-green">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Mongodb Atlas" src="https://img.shields.io/badge/MongoDB%20Atlas-green">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-green">
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-8.1.2-green">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-green">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-6.0.3-green">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-green">
    <a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.1-green">
    <a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-green">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.12-green">
  </a> 
</p>

      
## **Instruções para instalação e contribuições no projeto**
      

1. Faça um `fork` do projeto;

2. Copie o _endereço_ do `fork` realizado e, no `prompt de comando` da sua máquina, realize o clone do projeto;

3. Crie uma branch para realizar suas contribuições;

4. Instale as dependências necessárias à execução da API através do comando `npm install`;

5. No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis _PORT_ (porta sugerida _8080_), _MONGODB_URL_ (string de conexão com o banco de dados) e _SECRET_ (chave RSA). Elas são necessárias para a execução da API em sua máquina.

6. Para executar a API, utilize o comando `npm start` no seu terminal;

7. Feito os devidos _commits_, para subir o projeto no seu GitHub basta executar o comando `git push origin feature/<sua_branch>`;

8. E não esqueça de criar um novo _Pull Request_ com as contribuições para o projeto original.     

      
## **Features e rotas**
      
 [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=ESERFN&uri=https%3A%2F%2Fgithub.com%2Fcardles%2FESERFN%2Fblob%2Fmain%2Fsrc%2Fview%2FinsomniaCollectionESERFN.json)

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
