let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

function start() {
    cronometro = setInterval(atualizarCronometro, 1000);
}

function stop() {
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    horas = 0;
    atualizarTempo();
}

function atualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        minutos++;
        segundos = 0;
    }

    if (minutos === 60) {
        horas++;
        minutos = 0;
    }

    atualizarTempo();
}

function atualizarTempo() {
    const tempoElemento = document.getElementById('tempo');
    const tempoFormatado = formatarTempo(horas) + ':' + formatarTempo(minutos) + ':' + formatarTempo(segundos);
    tempoElemento.textContent = tempoFormatado;
}

function formatarTempo(tempo) {
    return tempo < 10 ? '0' + tempo : tempo;
}