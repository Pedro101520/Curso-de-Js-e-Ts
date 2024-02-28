const fs = require("fs").promises;


//Aqui estou criando um módulo
module.exports = (caminho, dados) => {
    //Essa função escreve em arquivos
    //O w verifica se já existe um arquico com o mesmo nome, se sim sobrescreve
    //Caso necessario adicionar em vez de apagar, só trocar o W por A
    fs.writeFile(caminho, dados, { flag: 'w' });
}
