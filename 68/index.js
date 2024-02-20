// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//O prototype, são atributos, que vão ser atribuidos para todos os objetos da classe
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa("Pedro", "Lima"); // <= Pessoa = função construtora
const pessoa2 = new Pessoa("Maria", "Clara"); // <- Pessoa = Função construtora

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());

//Aqui é a chamada do valor do __proto__
// console.log(pessoa2.estouAqui);