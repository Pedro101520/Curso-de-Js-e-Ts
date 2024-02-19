//Getters e Setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    //Criar uma variavel desse tipo, para valores privates, é boa prática de programação
    let estoquePrivado = estoque;

    //Aqui seria uma função para tornar um atributo private
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, // configurável

        //Get exibe o valor
        get: function(){
            return estoquePrivado;
        },
        //Set modifica o valor
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("Valor não numérico")
                return;
            }
            estoquePrivado = valor;
        }

        //Essas duas funções não são necessárias, pois vou utilizar o Get e o Set
        // value: estoque,
        // writable: true,
    });
}

//Aqui é o método construtor
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = "Texto";
console.log(p1.estoque);