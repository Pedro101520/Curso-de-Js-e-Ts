//Classe principal
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//Método
Pessoa.prototype.Exibir = function(){
    console.log(this.nome + this.sobrenome);
};

//Herança
function Aluno(nome, sobrenome, idade){
    Pessoa.call(this, nome, sobrenome);
    this.idade = idade;
}

//Linkar os métodos
Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;

//Polimorfismo
Aluno.prototype.Exibir = function(){
    console.log(`Seu nome é: ${this.nome} ${this.sobrenome} e voce tem ${this.idade} anos`);
};

const a1 = new Aluno("Maria", "Clara", 18);
a1.Exibir();