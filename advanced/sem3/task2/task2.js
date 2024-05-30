// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage, а затем загружать или удалять сохраненные данные. Разработка Интерфейса:
// Создать HTML-страницу с:
// ● Одним текстовым полем для ввода данных пользователем.
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// ● Местом для отображения сохраненного текста.
// Программирование Логики на JavaScript:
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее 
// сообщение отображается на странице.

const input = document.querySelector('.input');
const btnSave = document.querySelector('.btn_save');
const btnLoad = document.querySelector('.btn_load');
const btnClear = document.querySelector('.btn_clear');
const feedback = document.querySelector('.feedback');

console.log(input);

btnSave.addEventListener('click', () => {
  localStorage.setItem('news', input.value);
  alert('Entry successfully saved')
})

btnLoad.addEventListener('click', () => {
  const text = localStorage.getItem('news');
  feedback.textContent = text ? text : 'nothing to display';
})

btnClear.addEventListener('click', () => {
  localStorage.clear();
})