let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    if (display.value === '0') display.value = ''; // clear initial zero
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.value = display.value.slice(0, -1); // replace last operator
    }
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
