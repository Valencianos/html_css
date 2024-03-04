// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

function greeting(firstName, lastName, age) {
    return `Привет, ${firstName} ${lastName}. Вы уже большой, вам ${age}.`;
}
console.log(greeting('Stan', 'Malinovskii', 21));

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

function square(num) {
    return num ** 2;
}
console.log(square(4));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

function compare(num) {
    if (num > 0) {
        return '+++';
    } else if (num === 0) {
        return null;
    } else {
        return '---';
    }
}
console.log(compare(6));

// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.

function sumOfThree(num1, num2, num3) {
    return console.log(num1 + num2 + num3);
}

// 2. Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.

const rand1 = Math.floor(Math.random() * 100);
const rand2 = Math.floor(Math.random() * 100);
const rand3 = Math.floor(Math.random() * 100);
sumOfThree(rand1, rand2, rand3);

// Задание 3: 
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 

function squareRoot(num) {
    return Math.sqrt(num);
}
console.log(squareRoot(3) + squareRoot(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.

function minOfTwo(num1, num2) {
    return num1 > num2 ? num2 : num1;
}
console.log(minOfTwo(7, 12));

// Задание 4:
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getDayOfWeek(num) {
    switch (num) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        case 7:
            return 'Воскресенье';
        default:
            return 'Некорректное значение';
    }
}
console.log(getDayOfWeek(4));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".

function getGreeting(name) {
    let curTime = new Date().getHours();
    if (curTime >= 0 && curTime < 6) {
        return `Доброй ночи, ${name}`;
    } else if (curTime >= 6 && curTime < 12) {
        return `Доброе утро, ${name}`;
    } else if (curTime >= 12 && curTime < 18) {
        return `Добрый день, ${name}`;
    } else {
        return `Добрый вечер, ${name}`;
    }
}
console.log(getGreeting('Stan'));