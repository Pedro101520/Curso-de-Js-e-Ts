const numeros = [1,2,3,4,5,6,7,8,9];
for(i of numeros){
    //O continue nos laços de repetição, faz com que retorne para o proximo valor da consição
    if(i === 2)
        continue;
    //O break sai do laço
    if(i === 7)
        break;
    console.log(i);
}