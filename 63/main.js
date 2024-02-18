//Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

//Instância
const pessoa1 = new Pessoa('Luiz', '0. '); // <- Pessoa = Função construtura
const pessoa2 = new Pessoa('Maria', 'A'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);