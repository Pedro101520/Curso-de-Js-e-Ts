function priNum(semPonto){
    let j = 0, soma = 0;
    for(let i = 10; i >= 2; i--, j++){
        soma += semPonto[j] * i;
    }
    soma = 11 - (soma % 11);
    if (soma > 9)
        return 0;
    return soma;
}

function ultNum(semPonto){
    let j = 0, soma = 0;
    for(let i = 11; i >= 3; i--, j++){
        soma += semPonto[j] * i;
    }
    soma += 2 * priNum(semPonto);
    soma = 11 - (soma % 11);
    if(soma > 9)
        return 0;
    return soma;
}

let cpf = "070.987.720-03";
let semPonto = cpf.replace(/\D+/g, '');
let cpfVer;

cpfVer = Array.from(semPonto);
semPonto = Array.from(semPonto);
semPonto.splice(-2);
semPonto.push(priNum(semPonto), ultNum(semPonto));

if (cpfVer.join('') === semPonto.join('')) {
    console.log("O cpf informado é válido");
}else{
    console.log("O Cpf informado não é válido");}
