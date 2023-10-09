// день 5. Переменные и типы данных

let userName = 'Ismail';
let userAge = '30';
let userHeight
console.log(userHeight);
userHeight = '68';
console.log(userHeight);
console.log(1 + 1);
let age = 0;
console.log(age);

const a = 6;
const b = 7;
console.log ( a + b);


// день 6. Преобразование типов и базовые операторы

console.log(30 + '1');

let counter = 10;
counter --;
console.log(counter);
counter ++
console.log(counter);

console.log(10 % 3);

const a = 3;
const b = '2a';
console.log(a + b);
console.log(Number(a) + Number(b));

const c = 5;
const d = 6;
console.log(c * d);
console.log(c ** d);

// день 9. Операторы сравнения

console.log(12 > 10);
console.log(5 == 6);
console.log(36 != 5);

console.log('Карты' > 'Карпы');
console.log('Л' > 'А');
console.log('Правдивый' < 'Правда'); 

console.log('7' > 1);
console.log('02' == 2);
console.log(1 == true);

console.log(null === undefined);
console.log(null == undefined);

console.log(null >= 0);

// День 10. Ветвление и логические операторы

// ветвление //

let compName = prompt( 'Какое "официальное" название JavaScript?', '' );
if (compName == 'ECMAScript') {
   console.log ( 'Верное' );
}  else {
   console.log( 'Не знаете? "ECMAScript!"' );
}

let value = 'Какое "официальное" название JavaScript?' ? 'ECMAScript' : 'Не знаете? "ECMAScript!"';

let number  = prompt('Введите число', 0);
if (value > 0) {
   console.log(1);
}  else if (value < 0) {
   console.log(-1);
}  else if (value == 0) {
   console.log(0);
}
   

let result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';


// логические операторы //

console.log( true || false);
console.log( null || 1 || false);
console.log( 1 && 2 && null);
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));

let login = promt('Кто там?', '');

if (login == 'Админ') {

   let pass = prompt('Пароль?', '');

   if (pass == 'Я главный') {
   alert( 'Здравствуйте!' );
   } else if(pass == '' || pass == null) {
   alert( 'Отменено' ) 
   } else {
   alert( 'Неверный пароль' );
   }

} else if (login === '' || login === null) {
   alert( 'Отменено' );
} else {
   alert ( "Я вас не знаю" );
}


// еще пример

let hour = 12;
let minute  = 25;

if (hour == 12 && minute == 25) {
   console.log( 'Время 12:30' );
}

// День 11. Функции

// задание №1 //

function checkAge(age) {
   if (age < 18)   {
   console.log('you are not allowed')
   } else if (age >= 18) {
   console.log('you are welcome!')
   }
}

checkAge (18);
checkAge (23);
checkAge (10);

// задание №2 //
function calc(operation, a, b) {
   if (operation === 'add') {
      return a + b;
   } else if (operation === 'multi') {
      return a * b;
   } else if (operation === 'subtract') {
      return a - b;
   }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));


// День 12. Switch

function calc(operation, a, b) {
   switch (operation) {
      case 'add': 
      return a + b;
      break;
      case 'multi':
      return a * b;
      break;
      case 'subtract':
      return a - b;
      break;

}
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));

// День 14. Циклы

// День 15. Циклы

let i = 1;
while (i < 20) {
   console.log(i)
   i = i + 1;
}

let k = 1;
do {
   console.log(k);
   k = k + 1;
} while (k < 20);

for (let j = 1; j < 20; j = j + 1) {
   console.log(j);
}

while (true) {
   console.log('begin');
   *break;*
   console.log('not end');
}
console.log('end');

for (let l = 0; l < 10; l = l + 1) {
   *if (l % 2 == 0) continue;*
   console.log(l);
}
