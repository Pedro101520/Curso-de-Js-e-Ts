const pessoas = [
    {nome: 'Pedro', idade: 20},
    {nome: 'Maria', idade: 19},
    {nome: 'Eduardo', idade: 50},
    {nome: 'Leticia', idade: 70},
    {nome: 'Rosana', idade: 60},
    {nome: 'Clara', idade: 18},
];

//Essa função retorna os nomes
const nomes = pessoas.map(function(valor){
    return valor.nome;
});

//Essa função remove os nomes, e retorna o novo valor
const idades = pessoas.map(function(valor){
    delete valor.nome;
    return valor;
})

//Esta função adiciona um novo elemento ao objeto
const comIds = pessoas.map(function(valor, indice){
    valor.id = indice;
    return valor;
})

console.log(nomes); 
console.log(idades);
console.log(comIds);