function dias(diaSemana){
    switch(diaSemana){
        case 0: console.log('Domingo');
        return diaSemana;
        case 1: console.log('Segunda');
        return diaSemana;;
        case 2: console.log('Terça');
        return diaSemana;;
        case 3: console.log('Quarta');
        return diaSemana;;
        case 4: console.log('Quinta');
        return diaSemana;;
        case 5: console.log('Sexta');
        return diaSemana;;
        case 6: console.log('Sabado');
        return diaSemana;;
        default: console.log('Dia não encontrado');
        return diaSemana;;
    }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

console.log(dias(diaSemana));