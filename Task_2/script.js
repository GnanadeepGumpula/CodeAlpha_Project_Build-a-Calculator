const display = document.querySelector('.display');
const keys = document.querySelectorAll('.keys button');

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const isNumber = /[0-9]/.test(key);
    const isOperator = /[\+\-\*\/]/.test(key);

    if (isNumber) {
        handleInput(key);
    } else if (isOperator) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleEquals();
    } else if (key === 'Escape'|| key === 'Delete' || key === 'Backspace') {
        handleClear();
    }
});

// Handle button clicks
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.textContent;
        handleInput(value);
    });
});

function handleInput(value) {
    if (value === 'C') {
        handleClear();
    } else if (value === '=') {
        handleEquals();
    } else {
        if (display.textContent === '0') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }
}

function handleClear() {
    display.textContent = '0';
}

function handleEquals() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}