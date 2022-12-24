let clear = document.getElementById("clr");

const numberElements = document.querySelectorAll(".number");
const operatorElements = document.querySelectorAll(".operation");
const equalButton = document.getElementById("ans");
const eraseElement = document.getElementById("btn");
const inoutElement = document.getElementById("input");
const clearElement = document.getElementById("clr");

let operator = "";

numberElements.forEach((button) =>
  button.addEventListener("click", () => {
    appendToInput(button.innerHTML);
  })
);

operatorElements.forEach((button) =>
  button.addEventListener("click", () => {
    appendToInput(button.innerHTML);
  })
);

equalButton.addEventListener("click", () => {
  calculate();
});

eraseElement.addEventListener("click", () => {
  erase_screen();
});

clearElement.addEventListener("click", () => {
  inoutElement.value = "";
});

const appendToInput = (text) => {
  if (inoutElement.value.length < 11) {
    inoutElement.value += text;
  } else {
    alert("Limit Exceeded");
  }
};

const calculate = () => {
  if (inoutElement.value == "") {
    alert("Enter Something");
  } else {
    var res = inoutElement.value;
    inoutElement.value = eval(res);
  }
};

const erase_screen = () => {
  inoutElement.value = inoutElement.value.slice(
    0,
    inoutElement.value.length - 1
  );
};
