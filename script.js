let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function calculate() {
  try {
    const result = eval(currentInput.replace(/x/g, "*").replace(/÷/g, "/"));
    document.getElementById("output").value = result;
  } catch (error) {
    document.getElementById("output").value = "Error";
  }
}

function updateDisplay() {
  document.getElementById("output").value = currentInput;
}

