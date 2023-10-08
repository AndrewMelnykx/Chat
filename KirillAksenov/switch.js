// Tasks from js.ru------------------------------------------------------------------

// Task 1
function browserCheck (browser){
    if (browser === "Edge"){
        alert( "You've got the Edge!" );
    }
    else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari"){
        alert( 'Okay we support these browsers too' )
    }
    else {
        alert( 'We hope that this page looks ok!' );
    }
}

browserCheck("Edge")
browserCheck("Chrome")
browserCheck("DuckDuckGo")

// Task 2

const number = +prompt('Введите число между 0 и 3', '');

switch (number){
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

// calc function with cases ---------------------------------------------------

function calc (operation, a, b)
{
    switch (operation){
        case "add":
        case "+":
            return a + b;

        case "substract":
        case "-":
            return a - b;

        case "multiply":
        case "*":
            return a * b;

        default:
            return "Wrong operator";
    }
}

// Add and +

console.log(calc("add",5,2));
console.log(calc("+",10,2));

// Substract and -

console.log(calc("substract",10,2));
console.log(calc("-",4,2));

// Multiply and *

console.log(calc("multiply",12,2));
console.log(calc("*",4,2));

// Error

console.log(calc("/",4,2))

