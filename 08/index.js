//Pode criar string com "", '' ou ``
const nome = 'Pedro';
const nome1 = "Pedro1";
const nome2 = `Pedro2`;

//Variavel vazia, no lugar do undefined
let vazio;
if (vazio == undefined){
    console.log("A variavel esta vazia");
}
//O null utiliza quando quer colocar uma variavel com o valor null
let num = 10;
num = null;
console.log(num);

//Boolean, por exemplo um aluno está ou nao aprovado, se aprovado igual a true, se reporvado = false
const aprovado = true;
if (aprovado == true){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

let num1 = 50;
console.log(num1>=10?'Numero maior que 10':'Numero menor que 10');


//Aqui é um codigo que adiciona um valor a uma lista
let a = [1,2];
const b = a;

//Parte do codigo que adiciona o valor ao array
b.push(3);
console.log(a, b);