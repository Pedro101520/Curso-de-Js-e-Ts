function criaPessoa(nome, sobrenome, altura, peso){
    //Quando tem uma função dentro de um objeto, é chamado de método
    return{
        nome, 
        sobrenome,
        //Aqui é o método
        fala: function(assunto){
            //O this é quem chama o objeto, por exemplo, neste caso ele é o p1
            //Com os seus parametros
            return `${this.nome} está ${assunto}`;
        },

        //Caso fosse outro nome, poderia passar os dados dos parametros para outra variavel
        //usando o :, exemplo: altura: a
        altura,
        peso,
        //Aqui é outro método
        imc: function(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
//Depois que criar as funções e métodos, é só criar as pessoas, o que é facil

//Aqui ta passando os valores da função pela variavel
const p1 = criaPessoa('Pedro', 'Lima', 1.87, 85);
const p2 = criaPessoa('Maria', 'Clara', 1.68, 70);

//Aqui está chamando o método, e passando o parametro assunto
console.log(p1.fala('falando sobre JS'));

//Aqui chama o método IMC
console.log(p2.imc());