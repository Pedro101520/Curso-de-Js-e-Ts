const Pedro = {
    nome: 'Pedro',
    sobrenome: 'Lima',
    idade: 19,
    
    //Aqui é uma função, dentro do objeto
    fala(){
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementa(){
        this.idade++;
    },
};

Pedro.fala();
Pedro.incrementa();
Pedro.fala();