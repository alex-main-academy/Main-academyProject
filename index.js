// Создайте страницу, которая спрашивает имя у пользователя и выводит его

let userName = prompt('What is your name?');
alert('User Name: ' + userName);

// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(a + b);

let firstNum = prompt('first number? ', 1);
let secondNum = prompt('second number?', 2);

alert(Number(firstNum) + Number(secondNum));

let firstNum = prompt('first number? ', 1);
let secondNum = prompt('second number?', 2);

alert(Number(firstNum) + Number(secondNum));

let firstNum = prompt('first number? ', 1);
let secondNum = prompt('second number?', 2);

alert(Number(firstNum) + Number(secondNum));
