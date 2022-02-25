function somaNumeros(arr) { // soma todos os números do array através do reduce e retorna um único valor
    return arr.reduce( function(prev, current) {
        return prev + current;
    });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log( somaNumeros(arr));