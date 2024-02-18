const paragrafos = document.querySelector('.paragrafo');
/*
Essa parte do codigo, é o NodeList, que é quando, seleciona todas as tags
de algum elemento do JavaScript, neste caso está acontecendo pela div que tem uma 
classe, e dentro dela tem 3 tags P, a atraves do codigo abaixo, é possivel
selecionar todas as tags P
*/
const tagP = paragrafos.querySelectorAll('p');

//O codigo abaixo, serve para pegar a cor de fundo do background
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

//Aqui serve para colocar o fundo do pagrafo na cor do backgroud
for(let i of tagP){
    i.style.backgroundColor = backgroundColorBody;
    //Aqui é para colocar a cor das letras em Branco
    i.style.color = '#ffffff'
}