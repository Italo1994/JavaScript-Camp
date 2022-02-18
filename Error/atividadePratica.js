function verificaArray(array, num) {
    try {
        if(!array && !number) {
            throw new ReferenceError("Envie os parâmetros");
        }

        if(array.length === num) {
            return array;
        } 

        if(array.length !== num) {
            throw new RangeError("O tamanho do segundo parâmetro é inválido");
        }

        if( typeof array !== 'object' ) {
            throw new TypeError("O primeiro parâmetro(array) precisa ser do tipo Object");
        }

        if( typeof num !== 'num' ) {
            throw new TypeError("O parâmetro num precisa ser do tipo Number");
        }

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

let arr = [1, 2, 3, 4];

verificaArray(arr);