const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

switch(diaSemana){
    case 0: console.log('Domingo');
    break;
    case 1: console.log('Segunda');
    break;
    case 2: console.log('Terça');
    break;
    case 3: console.log('Quarta');
    break;
    case 4: console.log('Quinta');
    break;
    case 5: console.log('Sexta');
    break;
    case 6: console.log('Sabado');
    break;
    default: console.log('Dia não encontrado');
    break;
}

console.log(diaSemana);