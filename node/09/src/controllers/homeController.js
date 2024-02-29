exports.paginaInicial = (req, res) => {
    res.render("index.ejs");
}

exports.teste = (req, res) => {
    res.send("Criando uma API");
}

exports.trataPost = (req, res) => {
    res.send("Ei, sou sua nova rota de POST");
};