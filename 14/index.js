let num = 10;
let num1 = 15;
let decimal = 10.10101010101010101010

/*toString() serve para retornar o valor do tipo numero como um tipo String, sem alterar o valor ou
o tipo da variavel
*/
console.log(num.toString() + num1);

//Aqui é para limitar o numero de casas decimais
console.log(decimal.toFixed(2));


//Aqui serve para mudar o tipo da variavel
num1 = toString(num1);
console.log(typeof(num1));