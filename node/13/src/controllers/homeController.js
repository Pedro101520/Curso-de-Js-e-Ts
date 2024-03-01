const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descricao de testes'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    console.log("Respondendo ao cliente");
    res.render("index.ejs");
    next();
}

exports.teste = (req, res) => {
    res.send("Criando uma API");
}

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    return;
};