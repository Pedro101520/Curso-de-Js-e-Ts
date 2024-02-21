class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = true;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }
}

//Em JavaScript, tem como herdar de uma classe que já herdou de outra, mas pode se fizer muito
//pode deixar o código complexo

//Aqui é a parte de herança de classes
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone("Samsung", "Azul", "S24 Ultra");
console.log(s1);