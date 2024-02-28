//Essas duas linhas de códigom carregam o Express
const express = require('express');
const app = express();

//Quando se criar uma API, ela deve ser capaz de realziar as seguintes operações
//          Criar   Ler     Atualizar   Apagar
//CRUD ->   CREATE, READ,   UPDATE,     DELETE
//          POST    GET     PUT         DELETE 

//As requisições viram após a barra do final de um link, que no caso será a requisição
//que será feita ao servidor, e o trabalho do express, é exibir a página correta, de acordo
//com a requisição feita, Por exemplo: http://meusite.com/sobre, no caso estaria sendo requisitado a
//página sobre

//Request é o que o usúario pediu para acessar e Response é a resposta desta requisição

//Abaixo está o código sobre a função get (Leitura) que será abordado nesta aula
//Aqui é a parte de resposta (Request)
app.get('/', (req, res) => {
    res.send("Hello world!");
});

//Aqui vou criar outra rota
app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato com a gente");
});

//Aqui vai ser especificado a porta que o Express vai trabalhar
app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});