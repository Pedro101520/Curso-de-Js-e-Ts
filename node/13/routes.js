const express = require('express');
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

route.post('/', homeController.trataPost);


route.get('/teste', homeController.teste);
route.get('/contato', contatoController.contato);

module.exports = route;