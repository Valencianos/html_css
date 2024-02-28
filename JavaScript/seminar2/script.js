// Задание 1: 
// 1. Создать две переменные и спросить у пользователя значения для данных 
// переменных. Одна переменная будет хранить имя пользователя, другая его возраст.
// 2. Вывести на экран текст: 
// “Добро пожаловать, `имя`. Ваше количество оборотов вокруг солнца - `возраст`.”

// const userName = prompt("Enter your name: ");
// const age = +prompt("Enter your age: ", 18);
// console.log(`Добро пожаловать, ${userName}. Ваше количество оборотов вокруг солнца - ${age}.`);

// Задание 5: 
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный 
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.

// const num = Number(prompt("Enter your number: "));
// if (num > 5) {
//     console.log('Number is more than 5');
// } else if (num < 5) {
//     console.log('Number is less than 5');
// } else {
//     console.log('Number is equal 5');
// }

// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и 
// выведите соответствующее сообщение.

// const test1 = Number(prompt("Enter first number: "));
// const test2 = Number(prompt("Enter second number: "));
// console.log(test1 === test2 ? 'Values are equal' : 'Values are not equal');

// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух
// чисел минимальное и вывести в консоль строку “Минимальное число `число`”.

// const num1 = Number(prompt("Enter first number: "));
// const num2 = Number(prompt("Enter second number: "));
// if (num1 > num2) {
//     console.log(`Minimal number is ${num2}`);
// } else if (num1 < num2) {
//     console.log(`Minimal number is ${num1}`);
// } else {
//     console.log(`Minimal number is ${num2}`);
// }

// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15.
// Если пользователь ввел значение, о котором его попросили, необходимо вывести 
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”

// const num = Number(prompt("Enter your number (more than 0 and less than 15): "));
// if (Number.isNaN(num)) {
//     console.log(`${num} - не число`);
// } else if (num <= 0 || num >= 15) {
//     console.log(`А вы, я смотрю, хулиганите! ${num} - неверное значение.`);
// } else {
//     console.log(`Спасибо за число ${num}.`);
// }
