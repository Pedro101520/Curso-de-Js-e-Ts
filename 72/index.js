//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta - conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    //Se o valor for maior que o saldo
    if(this.saldo < valor){
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