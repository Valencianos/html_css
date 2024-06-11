// Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.
// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).
// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY. Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный API-ключ.

const photoContainer = document.getElementById('photo-container');
let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=IF34zsBayguBXtfQT7_CQD_ukKfgxcnNk95pQB3ut4c&page=${page}`
    );
    const photos = await response.json();
    return photos;
  }
  catch (error) {
    console.error(`mistake ${error}`);
    return [];
  }
}

async function loadMorePhotos() {
  // Create content
}

// window. add event listener('?', () => {create infinity scroll   if() { loadMorePhotos()}})

// Loading of first photos
loadMorePhotos();