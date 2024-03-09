// Задание 1:
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.

// const weekDays = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }

// console.log(weekDays[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//     name: 'Stan',
//     surname: 'Malinovskii',
//     age: 18
// }
// console.log(`${user.surname} ${user.name} ${user.age}`);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// ввести с клавиатуры.

// user.patronymic = prompt('Enter your middle name: ');

// 4. Удалите свойство surname.

// delete user.surname;

// Задание 2:
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`

// const weekName = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const weekNum = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней, 
// а значениями - их номера.

// const weekDays = {};
// for (let i = 0; i < weekName.length; i++) {
//     weekDays[weekName[i]] = weekNum[i];
// }
// console.log(weekDays);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.

// const coord = {
//     x: 1,
//     y: 2,
//     z: 3
// }

// for (const key in coord) {
//     coord[key] **= 2;
// }
// console.log(coord);

// Задание 3:
// Найдите сумму всех чисел, приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,    
//     },
// }

// let result = 0;
// for (const key in obj) {
//     for (const i in obj[key]) {
//         result += obj[key][i];
//     }
// }
// console.log(result);

// const obj = {
//     iodsuf: {
//         asd: 1,
//         zxc: {
//             khvxc: {
//                 ncxvm: 10,
//             }
//         },
//             qwd: 3,
//     },
//     gerg: {
//         joij: {
//             shdjk: 99
//         },
//         kjn: 5,
//         iyu: 6,
//     },
//     xcnkv: {
//         oirje: 7,
//         iuhdv: 8,
//         nmbb: 9,
//     },
// }

// function sumOfTree(obj) {
//     let result = 0;
//     for (const key in obj) {
//         if (!isNaN(obj[key])) {
//             result += obj[key];
//         } else {
//             result += sumOfTree(obj[key]);
//         }
//     }
//     return result;
// }
// console.log(sumOfTree(obj));

// Задание 4: 
// 1. Создайте объект riddle.

// const riddle = {};

// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).

// riddle.question = 'Два конца, два кольца, а посередине гвоздик';
// riddle.answer = 'ножницы';
// riddle.help = ['made of steel', 'very sharp'];

// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.

// riddle.askQuestion = () => {
//     const userAnswer = prompt(`${this.question}`);
//     if (userAnswer.toLowerCase === this.answer) {
//         console.log('Congratulations. You won!');
//         return;
//     }
//     console.log('You are wrong...');
//     for (let i = 0; i < this.help.length; i++) {
//         console.log(this.help[i]);
//         const userAnswer = prompt(`${riddle.question}`);
//         if (userAnswer.toLowerCase === this.answer) {
//             console.log('Congratulations. You won!');
//             return;
//         }
//         console.log('You are wrong...');
//     }
//     console.log('Unfortunately');
// }

// riddle.askQuestion();