// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const btn = document.querySelector('.btn');
// window.onload = () => {
//     console.log('страница загрузилась');
// }
// btn.onclick = () => {
//     console.log('событие onclick');
// }
// btn.addEventListener('mouseover', () => {
//     console.log('событие addEventListener');
// })

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// for (let i = 1; i < 6; i++) {
//     document.body.insertAdjacentHTML('beforeend', `<button>${i}</button>`)
// }
// document.body.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'BUTTON') {
//         console.log(`Press the button ${e.target.textContent}`);
//     }
// })
// const btns = document.querySelectorAll('button');
// let count = 0;
// btns[3].addEventListener('click', () => {
//     count++;
//     console.log(`You push button 4 - ${count} times`);
// })
// btns[4].addEventListener('click', () => {
//     btns[4].textContent = 'Вы нажали на эту кнопку'
// })

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const btn = document.createElement('button');
// btn.textContent = 'Push me';
// document.body.insertAdjacentElement('beforeend',btn);
// btn.addEventListener('click', () => {
//     btn2.insertAdjacentHTML('afterend', '<h1>New chapter</h1>')
// })
// const btn2 = document.createElement('button');
// btn2.textContent = 'Delete';
// document.body.insertAdjacentElement('beforeend',btn2);
// btn2.addEventListener('click', () => {
//     const h1 = document.querySelector('h1');
//     h1.remove();
// })
// const btn3 = document.createElement('button');
// btn3.textContent = 'Hover';
// document.body.insertAdjacentElement('beforeend',btn3);
// btn3.addEventListener('mouseover', () => {
//     console.log('вы навели на данную кнопку');
// })
// btn3.addEventListener('mouseout', () => {
//     console.log('Наведения на кнопку больше нет');
// })

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const lst = document.querySelector('.list');
const bttn = document.createElement('button');
bttn.textContent = 'Add element';
document.body.insertAdjacentElement('beforeend',bttn);
bttn.addEventListener('click', () => {
    lst.insertAdjacentHTML('beforeend', '<li>New element</li>');
})
const bttn2 = document.createElement('button');
bttn2.textContent = 'Remove element';
document.body.insertAdjacentElement('beforeend',bttn2);
bttn2.addEventListener('click', () => {
    lst.firstElementChild.remove();
})
const bttn3 = document.createElement('button');
bttn3.textContent = 'Add class';
document.body.insertAdjacentElement('beforeend',bttn3);
bttn3.addEventListener('click', () => {
    bttn3.classList.add('click');
})