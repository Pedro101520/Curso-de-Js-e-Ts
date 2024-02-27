const nome = "Pedro";
const sobrenome = "Lima";

const falaNome = () => {
    console.log(nome, sobrenome);
};

//Aqui serve para exportar algo para um objeto
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(exports);