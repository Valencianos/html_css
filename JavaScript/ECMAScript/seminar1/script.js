// которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.mergeArrays([1, 2, 3], [4, 5, 6]);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergeArrays = (arr1, arr2) => {
  return [...array1, ...array2];
}

// array2.forEach(element => {
//   array1.push(element);
// });
// console.log(array1);

// ​​принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения ​​removeDuplicates(1, 2, 3, 2, 4, 1, 5); Ожидаемый результат: [1, 2, 3, 4, 5]

// ​​function removeDuplicates(...args) {
//   args.filter((value, index) => args.indexOf());
// };
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Напишите функцию getEvenNumbers, которая принимает массив 
// чисел в качестве аргумента и возвращает новый массив, 
// содержащий только четные числа.

function getEvenNumbers(...args) {
  const result = [];
  args.forEach((element) => {
    if (element % 2 === 0) {
      result.push(element);
    }
  })
  return result;
}

// 2. Задача: Напишите функцию calculateAverage, которая принимает 
// массив чисел в качестве аргумента и возвращает среднее значение 
// этих чисел.

function calculateAverage(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
}

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

function capitalizeFirstLetter(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Напишите функцию createCalculator, которая принимает начальное 
// значение и возвращает объект с двумя методами: add и subtract. 
// Метод add должен увеличивать значение на переданное число, а 
// метод subtract должен уменьшать значение на переданное число. 
// Значение должно быть доступно только через методы объекта, а не 
// напрямую.

function createCalculator(value) {
  let temp = value;
  return {
    add: (num) => temp += num,
    subtract: (num) => temp -= num,
    getNumber: () => temp
  }
}

// Напишите функцию createGreeting, которая принимает имя 
// пользователя и возвращает функцию, которая будет выводить 
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

