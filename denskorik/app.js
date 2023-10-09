const ADD = "add";
const SUBTRACT = "subtract";
const MULTI = "multi";
const DIVIDE = "divide";
const FAULT = "enter valid value";

function calc(operation, firstNum, secondNum) {
  if (typeof firstNum !== "number" || typeof secondNum !== "number") {
    return FAULT;
  } else {
    switch (operation) {
      case ADD:
        return firstNum + secondNum;

      case MULTI:
        return firstNum * secondNum;

      case SUBTRACT:
        return firstNum - secondNum;

      case DIVIDE:
        if (secondNum === 0) {
          return FAULT;
        }
        return firstNum / secondNum;

      default:
        return FAULT;
    }
  }
}

console.log(calc(ADD, 1, 2));
console.log(calc(MULTI, 1, 2));
console.log(calc(SUBTRACT, 3, 2));
console.log(calc(DIVIDE, 25, 5));
