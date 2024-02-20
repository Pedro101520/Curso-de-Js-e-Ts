const produto = {nome: "Caneca", preco: 1.8};

//Aqui é para copiar o objeto para uma variável
const outraCoisa = {
    ...produto,
    material: "porcelana"
};

outraCoisa.nome = "Pedro Lima";


console.log(produto);
console.log(outraCoisa.material);
