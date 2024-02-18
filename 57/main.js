//A função map, muda os valores do Array (Atualiza os dados contidos dentro de um Array)
//Diferente do que acontece na filter (Onde ela pode encurtar o tamanho do Array dependendo da consição
//que ela tem), o map deixa o Array com o mesmo tamanho

//No exemplo abaixo, os valores numeros do Array numeros, serão dobrados
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//Aqui é a mesma coisa da função filter, ela passa por uma callBack
const numerosEmDobro = numeros.map(function(valor){
    return valor * 2;
});
console.log(numerosEmDobro);