//Promises
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()  *(max - min) + min);
}

/*
Promise em JavaScript, fazem com que o código aguardem a um bloco de código
assíncrono, até que a ordem esperada seja retornada da forma esperada

O código abaixo é assíncrono, e esta envolvido por uma promise
*/
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        //Este código vai cair em um erro, com a entrada de dados atual, ai o código vai ser
        //redirecionado para o catch
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//Aqui é a continuação da promise, onde vai ser exibido o retorno na ordem especificada
esperaAi("Frase 1", rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi("Frase 2", rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log("ERRO: ", e);
    });

console.log("Isso aqui será exibido antes de qualquer promise");