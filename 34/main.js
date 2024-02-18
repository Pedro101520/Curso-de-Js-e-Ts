//Esse código além de usar while, ele exibe um numero aleatorio
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

//Só vai sair do loop, quando rand for igual a 10
while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}