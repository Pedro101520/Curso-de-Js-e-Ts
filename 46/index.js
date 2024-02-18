const inserirNome = (callBack) => {
    let nome = 'Pedro';

    /*
    Como foi passada uma função como parametro para está função
    o parametro callBack, seria como se fosse a função meuNome Então quando está sendo chamado aqui, está passando o parametro
    Nome que é 'Pedro', para a função meuNome
    */
    callBack(nome);
}
const meuNome = (nome) => {
    //Ai aqui o valor do parametro nome foi passado na função inserirNome
    console.log('Ola, ' + nome);
}

//Aqui, a função meuNome está sendo passada como parametro
//para a função inserirNome
inserirNome(meuNome);