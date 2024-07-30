function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers in both fields.');
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('answer').value = result;
}

function refresh() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('answer').value = '';
}
