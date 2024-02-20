function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
//É uma boa prática de programação, colcoar os métodos fora da função construtora
Produto.prototype.desconto = function(desconto){
    this.preco = this.preco - (this.preco * (desconto / 100));
};

Produto.prototype.aumento = function(desconto){
    this.preco = this.preco + (this.preco * (desconto / 100));
};

const hadware = new Produto("Monitor", 100);
hadware.desconto(10);
console.log(hadware);