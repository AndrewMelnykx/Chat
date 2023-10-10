function checkAge(age) {
    if (age < 18) {
      console.log("ou are not allowed");
    } else {
      console.log("you are welcome!");
    }
  }
  checkAge(7);
  checkAge(52);
  checkAge(18);
  //
  function calc(operation, a, b) {
    if (operation == "add") {
      return a + b;
    } else if (operation == "multi") {
      return a * b;
    } else if (operation == "subtract") {
      return a - b;
    }
  }
  console.log(calc("add", 1, 2));
  console.log(calc("multi", 1, 2));
  console.log(calc("subtract", 3, 2));

  ///////////////
  function calc(operation, a, b) {
    switch (operation) {
      case "add":
        return a + b;
      case "multi":
        return a * b;
      case "subtract":
        return a - b;
    }
  }
  console.log(calc("add", 1, 2));
  console.log(calc("multi", 1, 2));
  console.log(calc("subtract", 3, 2));
  