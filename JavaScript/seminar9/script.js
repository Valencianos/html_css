// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const formEl = document.querySelector('.form');
// const inputEl = document.querySelector('.input');
// const btnEl = document.querySelector('.btn');
// let flag = false;
// btnEl.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (!e.target.checked && !flag) {
//     const errorEl = document.createElement('p');
//     errorEl.textContent = 'Необходимо согласиться с условиями';
//     btnEl.insertAdjacentElement('afterend', errorEl);
//     flag = true;
//   } else if (!e.target.checked) {
//     formEl.submit();
//   }
// })

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const tea = document.querySelector('#tea');
// const coffee = document.querySelector('#coffee');
// const btnRadio = document.querySelector('.button__radio');
// const p = document.querySelector('p');

// btnRadio.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (tea.checked) {
//     p.textContent = 'Чай закончился';
//   } else if (coffee.checked) {
//     p.textContent = 'кофе закончился';
//   } else {
//     p.textContent = 'Выбери что-нибудь';
//   }
// })

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const formPw = document.querySelector('.form__pw');
// const inputPw = document.querySelector('#input__pw');
// const btnPw = document.querySelector('.btn__pw');
// const pPw = document.querySelector('p');

// btnPw.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (inputPw.value.toLowerCase() === 'password') {
//     inputPw.style.border = '2px solid green';
//     pPw.textContent = 'correct';
//   } else {
//     inputPw.style.border = '2px solid red';
//     inputPw.value = '';
//     inputPw.placeholder = 'password incorrect';
//   }
// })

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const title = document.querySelector('h1');
const text = document.querySelector('input');

text.addEventListener('input', () => {
  title.textContent = text.value;
})