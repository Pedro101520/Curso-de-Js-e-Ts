function criaPessoa (nome, sobrenome, idade){
    return{

        /*Quando os nomes do objeto são iguais, como os que estão abaixo, pode criar assim:
        nome,
        sobrenome,
        idade
        Ai criando assim, o JavaScript, já reconehce que é um obejeto

        Se quiser também pode deixar tudo na mesma linha, usando o método acima
        */
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

//Ai aqui pode criar quantas pessoa quiser
const pessoa1 = criaPessoa('Pedro', 'Lima', 19);
const pessoa2 = criaPessoa('Maria', 'Clara', 17);

console.log(pessoa1.nome, pessoa2.sobrenome);