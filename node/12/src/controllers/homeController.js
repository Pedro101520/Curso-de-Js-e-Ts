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