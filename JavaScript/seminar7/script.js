// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const blockEl = document.querySelector('.block');
// const itemEl = document.createElement('div');
// itemEl.setAttribute('class', 'item');
// itemEl.textContent = 'Элемент внутри';
// blockEl.appendChild(itemEl);
// itemEl.style.color = 'blue';
// itemEl.style.border = '1px solid black';
// itemEl.style.backgroundColor = '#f8f8f8';
// itemEl.style.padding = '16px';

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textEl = document.querySelector('.text');
// console.log(textEl.previousElementSibling);
// console.log(textEl.parentNode);
// console.log(textEl.parentNode.previousElementSibling);
// console.log(textEl.parentNode.parentNode);

// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// const h2 = document.querySelector('h2');
// console.log(h2.parentElement);
// console.log(h2.parentElement.parentElement);
// console.log(h2.parentElement.parentElement.parentElement);

// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const input = document.querySelector('input');
const btn = document.querySelector('.btn');
let heading = document.querySelector('h2');
btn.addEventListener('click', (event) => {
    event.preventDefault;
    if (input.value.trim() === '') {
        if (!heading) {
            heading = document.createElement('h2');
            input.parentElement.insertAdjacentElement('afterend', heading);
        }
        heading.textContent = 'вы не заполнили поле ввода';
        input.style.border = '2px solid red';
    } else {
        heading.remove();
        input.style.border = '1px solid greeen';
    }
})
