// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const form = document.querySelector('.form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!input.checked) {
        const elem = document.createElement('p');
        elem.textContent = 'Необходимо согласиться с условиями';
        form.appendChild(elem);
    }
})