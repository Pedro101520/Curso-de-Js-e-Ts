//Função construtora
//Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    const ID = 12345;

    const metodoInterno = function(){

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Pedro', 'Lima');
const p2 = new Pessoa('Maria', 'Clara');
p2.metodo();