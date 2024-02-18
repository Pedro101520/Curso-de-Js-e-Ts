//Aqui é um exemplo de função de função construtora
//mas utilizando o prototype, definindo as funções com o método
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//Aqui, o código abaixo esta herdando a função Produto, por meio da função prototype
//E quando utiliza essa função, não precisa criar as funções dentro da função construtora, pois vai esta herdando
//O valor do percentual vai ser passado mais adiante
//Est função esta recebendo valores de uma função Pai, esta função também é capaz de receber valores por meio de parametros
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//Valores da função Produto
const p1 = new Produto('Camiseta', 50);

//Aqui é para reaproveitar as funções do objeto Produto para p2
const p2 = {
    nome: 'Caneca',
    preco: 15
};
//Aqui faz com que p2 herde os valores de Produto
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

p1.desconto(100);
console.log(p2);