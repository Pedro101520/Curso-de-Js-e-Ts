// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

//Aqui é a função construtora da camiseta
function Camiseta(nome, preco, cor){
    //Aqui está linkando a função produto, com a função camiseta
    //Então não precisa escrever todo o código anterior, para ter as mesmas funções da função produto
    Produto.call(this, nome, preco);
}

//Aqui o objeto Camiseta, tá recebendo o objeto produto
Camiseta.prototype = Object.create(Produto.prototype);
//Aqui serve para passar o construtor real da camiseta
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen', 111);
const camiseta = new  Camiseta('Regata', 7.5, 'Preta');
console.log(produto);
console.log(camiseta);

// camiseta.aumento(10);
