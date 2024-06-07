// 1. Определение текущего размера окна браузера: Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

const height = document.querySelector('.height');
const width = document.querySelector('.width');

width.textContent = innerWidth;
height.textContent = innerHeight;

window.addEventListener('resize', () => {
  width.textContent = window.innerWidth;
  height.textContent = window.innerHeight;
});

// 2. Подтверждение закрытия страницы: Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

document.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  alert('Are you sure?')
});

// 3. Управление историей переходов: Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

