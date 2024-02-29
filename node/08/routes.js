//Este aqruivo se responsabiliza em apenas especificar a rota
const express = require('express');
const route = express.Router();
//Aqui vai ser importado a função do controller
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");

//Lembrando que aqui são as rotas da home
route.get('/', homeController.paginaInicial);
//Aqui esta sendo chamado o novo POST
route.post('/', homeController.trataPost);

//Aqui é um teste que eu fiz
route.get('/teste', homeController.teste);

route.get('/contato', contatoController.contato);

module.exports = route;