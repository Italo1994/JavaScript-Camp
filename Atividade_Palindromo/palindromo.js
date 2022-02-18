// solução 1
function verificarPalindromo(string) {
    if(!string) {
        return "string inexistente";
    }

    return string.split("").reverse().join("") === string;
}

let myString = "ama";
console.log(verificarPalindromo(myString));

// solução 2
function verificarPalindromo2(string) {
    if(!string) {
        return "string inexistente";
    }

    for(let i = 0; i < string.length/2; i++) {
        if(string[i] !== string[string.length-1-i]) {
            return "não é palindromo";
        } else {
            return "é palindromo";
        }
    }
}

console.log(verificarPalindromo2(myString));