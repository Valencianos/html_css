// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.
// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const btn = document.querySelector('.button');
const news = document.querySelector('.news');
const data = [
  { title: 1, content: 'Aurora beats Lynn Vision on Normandic Cup' },
  { title: 2, content: 'The Mongols have no chance against G2' }
]
const fetchNews = () => {
  let ran = Math.random() * 10;
  console.log(ran);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ran > 3 || ran < 2) {
        resolve(data);
      } else {
        reject('Ooops, there is a mistake');
      }
    }, 2000);
  });
}

btn.addEventListener('click', () => {
  fetchNews()
    .then((result) => {
      result.forEach(element => {
        const pEl = document.createElement('p');
        pEl.textContent = element.content;
        news.appendChild(pEl);
      });
    }).catch((err) => {
      news.textContent = `Mistake ${err}`;
    });
})

