function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor){
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    };
    this.saldo -= valor;
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia} / ${this.conta} / Saldo: R$${this.saldo.toFixed(2)}`);
};
const conta1 = new Conta(11,22,10);

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.sacar = function(valor){
    if ((this.saldo + this.limite) < valor){
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};
const cc1 = new ContaCorrente(11,11,0,100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);

function ContaPoupanca(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
console.log(' ');
const cp = new ContaPoupanca(12,33,0)
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);