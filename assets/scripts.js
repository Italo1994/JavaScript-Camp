var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {

    if(currentNumber <= 10) {
        currentNumberWrapper.innerHTML = currentNumber;
        currentNumber++;
    }

    if(currentNumber > 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}