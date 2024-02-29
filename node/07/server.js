const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method = "POST">
    Nome: <input type = "text" name = "nome">
    <button>Enviar</button>
    </form>
    `);
});

//Aqui é para ter a chave e receber um valor pela chave
//Para tornar a entrada do parâmetro opcional, é só colocar uma ?
app.get("/testes/:idUsuarios?", (req, res) => {
    console.log(req.params);
    //Este comandano serve para exibir os valores que são passados no EndPoint
    //localhost:/3000/testes/?nome=Pedro&sobrenome=Lima&idade=20
    console.log(req.query);
    res.send("Oi");
});

app.post ('/', (req, res) => {
    console.log(req.body);
    res.send("Recebi o formulário");
});

app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});