// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.
// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.
// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.
// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".
// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.
// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.


const initialJSON = '[{"id":1,"title":"Аква Гимнастика","time":"13:00","part":0,"partMax":10},{"id":2,"title":"Здоровая спина","time":"14:00","part":12,"partMax":12},{"id":3,"title":"Пресс","time":"15:00","part":7,"partMax":12},{"id":4,"title":"Футбол","time":"16:00","part":12,"partMax":16},{"id":5,"title":"Настольный теннис","time":"17:00","part":0,"partMax":4},{"id":6,"title":"Бассейн","time":"18:00","part":0,"partMax":20}]';

const dataFromStorage = JSON.parse(initialJSON);
const schedule = document.querySelector('.schedule');
const title = document.querySelectorAll('.title');
const time = document.querySelectorAll('.time');
const part = document.querySelectorAll('.participants');
const partMax = document.querySelectorAll('.participants-max');
const join = document.querySelectorAll('.join');
const quit = document.querySelectorAll('.quit');

const renderProducts = (params) => {
  return params.map(element => `
    <div class="item">
      <h2 class="title">${element.title}</h2>
      <p class="time">${element.time}</p>
      <p><span class="participants">${element.part}</span> / <span class="participants-max">${element.partMax}</span></p>
      <button class="join">Записаться</button>
      <button class="quit hidden">Отменить запись</button>
    </div>
    `
  ).join('');
}

const productCode = renderProducts(dataFromStorage);
schedule.innerHTML = productCode;

schedule.addEventListener('click', (e) => {
  if (e.target.classList.contains('join')) {
    const closeDiv = e.target.closest('div');

    if (closeDiv.querySelector('.participants').textContent < closeDiv.querySelector('.participants-max').textContent) {
      closeDiv.querySelector('.participants').textContent++;
      closeDiv.querySelector('.join').setAttribute('disabled', true);
      closeDiv.querySelector('.quit').classList.remove('hidden');
    } else {
      closeDiv.querySelector('.join').setAttribute('disabled', false);
    }

  } else if (e.target.classList.contains('quit')) {
    const closeDiv = e.target.closest('div');
    closeDiv.querySelector('.participants').textContent--;
    closeDiv.querySelector('.quit').classList.add('hidden');
    closeDiv.querySelector('.join').setAttribute('disabled', false);
  }
});

