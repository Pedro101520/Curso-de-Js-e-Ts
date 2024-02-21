//Este código serve para criar um atributo privado
const _velocidade = Symbol("velocidade");
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    //Getter
    get velocidade(){
        return this[_velocidade];
    }
    //Setter, aqui pode-se fazer verificações
    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("Fusca");

// for(let i = 1; i <= 50; i++){
//     c1.acelerar(i);
// }

c1.velocidade = 99;
console.log(c1.velocidade);