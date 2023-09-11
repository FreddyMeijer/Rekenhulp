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

    let randomNum1 = 0;
    let randomNum2 = 0;
    let selectedOperation = operationSelect.value; // Initialize selected operation

    function generateRandomNumbers() {
        randomNum1 = Math.floor(Math.random() * 13);
        randomNum2 = Math.floor(Math.random() * 13);

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
                result = "Division by zero!";
            } else {
                // Ensure number1 is greater than or equal to number2
                if (randomNum1 < randomNum2) {
                    const tempNum = randomNum1;
                    randomNum1 = randomNum2;
                    randomNum2 = tempNum;
                }

                const quotient = Math.floor(randomNum1 / randomNum2);
                const remainder = randomNum1 % randomNum2;

                result = `${quotient} rest ${remainder}`;
            }
        } else if (selectedOperation === "mix") {
            // Randomly choose multiplication or division
            const randomOperation = Math.random() < 0.5 ? "multiplication" : "division";

            if (randomOperation === "multiplication") {
                result = randomNum1 * randomNum2;
            } else {
                if (randomNum2 === 0) {
                    result = "Division by zero!";
                } else {
                    // Ensure number1 is greater than or equal to number2
                    if (randomNum1 < randomNum2) {
                        const tempNum = randomNum1;
                        randomNum1 = randomNum2;
                        randomNum2 = tempNum;
                    }

                    const quotient = Math.floor(randomNum1 / randomNum2);
                    const remainder = randomNum1 % randomNum2;

                    result = `${quotient} rest ${remainder}`;
                }
            }
        }

        number3.textContent = result;
    });

    // Update the selected operation when it changes
    operationSelect.addEventListener("change", function () {
        selectedOperation = operationSelect.value;
        
        // Set the operator symbol based on the selected operation
        if (selectedOperation === "multiplication") {
            operatorSymbol.textContent = "X";
        } else if (selectedOperation === "division") {
            operatorSymbol.textContent = ":";
        } else if (selectedOperation === "mix") {
            // Randomly choose multiplication or division
            operatorSymbol.textContent = Math.random() < 0.5 ? "X" : ":";
        }
    });

    // Generate initial random numbers
    generateRandomNumbers();
});
