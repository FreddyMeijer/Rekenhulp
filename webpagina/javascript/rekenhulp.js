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

    let randomNum1 = 0;
    let randomNum2 = 0;

    function generateRandomNumbers() {
        randomNum1 = Math.floor(Math.random() * 13);
        randomNum2 = Math.floor(Math.random() * 13);

        number1.textContent = randomNum1;
        number2.textContent = randomNum2;
        number3.textContent = ""; // Clear square 3 when generating new numbers
    }

    generateButton.addEventListener("click", generateRandomNumbers);

    showAnswerButton.addEventListener("click", function () {
        const selectedOperation = operationSelect.value;
        let result = 0;

        if (selectedOperation === "multiplication") {
            result = randomNum1 * randomNum2;
        } else if (selectedOperation === "division") {
            if (randomNum2 === 0) {
                result = "0";
            } else if (randomNum1 < randomNum2) {
                result = `0 rest ${randomNum1}`;
            } else {
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
                    result = "0";
                } else if (randomNum1 < randomNum2) {
                    result = `0 rest ${randomNum1}`;
                } else {
                    const quotient = Math.floor(randomNum1 / randomNum2);
                    const remainder = randomNum1 % randomNum2;

                    result = `${quotient} rest ${remainder}`;
                }
            }
        }

        number3.textContent = result;
    });

    // Generate initial random numbers
    generateRandomNumbers();
});
