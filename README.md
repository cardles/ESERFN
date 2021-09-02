# E se essas ruas fossem nossas?

API que registra memórias de mulheres cisgênero/transgênero no território urbano (RMSP e RMR) com a finalidade de produzir e disponibilizar um mapeamento coletivo no qual as memórias estarão geoespacializadas e eternizadas, a fim de gerar um sentimento de pertencimento à cidade.


## rotas

### > index
{GET}/inicio    
Retorna mensagem de boas-vindas, regras de uso e explicação das informações requisitadas no cadastro.  
HTTP 200 OK  

{GET}/sobre  
Retorna mensagem sobre o intuito do projeto, o impacto que deseja causar e por quê ele existe. 
HTTP 200 OK  

{GET}/contato  
Retorna mensagem com informações de contato da autora deste projeto, como nome, e-mail e LinkedIn.  
HTTP 200 OK  


### > my memories
{POST}/minhas-memorias/criar  
Registra nova memória com informações via body.  
HTTP 201 CREATED  

{DELETE}/minhas-memorias/apagar/:id  
Exclui memória por id.  
HTTP 200 OK   

{PUT}/minhas-memorias/editar/:id  
Permite editar todo o corpo do item por id.  
HTTP 200 OK  


### > our memories
{GET}/nossas-memorias  
Retorna todas as memórias já cadastradas no banco de dados.  
HTTP 200 OK 

{GET}/nossas-memorias/cidade  
Retorna as memórias registradas na cidade requisitada.  
HTTP 200 OK  

{GET}/nossas-memorias/:id  
Retorna uma memória especificada por id.  
HTTP 200 OK 


### > user
{POST}/usuaria/criar  
Cria usuária para que ela possa consultar, registrar, editar ou deletar suas memórias.  
HTTP 201 CREATED  

{POST}/usuaria/entrar  
HTTP 202 ACCEPTED  