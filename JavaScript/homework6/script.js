"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const linkEl = document.getElementById('super_link');
console.log(linkEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardEl = document.querySelectorAll('.card-link');
cardEl.forEach(element => {
    element.textContent = 'ссылка'
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const bodyEl = document.querySelector('.card-body');
const clEl = bodyEl.querySelectorAll('.card-link');
console.log(clEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const numEl = document.querySelector('[data-number="50"]');
console.log(numEl);

// 5. Выведите содержимое тега title в консоль.

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const titleEl = document.querySelector('.card-title');
console.log(titleEl.parentElement);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const newParEl = document.createElement('p');
newParEl.textContent = 'Привет';
const cardElement = document.querySelector('.card');
cardElement.prepend(newParEl);

// 8. Удалите тег h6 на странице.

const h6El = document.querySelector('h6');
h6El.remove();