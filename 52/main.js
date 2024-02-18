function recursiva(max){
    //Se max for maior que 10 ele para o código
    if(max > 10) return;
    //Se não ele adiciona mais um no parametro max
    max++;
    //Exibe o numero
    console.log(max);
    //E chama a função de novo, ai isso vai repetir até quando max for maior que 10
    recursiva(max);
}
recursiva(0);