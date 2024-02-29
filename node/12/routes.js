const express = require('express');
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next){
    console.log();
    console.log('Passei no  seu middleware');
    console.log();
    next();
 }


//com o next implantado na função, possivel chamar uma função automaticamente após o termino de execução
//por exemplo: a função meuMiddleware está sendo chamado com o next, e a função do arquivo homeController
//paginaInicial também possui um next, o que possibilida a execução uma após a outra
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log("Ainda estou aqui");
});

route.post('/', homeController.trataPost);


route.get('/teste', homeController.teste);
route.get('/contato', contatoController.contato);

module.exports = route;