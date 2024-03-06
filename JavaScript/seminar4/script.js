// Задание 1: 
// 1. Создайте массив с элементами 1, 2, 3. 
// Выведите на экран каждый из этих элементов.

// let array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 2. Создайте массив с произвольными элементами. 
// Выведите на экран количество элементов в этом массиве.

// let array2 = [2, 5, "gift", true, -6, "bracelet"];
// console.log(`Длина массива ${array2.length} элементов`);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// let array3 = ['a', 'b', 'c'];
// array3[0] = 1;
// array3[1] = 2;
// array3[2] = 3;
// console.log(array3 );

// Задание 2:
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

// let array = [1, 2, 3]
// array[0]++;
// array[1]++;
// array[2]++;
// console.log(array);

// 2. Узнайте длину следующего массива и объясните почему такое значение:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// let array2 = [1, 2, 3];
// array2.push(4, 5);
// console.log(array2);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

// let array3 = [];
// function rand() {
//     return Math.floor(Math.random() * 100);
// }
// let i = 0;
// while (i < 5) {
//     array3.push(rand());
//     i++
// }
// console.log(array3);
// array3.pop();
// array3.pop();
// console.log(array3.length);

// Задание 3:
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i < 33; i++) {
//     console.log(i);
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 
// до 100 включительно.

// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);;
//     }
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i >= 0; i--) {
//     console.log(i)
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

// let num = 5;
// let count = 0;
// for (let i = num; i < 1000; i *= 3) {
//     count++
// }
// console.log(count);

// Задание 4:
// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let array = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3 && array[i] < 10) {
//         console.log(array[i]);
//     }
// }

// 2. Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i < 101; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

// let array2 = [2, 5, 9, 3, 1, 4];
// let result = 0;
// array2.forEach(element => {
//     result += element
// });
// console.log(result);

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let string = "-";
// for (let i = 1; i < 10; i++) {
//     string += i + "-";
// }
// console.log(string);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в 
// консоль до тех пор, пока не встретится элемент со значением 0. После этого 
// цикл должен завершить свою работу.

// let array3 = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < array3.length; i++) {
//     if (array3[i] === 0) {
//         break
//     }
//     console.log(array3[i]);
// }

// Задание 5:
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);
// arr.forEach(element => {
//     if (element % 2 === 0 && element % 3 === 0) {
//         console.log(element);
//     }
// });

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество 
// цифр 3 в этом массиве.

// let array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// array.forEach(element => {
//     if (element === 3) {
//         count += 1;
//     }
// })
// console.log(count);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// let array2 = [1, 2, 3, 4, 5];
// array2.splice(1, 2);
// console.log(array2);