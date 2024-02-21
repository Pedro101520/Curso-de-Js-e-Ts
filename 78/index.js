//Método estático, é um método que funciona como uma função, por exemplo:
//Este método só vai funcioanr dentro da classe em que foi declarado. Um exemplo de uso
//é para a organização de código dentro da própria classe em que foi declarado
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //Este é o método estático, ele não precisa ser instânciado para ser chamado, pois ele é referente 
    //a classe toda
    static trocaPilha(){
        console.log("Vou trocar");
    }
}

const controle1 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
console.log(controle1);

//Como é um método estático, ele só pode ser chamado com o nome da classe
ControleRemoto.trocaPilha();