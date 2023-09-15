document.addEventListener("DOMContentLoaded", function () {
    const square1 = document.getElementById("square1");
    const square2 = document.getElementById("square2");
    const square3 = document.getElementById("square3");
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const number3 = document.getElementById("number3");
    const generateButton = document.getElementById("generateButton");
    const showAnswerButton = document.getElementById("showAnswerButton");
    const operationSelect = document.getElementById("operationSelect");
    const operatorSymbol = document.getElementById("operatorSymbol");
    const tafelsInput = document.getElementById("tafels")

    let randomNum1 = 0;
    let randomNum2 = 0;
    let selectedOperation = operationSelect.value;

    function generateRandomNumbers() {
        const maxTafels = parseInt(tafelsInput.value);
        randomNum1 = Math.floor(Math.random() * (maxTafels + 1));
        randomNum2 = Math.floor(Math.random() * (maxTafels + 1)); 

        number1.textContent = randomNum1;
        number2.textContent = randomNum2;
        number3.textContent = ""; // Clear square 3 when generating new numbers

        // Set the operator symbol based on the selected operation
        if (selectedOperation === "multiplication") {
            operatorSymbol.textContent = "X";
        } else if (selectedOperation === "division") {
            operatorSymbol.textContent = ":";
        } else if (selectedOperation === "mix") {
            // Randomly choose multiplication or division
            operatorSymbol.textContent = Math.random() < 0.5 ? "X" : ":";
        }
    }

    generateButton.addEventListener("click", generateRandomNumbers);

    showAnswerButton.addEventListener("click", function () {
        let result = 0;

        if (selectedOperation === "multiplication") {
            result = randomNum1 * randomNum2;
        } else if (selectedOperation === "division") {
            if (randomNum2 === 0) {
                result = randomNum1;
            } else {
                const quotient = Math.floor(randomNum1 / randomNum2);
                const remainder = randomNum1 % randomNum2;
                if (quotient === 0) {
                    result = "kan niet";
                } else if (remainder === 0) {
                    result = quotient;
                } else {
                    result = `${quotient} rest ${remainder}`;
                }
            }
        } else if (selectedOperation === "mix") {
            if (operatorSymbol.textContent === "X") {
                result = randomNum1 * randomNum2;
            } else {
                if (randomNum2 === 0) {
                    result = randomNum1;
                } else {
                    const quotient = Math.floor(randomNum1 / randomNum2);
                    const remainder = randomNum1 % randomNum2;
                    if (quotient === 0) {
                        result = "kan niet";
                    } else if (remainder === 0) {
                        result = quotient;
                    } else {
                        result = `${quotient} rest ${remainder}`;
                    }
                }
            }
        }

        number3.textContent = result;
    });

    // Update the selected operation when it changes
    operationSelect.addEventListener("change", function () {
        selectedOperation = operationSelect.value;

        if (selectedOperation === "multiplication") {
            operatorSymbol.textContent = "X";
        } else if (selectedOperation === "division") {
            operatorSymbol.textContent = ":";
        } else if (selectedOperation === "mix") {
            operatorSymbol.textContent = Math.random() < 0.5 ? "X" : ":";
        }
    });

    // Generate initial random numbers
    generateRandomNumbers();
});

// JavaScript code in your rekenhulp.js file
const dashboard = document.querySelector('.dashboard');
let offsetX, offsetY, isDragging = false;

dashboard.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - dashboard.getBoundingClientRect().left;
    offsetY = e.clientY - dashboard.getBoundingClientRect().top;
    dashboard.style.cursor = 'grabbing';
    dashboard.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    dashboard.style.left = `${newX}px`;
    dashboard.style.top = `${newY}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    dashboard.style.cursor = 'grab';
    dashboard.style.userSelect = 'auto';
});
