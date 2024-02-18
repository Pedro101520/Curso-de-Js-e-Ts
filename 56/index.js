const pessoas = [
    {nome: 'Pedro', idade: 20},
    {nome: 'Maria', idade: 19},
    {nome: 'Eduardo', idade: 50},
    {nome: 'Leticia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Clara', idade: 18},
];

//Essa funçaõ de callBack, exibe os nomes que tem 5 ou mais letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

// const idades = pessoas.filter(function(obj){
//     return obj.idade >= 50;
// });
// console.log(idades);

const idades = pessoas.filter(obj => obj.idade >= 50);
console.log(idades);

//Aqui é a função para verificar se o nome termina com a
const nomeTerminaA = pessoas.filter(obj => {
    //A função endsWith, serve para ver qual nome que termina com a letra A
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaA);