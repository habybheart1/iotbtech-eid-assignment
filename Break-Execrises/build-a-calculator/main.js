const displayDigit = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        displayDigit.value += value;
    });
});
function clearDisplay() {
    displayDigit.value = '';
}
function backspace() {
    displayDigit.value = displayDigit.value.slice(0, -1);
}
// function calculate() {
//     try{
//         if (displayDigit.value.includes('÷')) {
//             displayDigit.value = displayDigit.value.replace('÷', '/');
//         }
//         if (displayDigit.value.includes('×')) {
//             displayDigit.value = displayDigit.value.replace('×', '*');
//         }
//         const result = eval(displayDigit.value);
//         displayDigit.value = result;
//     }
//     catch (error) {
//         displayDigit.value = 'Error';
//     }
// }

function calculate() {
    try {
        let expression = displayDigit.value;

        // Replace calculator symbols
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/×/g, '*');

        // Replace power operator
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/%/g, '/100');

        const result = eval(expression);
        displayDigit.value = result;
    }
    catch (error) {
        displayDigit.value = 'Error';
    }
}
function factorial(value) {
    const n = parseInt(value);
    if (isNaN(n) || n < 0) {
        return "Error";
    }

    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateSqrt(num) {
    const number = parseFloat(num);

    if (isNaN(number) || number < 0) {
        return "Error";
    }

    return Math.sqrt(number);
}
