let operator = '';
let previousValue = '';
let currentValue = '';

// store all components
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let decimal = document.querySelector('.decimal');

// number function
numbers.forEach((number) => number.addEventListener('click', function (e) {
  handleNum(e.target.textContent);
  currentScreen.textContent = currentValue;
}));

function handleNum(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
};

// operator
operators.forEach((op) => op.addEventListener('click', function(e) {
  handleOp(e.target.textContent);
  previousScreen.textContent = previousValue + ' ' + operator;
  currentScreen.textContent = currentValue;
}));

function handleOp(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

// clear button
clear.addEventListener('click', function () {
  previousValue = '';
  currentValue = '';
  operator = '';
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

// equals button
equal.addEventListener('click', function () {
      if (currentValue != '' && previousValue != '') {
      calculate();

    // display number
    previousScreen.textContent = '';
      if (previousValue.length < 5) {
      currentScreen.textContent = previousValue;
    } else {
      currentScreen.textContent = previousValue.slice(0, 5) + "...";
    }
  }
});

// calculation function
function calculate () {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else if (operator === "÷") {
    previousValue /= currentValue;
  }

  previousValue = roundNum(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();

};

function roundNum (num) {
  return Math.round(num * 1000) / 1000;
};

// decimal button
decimal.addEventListener('click', function () {
  addDecimal();
});

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += '.';
  }
};