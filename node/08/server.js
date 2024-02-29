const express = require('express');
const app = express();
//Aqui vai chamar o módulo routes.js que especifica o caminho
//e dentro do arquivo routes.js ele está chamando o módulo do arquivo homeController, que contém
//As funções
const routes = require('./routes');

//Aqui vai ser chamado a rota com as funções que foram desenvolvidas com os arquivos routes.js e homeController.js
//Aqui está chamando o arquivo completo
app.use(routes);

app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});