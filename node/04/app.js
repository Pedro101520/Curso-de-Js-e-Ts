const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
//Implementação do modulo criado para escrita
const escreve = require("./modules/escrever");
//Implementação do módulo criado para leitura
const ler = require("./modules/ler");

//Aqui é a criação de um arquivo Json, a partir de um Array de Objetos
// const pessoas = [
//     {nome: "Pedro"},
//     {nome: "José"},
//     {nome: "João"},
//     {nome: "Maria"},
//     {nome: "Ana"},
// ];
//A constante json vai ser passada na função de criação de escrita de arquivos, que está abaixo
//A linha abaixa está com mais parâmetros, pois está sendo formatada
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    return dados;
}

const dadosArquivo = lerArquivo(caminhoArquivo)
    .then(dados => console.log(dados));