function calc(operation, a, b)
{
    switch (operation){
        case 'add':
            return a+b;
            break;
        case 'multi':
            return a*b;
        case 'subtract':
            return a%b;
            break;
        default:
            alert('Нет такой операции');
    }
    console.log(result);
}

console.log(calc('add', 1, 2 ));
