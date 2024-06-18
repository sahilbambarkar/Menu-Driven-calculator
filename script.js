// Interest Calculator JavaScript
document.getElementById('operation').addEventListener('change', function () {
    const compoundGroup = document.getElementById('compound-group');
    if (this.value === 'compound') {
        compoundGroup.style.display = 'block';
    } else {
        compoundGroup.style.display = 'none';
    }
});

document.getElementById('calculate-button').addEventListener('click', function () {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const operation = document.getElementById('operation').value;
    let result = '';

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        result = 'Please enter valid numbers for principal, rate, and time.';
    } else {
        switch (operation) {
            case 'simple':
                const simpleInterest = (principal * rate * time) / 100;
                result = `Simple Interest: ${simpleInterest}`;
                break;
            case 'compound':
                const compounded = parseInt(document.getElementById('compounded').value);
                if (isNaN(compounded)) {
                    result = 'Please enter a valid number for times interest is compounded per year.';
                } else {
                    const compoundInterest = principal * (Math.pow((1 + rate / 100), (time * compounded))) - principal;
                    result = `Compound Interest: ${compoundInterest}`;
                }
                break;
            default:
                result = 'Invalid operation selected.';
        }
    }

    document.getElementById('result').innerText = result;
});

// Number Operations JavaScript
document.getElementById('number-button').addEventListener('click', function () {
    const number = parseInt(document.getElementById('number').value);
    const operation = document.getElementById('number-operation').value;
    let result = '';

    if (isNaN(number)) {
        result = 'Please enter a valid number.';
    } else {
        switch (operation) {
            case 'oddEven':
                result = (number % 2 === 0) ? `${number} is even` : `${number} is odd`;
                break;
            case 'factorial':
                let factorial = 1;
                for (let i = 1; i <= number; ++i) {
                    factorial *= i;
                }
                result = `Factorial of ${number} = ${factorial}`;
                break;
            case 'fibonacci':
                let fib = [0, 1];
                for (let i = 2; i <= number; i++) {
                    fib[i] = fib[i - 1] + fib[i - 2];
                }
                result = `Fibonacci Series till ${number} terms: ${fib.slice(0, number).join(', ')}`;
                break;
            case 'prime':
                let isPrime = number > 1;
                for (let i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                result = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
                break;
            default:
                result = 'Invalid operation selected.';
        }
    }

    document.getElementById('number-result').innerText = result;
});
