// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const category = document.querySelector('.category');
const input = document.querySelector('.input');
const saveBtn = document.querySelector('.save_button');
const delBtn = document.querySelector('.delete_button');
const view = document.querySelector('.view');

if (localStorage.getItem('feedbacks')) {
  view.innerHTML = localStorage.getItem('feedbacks');
}

saveBtn.addEventListener('click', () => {
  const catValue = category.value;
  const inputValue = input.value;
  if (catValue !== '' && inputValue !== '') {
    const viewList = document.createElement('div');
    viewList.innerHTML = `
    <details class="details">
      <summary class="summary">${catValue}</summary>
      <p>${inputValue}</p>
      <button class="delete_button">del</button>
    </details>
    `;
    view.append(viewList);

    category.value = '';
    input.value = '';

    localStorage.setItem(catValue, inputValue);
  }
  alert('Your voice successfully saved');
});

view.addEventListener('click', e => {
  if (e.target.classList.contains('delete_button')) {
    const delItem = e.target.closest('.details');
    delItem.parentNode.removeChild(delItem);

    localStorage.setItem('feedbacks', view.innerHTML);
  }
})

