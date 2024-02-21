//Produto -> aumento, desconto
//Camiseta = Cor, caneca = material

//Função construtora que abstrai os produtos listados acima
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

//Aqui já é a parte de herança
function Camiseta(nome, preco, cor){
    //Aqui serve para linkar a função Camiseta com a função Produto
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Aqui serve para passar os prototypes do produto para a camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


const camiseta = new Camiseta("Regata", 10.50, "Azul");
camiseta.desconto(10);
console.log(camiseta);