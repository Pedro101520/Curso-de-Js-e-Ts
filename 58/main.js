//O reduce é utilizado pra reduzir o Array até um elemento
//O reduce pde receber os seguinte parametros: acumulador, valor, indice, array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
    //Esse 0 é o valor padrão ou inicial do parametro acumulador
}, 0);
console.log(total);
