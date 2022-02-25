const lista = [
    {
        nome: 'Picanha',
        preco: 120.50
    },
    {
        nome: 'Maminha',
        preco: 100.50
    },
    {
        nome: 'Cupim',
        preco: 150.80
    },
    {
        nome: 'Picanha Ouro',
        preco: 240.40
    }
];

function calculaSaldo(arr, saldo) {
    return arr.reduce( function(prev, current) {
        return prev - current;
    }, saldo);
}

function calculaSaldoComObjeto(saldo, lista) {
    return lista.reduce( function(prev, current) {
        return prev - current.preco;
    }, saldo)
}

const arr = [100, 200, 300, 400];
const saldoDisponivel = 9000;

console.log('Saldo Final: R$ ' + calculaSaldo(arr, saldoDisponivel));
const total =  calculaSaldoComObjeto(saldoDisponivel, lista);
console.log('Saldo após a lista de compras: R$ ' + total.toFixed(2));