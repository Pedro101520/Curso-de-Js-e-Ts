// const multiplica = require('./mod');

// console.log(multiplica(2, 2));

const dog = require('./mod');
const cachorro = new dog("Pipoca");
cachorro.falaNome();

//Aqui é o nome do arquivo
// console.log(__filename);
//Aqui é o nome da pasta
// console.log(__dirname);

//Aqui é um código para especificar o caminho, quando não se tem certeza em qual tipo de
//sistema o programa vai rodar
const path = require("path");
console.log(path.resolve(__dirname));