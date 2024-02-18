//IIFE -> Immediately invoked function expression
//Criar uma função que é auto chamada quando criada é uma boa pratica de programação, pois os códigos
//não ficam bagunçados no escopo global, evitando possiveis conflitos com bibliotecas
(function() {
    const nome = 'Pedro';
    console.log(nome);
})();

//Não tem o conflito, pois a primeira variavel nome, está protegida pelo o escopo da função
const nome = 'aaaa';
console.log(nome);