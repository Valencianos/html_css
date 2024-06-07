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

const createCard = (data) => {
  const item = document.createElement('article');
  item.classList.add('article');
  item.innerHTML = (`
  <h2 class="title">${data.title}</h2>
  <p class="time">${data.time}</p>
  <p><span class="participants">${data.part}</span> / <span class="participants-max">${data.partMax}</span></p>
  <button class="join">Записаться</button>
  <button class="quit hidden">Отменить запись</button>
  `);
  return item;
}

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch cards')
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching exercizes: ${error}`);
    return [];
  }
};

const renderCards = async () => {
  const cards = await getData('./data.json');
  schedule.textContent = '';
  if (cards.length) {
    const itemList = cards.map((data) => {
      const itemLi = document.createElement('li');
      itemLi.classList.add('item');
      const card = createCard(data);
      itemLi.append(card);
      return itemLi;
    })
    schedule.append(...itemList);
  }
}

renderCards();

joinBtns.forEach((btn) => {
  console.log(btn);
});