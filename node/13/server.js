//Este módulo, permite criar um arquivo privado, que contém os dados de conexão do banco de dados
require('dotenv').config();

const express = require('express');
const app = express();

//Aqui o projeto vai ser conectado ao banco de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    //Esta emisão de sinal, só colcoada aqui, para que seja possível a execução do servidor primeiro
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));
    

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'enj');

app.use(meuMiddleware);
app.use(routes);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

//Esta função só vai ser executada, quando a conexão do banco de dados ocorrer
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Servidor executando na porta 3000");
    });
});