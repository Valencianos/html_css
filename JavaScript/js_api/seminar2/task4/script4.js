// Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.

const questions = document.querySelectorAll('.question');
const btn = document.getElementById('submit');
const result = document.querySelector('.result');
const span = document.getElementsByTagName('span');

btn.addEventListener('click', () => {
  const resultsHTML = [];
  questions.forEach((answer, index) => {
    const checked = answer.querySelector('input:checked');
    if (!checked) {
      result.textContent = 'Вы не ответили на все вопросы';
      result.style.display = 'block';
      answer.style.border = '2px solid red';
    } else {
      resultsHTML.push(`<p data-number="${index+1}">Question ${index+1}: <span>${checked.value}</span></p>`)
      result.innerHTML = resultsHTML.join('');
      result.style.display = 'block';
      span.textContent = checked.value;
      answer.style.border = '2px solid white';
      btn.disabled = true;
    }
  })
});