var result = document.getElementById("result");
var number = null;
var operator = null;

function handleNumberClick(e) {
  var digit = e.target.dataset.value;
  if (result.innerText === "Error") {
    result.innerText = digit;
  } else {
    result.innerText += digit;
  }
}

function handleDecimalClick() {
  if (!result.innerText.includes(".")) {
    result.innerText += ".";
  }
}

function handleOperatorClick(e) {
  var op = e.target.dataset.value;
  if (number !== null && operator !== null) {
    equals();
  } else {
    number = parseFloat(result.innerText);
  }

  operator = op;
  result.innerText = "";
}

function equals() {
  if (operator === "+") {
    result.innerText = number + parseFloat(result.innerText);
  } else if (operator === "-") {
    result.innerText = number - parseFloat(result.innerText);
  } else if (operator === "*") {
    result.innerText = number * parseFloat(result.innerText);
  } else if (operator === "/") {
    var divisor = parseFloat(result.innerText);
    if (divisor !== 0) {
      result.innerText = number / divisor;
    } else {
      result.innerText = "Error";
    }
  }

  number = parseFloat(result.innerText);
  operator = null;
}

function clear() {
  result.innerText = "";
  number = null;
  operator = null;
}

var numberButtons = document.querySelectorAll(".number");
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", handleNumberClick);
}

document
  .querySelector(".decimal")
  .addEventListener("click", handleDecimalClick);

var operatorButtons = document.querySelectorAll(".operator");
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", handleOperatorClick);
}

document.getElementById("btn-equals").addEventListener("click", equals);
document.getElementById("btn-clear").addEventListener("click", clear);
