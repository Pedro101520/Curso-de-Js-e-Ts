//Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lima',
    idade: 20,
    //Aqui é um objeto, dentro de outro objeto
    endereco: {
        rua: 'General Osório',
        numero: 220
    }
};

//Atribuição via desestruturação
/*A mensagem Nã existe, seria exibida no caso de não houver
o objeto nome dentro de pessoa
*/
//Se colocasse nome: N, 'N' teria o valor do objeto nome, queu está dentro de pessoa
const {nome = 'Não existe', sobrenome} = pessoa;
console.log(nome, sobrenome);

const {endereco: {rua, numero}} = pessoa;
console.log(rua);