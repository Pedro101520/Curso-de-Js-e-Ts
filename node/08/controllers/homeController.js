//Para cada rota, deve-se ter um arquivo especifico
exports.paginaInicial = (req, res) => {
    res.send(`
    <form action = "/" method = "POST">
    Nome: <input type = "text" name = "nome">
    <button>Enviar</button>
    </form>
    `);
}

//Aqui é um teste que eu fiz
exports.teste = (req, res) => {
    res.send("Criando uma API");
}

exports.trataPost = (req, res) => {
    res.send("Ei, sou sua nova rota de POST");
};