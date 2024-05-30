// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const feedCat = document.querySelector('.feedback_category');
const feedInput = document.querySelector('.feedback_input');
const feedBtn = document.querySelector('.feedback_button');
const feedDel = document.querySelectorAll('.feedback_delete');
const feedView = document.querySelector('.feedback_view');

const addData = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const feedTitle = document.createElement('div');
    feedTitle.innerHTML = `
    <details>
      <summary>${localStorage.key(i)}</summary>
      <p>${localStorage.getItem(localStorage.key(i))}</p>
      <button class="feedback_delete">del</button>
    </details>
    `
    feedView.appendChild(feedTitle);
  }
}

addData();

feedBtn.addEventListener('click', () => {
  localStorage.setItem(feedCat.value, feedInput.value);
  alert('Your voice successfully saved');
  addData();
});

const removeData = () => {
  feedDel.forEach(element => {
    element.addEventListener('click', () => {
      
      localStorage.removeItem(localStorage.key(element))
    });
  });
}

removeData();