const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
//Aqui cria uma div no HTML
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    //Aqui imprime as tags que foram criadas
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    //Aqui ta imprimindo o texto do objeto pessoa
    tagCriada.innerHTML = texto;
    //Aqui adiciona as tags na div que foi criada
    div.appendChild(tagCriada);
}
//Aqui adiciona o container na div
container.appendChild(div);