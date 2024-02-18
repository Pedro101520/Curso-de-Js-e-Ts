const peso = document.getElementById('Peso');
const altura = document.getElementById('Altura');
const resultado = document.getElementById('Resultado');

function enviar(){
    let imc = peso.value / Math.pow(altura.value, 2); 
    imc = (imc.toFixed(2));
    if (imc < 18.5){
        resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
        resultado.style.backgroundColor = "green";
    }
    else if (imc >= 18.5 && imc < 25){
        resultado.innerHTML = `Seu IMC é ${imc} (Peso Normal)`;
        resultado.style.backgroundColor = "green";
    }
    else if (imc >= 25 && imc < 30){
        resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
        resultado.style.backgroundColor = "green";
    }
    else if (imc >= 30 && imc < 35){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
        resultado.style.backgroundColor = "orange";
    }
    else if (imc >= 35 && imc < 40){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
        resultado.style.backgroundColor = "orange";
    }
    else if (imc >= 40){
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
        resultado.style.backgroundColor = "orange";
    }
    else{
        resultado.innerHTML = "Valor invalido";
        resultado.style.backgroundColor = "red";
    }
    return false;
}