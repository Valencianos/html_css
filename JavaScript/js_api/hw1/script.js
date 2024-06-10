// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.
// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

const schedule = document.querySelector('.schedule');
const title = document.querySelector('.title');
const time = document.querySelector('.time');
const part = document.querySelector('.participants');
const partMax = document.querySelector('.participants-max');
const joinBtns = document.querySelectorAll('.join');
const quitBtns = document.querySelectorAll('.quit');

const initialJSON = '[{"id":1,"title":"Аква Гимнастика","time":"13:00","part":0,"partMax":10},{"id":2,"title":"Здоровая спина","time":"14:00","part":0,"partMax":12},{"id":3,"title":"Пресс","time":"15:00","part":0,"partMax":12},{"id":4,"title":"Футбол","time":"16:00","part":0,"partMax":16},{"id":5,"title":"Настольный теннис","time":"17:00","part":0,"partMax":4},{"id":6,"title":"Бассейн","time":"18:00","part":0,"partMax":20}]';
const subjects ='subjects';

if (localStorage.length < 1) {
  localStorage.setItem(subjects, initialJSON);
}

const data = JSON.parse(localStorage.getItem(subjects));

const createCard = (data) => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.insertAdjacentHTML = ('beforeend', `
  <h2 class="title">${data.title}</h2>
  <p class="time">${data.time}</p>
  <p><span class="participants">${data.part}</span> / <span class="participants-max">${data.partMax}</span></p>
  <button class="join">Записаться</button>
  <button class="quit hidden">Отменить запись</button>
  `);
}

const massiveHTML = data.map(el => createCard(el));
schedule.append(...massiveHTML);

