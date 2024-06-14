// Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.
// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.

const container = document.querySelector('.container');

const accessKey = 'IF34zsBayguBXtfQT7_CQD_ukKfgxcnNk95pQB3ut4c';

const fetchPhotos = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}`
    );
    const photos = await response.json();
    return photos;
  }
  catch (error) {
    console.error(`mistake ${error}`);
    return [];
  }
}

async function loadPhoto() {
  const photo = await fetchPhotos();
  if (photo) {
    container.innerHTML = `
      <img class="image" src="${photo.urls.small}" alt="Случайное изображение:">
      <div class="image__info">
        <p class="author">Photo by: ${photo.user.name}</p>
        <button class="like__button">Like</button>
        <span class="like__counter"></span>
      </div>
    `
  }
}

loadPhoto();

const likeButton = document.querySelector('.like__button');
let likeCounter = document.querySelector('.like__counter');
likeButton.addEventListener('click', () => {
  increaseCounter();
});


function increaseCounter() {
  likeCounter.textContent = Number(likeCounter.textContent) + 1;
}