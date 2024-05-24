// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol. 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги. 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных). 3. Создать объект книги, добавить метаданные и вывести их на консоль.

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
  if (book[metadataType]) {
    book[metadataType].push(data);
  } else {
    book[metadataType] = [data];
  }
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
  return book[metadataType];
}

// Создание объекта книги и добавление метаданных
const book = {
  title: "1984",
  author: "George Orwell"
};

const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

addMetadata(book, reviewSymbol, 'Nice book about dystopia!');
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, 'dystopia');

// Вывод метаданных для книги
// console.log(getMetadata(book, reviewSymbol));
// console.log(getMetadata(book, ratingSymbol));
// console.log(getMetadata(book, tagsSymbol));


// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки. 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator. 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку. 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
]

books[Symbol.iterator] = function() {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to ? {done: false, value: books[this.current++]} : {done: true};
    }
  }
}

// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними. Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль

const divEls = document.querySelectorAll('div');
const divElsArray = Array.from(divEls);
const result = divElsArray.filter(element => element.hasAttribute('data-active'));
// result.forEach(element => {
//   console.log(element);
// });

// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 1. Map будет использоваться для хранения соответствия между уроком и преподавателем. 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

let lessons = new Map();
lessons.set('Maths', 'Smirnov');
lessons.set('History', 'Ivanova');

const studentLessons = new Set().add('Maths').add('History');

const students = new Map();
students.set('Ivan', studentLessons)
console.log(`Maths teacher: ${lessons.get('Maths')}`);
console.log(`Ivan lessons: ${[...students.get('Ivan')]}`);

