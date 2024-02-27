// module.exports = function(x, y){
//     return x * y;
// };

//Tem como exportar outro arquivos de módulos, é só especificar o caminho

module.exports = class Animal{
    constructor(nome){
        this.nome = nome;
    }

    falaNome(){
        console.log(`O nome do seu cachorro é: ${this.nome}`);
    }
}