//Aqui serve para arredondar um numero para baixo
let num = 1.8577429847;
let num2 = Math.floor(num);
console.log(num2);

//Aqui serve para arredondar um numero
let num3 = 1.67098;
let num4 = Math.ceil(num3);
console.log(num4);

//Aqui arredonda o numero para cima, ou para baixo
let num5 = 9.50;
let num6 = Math.round(num5);
console.log(num6);

//Aqui serve para imprimir o mair numero
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));

//Aqui serve para imprimir o menor numero
console.log(Math.min(1,2,3,4,5,6,7,8,9,10));

//Math.random serve para gerar um numero aleatorio
//Essa parte, gera um numero aleatorio entre 5 e 10
let aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);