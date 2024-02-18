//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    //Essa função serve para que o valor de estoque não vire publica, e que não seja possivel alterar o seu valor
    //Também serve para fazer alterações no valor, e a forma que ele vai ser impreso
    Object.defineProperty(this, 'estoque', {
        //Essa propriedade, define se a variavel pode ser percorrida por um laço de repetição - mostra a chave quando for utilizado
        enumerable: true,
        value: estoque,
        //Essa propriedade, define se é possivel alterar o valor da variavel estoque
        writable: false,
        //Essa propriedade, define se a variavel pode ser recondifgurada, ou seja se pode criar outra função e alterar as propriedades ja existentes
        configurable: true,
    });

    //Essa função serve para alterar os valores da mesma forma que a função acima, só que o que as difere
    //É que tem que colocar as propriedades dentro das chaves da variavel, isso facilita, já que pode criar e definir as funções dentro de uma mesma função
    Object.defineProperties(this, {
        nomes: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}