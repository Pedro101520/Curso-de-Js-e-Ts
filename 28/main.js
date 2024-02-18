const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//O ..., serve para imprimir o que não foi impresso (O que sobrou)
//Pode criar varias variaveis desse jeito, e atribuir valores a elas
/*O nome das variaveis, são iguais ao indece dos valores do Array numeros 
(Se quiser pular um valor pode, é só colocar [valor1, , valor2], neste caso pulou o indice 1)
*/
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);