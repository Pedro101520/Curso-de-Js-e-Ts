//Essa função é responsavel pela criação dos segundos
function criaHoraSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
console.log(criaHoraSegundos(10));

const inicio = document.querySelector('#play');
const pausar = document.querySelector('#pause');
const zerar = document.querySelector('#stop');
const relogio = document.querySelector('#relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
  }

function iniciar(){
    iniciaRelogio();
    return false;
}

// function pausar(){
//     clearInterval(timer);
//     return false;
// }

// function zerar(){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     return false;
// }
