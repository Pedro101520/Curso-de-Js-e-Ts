/*
O problema dessa função, é que nela é permitido que ela seja
chamada acima do código, onde ela foi declarada, o nome disto
é Function Hoisting
*/
function falaOi(){
    console.log('Oi');
}

//No caso abaixo, uma const está recebendo uma função como um dado
const souUmDado = function(){
    console.log('Sou um dado');
};
//Ai como a função acima tem uma const que recebe um dado, pode usar
//a const, como parametro dento de outra função, por exemplo:
function executaFUncao(funcao){
    funcao();
}
executaFUncao(souUmDado);

//Também tem as Arrow Function
const funcaoArrow = () => {
    console.log('Funcao Arrow Function');
}
funcaoArrow();