let displayValue = "";
var display = document.querySelector("#display");


function addToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}

function addOperation(operation) {
    displayValue += operation;
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    display.value = "";
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        display.value = result;
        displayValue = "";
    } catch (error) {
        display.value = "Error";
    }
}
