let currentInput = "";
let previousInput = "";
let operator = null;

function appendNumber(number) {
  if (number === "." && currentInput.includes(".")) return; // Prevent multiple decimals
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === "") return; // No operator without a number
  if (previousInput !== "") {
    calculateResult(); // Automatically calculate if there's already an operation
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  if (operator === null || currentInput === "") return; // No calculation if incomplete
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput || "0";
}