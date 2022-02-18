class ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(val) {
        this._saldo += val;
        console.log("Saldo após o depósito: " + this._saldo);
    }

    sacar(val) {
        if(val <= this._saldo) {
            this._saldo -= val;
            console.log('Saldo após o saque: ' + this._saldo);
        } else {
            console.log("Você não possui saldo suficiente!");
        }
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente';
    }

    set cartaoCredito(valueCard) {
        this._cartaoCredito = valueCard;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor() {
        super();
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        super(agencia, numero, saldo, tipo);
    }

    depositar(val) {
        super.depositar(val);
    }

    sacar(val) {
        if(val < 500) {
            super.sacar(val);
        } else {
            console.log('Não é possível efetuar saque superior a R$ 500,00 na conta universitária');
            //throw 'Não é possível efetuar saque superior a R$ 500,00 na conta universitária';
        }
    }
}

// let cc = new ContaCorrente(10, 1234, 8748.80, "true");
let cu = new ContaUniversitaria(10, 43219, 4200, 'conta universitária');
// cu.sacar(450);
cu.depositar(520);

console.log(cu);