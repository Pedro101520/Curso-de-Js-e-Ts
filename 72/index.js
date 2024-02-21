//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta - conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    //Se o valor for maior que o saldo
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10000);
conta1.depositar(11);
conta1.verSaldo();

//Aqui é a herança, e vai ser demonstrado o polimorfismo - CC = Conta Corrente
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//Lembrando, que tem que linkar o método com a classe que está herdando
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

//Aqui já é o polimorfismo
CC.prototype.sacar = function(valor){
    //Se o valor for maior que o saldo
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
};

const contaCorrente = new CC(11, 22, 0, 100);
contaCorrente.depositar(10);
console.log(contaCorrente.verSaldo());