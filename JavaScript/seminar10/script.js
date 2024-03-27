// Поиск в интернете (бесплатные api примеры). Найти любые данные, на произвольную тему. Установить расширение в браузер “JSON viewer”. Пример найденного json объекта. Создать файл data.js. Создать переменную dataInfo. Добавить несколько данных в dataInfo

// Создать файл index.html. Подключить data.js. Добавить блок <div class="content"></div>. Создать переменную data и добавить в нее JSON parse данные из файла data.js. Вывести в консоль объект data
const newData = JSON.parse(dataInfo);

// С помощью foreach обойти массив data. Создать все необходимые заголовки, параграфы изображения (из данных json). Добавить все содержимое в блок контент. Добавить стили при необходимости
const content = document.querySelector('.content');
newData.forEach(element => {
  content.insertAdjacentHTML('beforeend', `
  <div class="wrapper">
    <h2>${element.name}</h2>
    <h3>${element.username}</h3>
    <p>${element.email}</p>
    <p>${element.address.city}</p>
    <a href="tel:+${element.phone}">${element.phone}</a>
  </div>
  `)
});

