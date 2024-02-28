//Aqui vai ser o módulo para ler arquivos
const fs = require("fs").promises;

module.exports = (caminho) => fs.readFile(caminho, "utf8");