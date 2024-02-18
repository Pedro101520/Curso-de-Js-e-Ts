//Este código vai utilizar o Reduce, para retornar a pessoa mais velha
const pessoas = [
    {nome: 'Pedro', idade: 20},
    {nome: 'Maria', idade: 19},
    {nome: 'Eduardo', idade: 50},
    {nome: 'Leticia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Clara', idade: 18},
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);