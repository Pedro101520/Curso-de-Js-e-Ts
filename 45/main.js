function funcao(a, b){
    //Aqui, se b não existir, ele vai ser igual a 0
    b = b || 0;
    console.log(a + b);
}
funcao(2);

//Outra solução mais moderna, para quando não foi passado um
//parâmetro para uma função. Neste caso tem que passar um valor padrão
function funcao2(a, b = 2, c = 4){
    console.log(a + b + c);
}
//Neste caso, o pametro b, não vai usar o valor padrão, pois
//Está sendo passado um novo paraetro para ele no código abaixo
funcao2(2, 10);
//Se quiser pular um dos valores dos parametros, por exemplo:
//mandar o valor do parametro para A e C e pular o B, teria que fazer da seguinte forma:
// funcao(2, undefined, 20);