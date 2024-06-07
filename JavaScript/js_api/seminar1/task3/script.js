// Необходимо создать страницу со списком статей. Каждая статья состоит из id, заголовка и текста статьи. id берем из unix timestamp. Необходимо подготовить список статей в JSON-формате, которые будут выводиться на страницу при первом ее открытии. Необходимо реализовать возможность удаления статьи, добавления статьи и редактирования статьи. Ввод данных можно реализовать через prompt. Статьи должны сохраняться в localStorage.

const initialJSON = '[{"id":1717493328792,"title":"visible","text":"text1"},{"id":1717493328793,"title":"letter","text":"text2"},{"id":1717493328794,"title":"quality","text":"text3"}]';

const art = 'articles';

if (localStorage.length < 1) {
  localStorage.setItem(art, initialJSON);
}

const data = JSON.parse(localStorage.getItem(art));

const ulEl = document.querySelector('.list');
const addEl = (el) => {
  const liEl = document.createElement('li');
  liEl.insertAdjacentHTML('beforeend', `
  <p>ID: ${el.id}</p>
  <p>Title: ${el.title}</p>
  <p>Text: ${el.text}</p>
  <button class="delete">Delete</button>
  <button class="edit">Edit</button>
  `);
  ulEl.append(liEl);
}

data.forEach(element => {
  addEl(element);
});

const listEl = document.querySelector('.list');

listEl.addEventListener('click', ({target}) => {
  if (target.classList.contains('delete')) {
    const closeLi = target.closest('li');
    closeLi.remove();
    
    const updArt = data.findIndex(el => el.id === Number(closeLi.getAttribute('id')));
    data.splice(updArt, 1);
    localStorage.setItem(art, JSON.stringify(data));
  } else if (target.classList.contains('edit')) {
    const title = prompt('Enter title: ');
    const text = prompt('Enter text: ');

    if (!text || !title) {
      alert('Please, enter title and text');
      return;
    }

    const article = data.find(el => el.id === closeLi.getAttribute('id'));
    article.title = title;
    article.text = text;

    localStorage.setItem(art, JSON.stringify(data));
    
    closeLi.querySelector('.title').textContent = title;
    closeLi.querySelector('.text').textContent = text;
  }
});


const addItem = document.querySelector('.addItem');

addItem.addEventListener('click', () => {
  const title = prompt('Enter title: ');
  const text = prompt('Enter text: ');
  const id = Date.now();
  const newItem = {
    id,
    title,
    text,
  };
  data.push(newItem);
  localStorage.setItem(art, JSON.stringify(data));
  ulEl.insertAdjacentHTML('beforeend', addEl(newItem));
});