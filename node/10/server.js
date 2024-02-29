const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(routes);

//Aqui vai especificar o caminho da pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Aqui vai indicar qual view engine que vai ser utilizada
app.set('view engine', 'enj');

app.use(express.urlencoded({ extended: true }));

//Aqui serve para especificar o caminho da pasta de conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));



app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});