//Factory Function
function criaPessoa(nome, sobrenome){
    //Aqui está sendo definido o prototype das pessoas
    const pessoaProtorype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        },
    }

    //Aqui vou linkar o prototype com pessoa
    return Object.create(pessoaProtorype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa("Pedro", "Lima");
const p2 = criaPessoa("Maria", "Clara");
p1.comer();
p2.falar();