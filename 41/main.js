//Essa função serve para exibir a hora atual
function mostraHora(){
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour12: false
    });
}
// console.log(mostraHora());

//Essa função chama a primeira
function funcaoDoInterval(){
    console.log(mostraHora());
}

//A função abaixo serve para executar algo de tempos em tempos
//Vai ser executado a funciton: funcaoDoInterval, e vai ser executado a cada 1 segundo
// setInterval(funcaoDoInterval, 1000); ***********************

//Para conseguir fazer um código que sej aparado, com um tempo determinado
//Tem que fazer da seguintye forma:
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

//A função abaixo serve para parar o setInterval
setTimeout(function(){
    clearInterval(timer);
}, 10000);