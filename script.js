var number = null;
var operator = null;

var btn0 = document.getElementById("btn-0");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");
var btn7 = document.getElementById("btn-7");
var btn8 = document.getElementById("btn-8");
var btn9 = document.getElementById("btn-9");

var btnDecimal = document.getElementById("btn-decimal");
var btnEquals = document.getElementById("btn-equals");
var btnClear = document.getElementById("btn-clear");

var result = document.getElementById("result");

btn0.addEventListener("click", function () {
  result.innerText += "0";
});

btn1.addEventListener("click", function () {
  result.innerText += "1";
});

btn2.addEventListener("click", function () {
  result.innerText += "2";
});

btn3.addEventListener("click", function () {
  result.innerText += "3";
});

btn4.addEventListener("click", function () {
  result.innerText += "4";
});

btn5.addEventListener("click", function () {
  result.innerText += "5";
});

btn6.addEventListener("click", function () {
  result.innerText += "6";
});

btn7.addEventListener("click", function () {
  result.innerText += "7";
});

btn8.addEventListener("click", function () {
  result.innerText += "8";
});

btn9.addEventListener("click", function () {
  result.innerText += "9";
});

btnDecimal.addEventListener("click", function () {
  result.innerText += ".";
});

btnClear.addEventListener("click", function () {
  result.innerText = "";
  number = null;
  operator = null;
});
