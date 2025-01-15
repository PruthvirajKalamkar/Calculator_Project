// script.js
let display = document.getElementById("display");
let currentValue = "0";

function appendNumber(number) {
  if (currentValue === "0") {
    currentValue = number.toString();
  } else {
    currentValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = currentValue[currentValue.length - 1];
  if (!["+", "-", "*", "/", "%"].includes(lastChar)) {
    currentValue += operator;
  }
  updateDisplay();
}

function appendDecimal() {
  const lastNumber = currentValue.split(/[\+\-\*\/%]/).pop();
  if (!lastNumber.includes(".")) {
    currentValue += ".";
  }
  updateDisplay();
}

function clearDisplay() {
  currentValue = "0";
  updateDisplay();
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1) || "0";
  updateDisplay();
}

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
  } catch (error) {
    currentValue = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentValue;
}

