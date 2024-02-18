const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Esse código, exibe os valores do Array que são maiores que 10
// const num = [];
// for(i of numeros){
//     if(i > 10)
//         num.push(i);
// }
// console.log(num);

//Agora o código senguinte, vai fazer a mesma coisa que o código acima
//só que de uma maneira mais util

//Primeiro tem que criar uma função de CallBack, que vai ser utilizada dentro da função filter
function callbackFilter(valor, indice, array){
    //Para adicionar um valor na nova variavel, a condição que vai esta dentro desta função tem que retorna true
    //e se naõ quiser adicionar os dados da função, ela tem que retorna false

    //Neste exemplo, se escrever só a condição, ela já retorna true ou false
    return valor > 10;
}

//Aqui a função de callBack não está sendo chamada, pois a função filter já executa ela
const numeroFiltrados = numeros.filter(callbackFilter);
console.log(numeroFiltrados);

//A função, também poderia ser criada como uma função anonima, dentro da função filter
/*
Aqui é um exemplo

const numerosFiltrados = numeros.filter(function(valor){
    return valor > 0;
});
*/

//Aqui é a mesma função, só que muito resumida
//const numerosFiltrados = numeros.filter(valor => valor > 10);