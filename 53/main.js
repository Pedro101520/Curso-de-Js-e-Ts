//Função geradora
//Essa função pode ser eecutada por partes (seria como se o código dentro da função fosse pausado)
//e continuasse após a chamada fora do escopo da função
function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}
//Exemplo de como chamar os elementos
const g1 = geradora1();
//Nesta primeira chamada da função, será exibido o primeiro valor que está na função, e vai ser assim por diante, exibindo os valores por ordem
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);