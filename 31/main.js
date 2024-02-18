const frutas = ['Laranja', 'Melancia', 'Uva'];

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lima',
    idade: 30
}

//Este for, já pega o tamanho de uma variavel, e contabiliza no i
for(i in frutas){
    console.log(frutas[i]);
}

console.log('\n');

//For in com objeto
for(i in pessoa){
    console.log(i);
}