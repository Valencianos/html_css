// Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия. 
// Модальное окно должно плавно появляться и исчезать при открытии и закрытии.

const open = document.querySelector('.open');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

open.addEventListener('click', () => {
    modal.classList.add('active');
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
});