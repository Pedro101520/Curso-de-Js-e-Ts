const num = Number(prompt("Digite um numero: "));

//Aqui é a parte que faz com que o elemento do HTML seja convertido para js
let NumTitulo = document.getElementById('numero-titulo');
//Aqui serve para mudar o valor desta variavel na pagina HTML
NumTitulo.innerHTML = num;

let raiz = document.getElementById('Raiz');
raiz.innerHTML = `<p>A raiz quadrada é: ${num ** 0.5}</p>`;

let tipo = document.getElementById('Tipo');
tipo.innerHTML = `<p>${num} ${Number.isInteger(num) == true ? 'é inteiro' : 'não é inteiro'}</p>`;

let n = document.getElementById('N');
n.innerHTML = `<p>Numero: ${Number.isNaN(num) == true ? 'não' : 'sim'}</p>`;

let baixo = document.getElementById('Baixo');
baixo.innerHTML = `<p>Arredondar para baixo: ${Math.floor(num)}</p>`;

let cima = document.getElementById('Cima');
cima.innerHTML = `<p>Arredondar para cima: ${Math.ceil(num)}</p>`;

let dois = document.getElementById('Dois');
dois.innerHTML = `<p>Numero com duas casas: ${num.toFixed(2)}</p>`;