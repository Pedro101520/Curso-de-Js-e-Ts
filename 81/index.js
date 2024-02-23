function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Marh.flor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        //Aqui foi o escolhido para rejeitar, mas pode escolher outras condições para o reject
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    })
}

const promises = [
    "Primeiro valor",
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    "Outro Valor"
];

//Promise.all resolve todas as promises, caso todas forem sucesso, caso uma der erro a promise.all sera retornada como erro
// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     })

//Promise.race retorna o primeiro valor que for resolvido
// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     })

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve("Página em cache");
    }else{
        return esperaAi("Baixei a página", 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));