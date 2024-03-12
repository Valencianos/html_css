const blockEl = document.querySelector('#block');
console.log(blockEl);
const paragraphEl = document.querySelector('.www');
console.log(paragraphEl);

const aEl = document.querySelector('.link');
aEl.textContent = 'link text js';
aEl.href = 'https://developer.mozilla.org/ru';

const photoEl = document.querySelector('.photo');
photoEl.src = 'https://avatars.dzeninfra.ru/get-zen_doc/9367654/pub_64626d21cefa7859348edd71_646270eadd2db6606be734fa/scale_1200';

const contentEl = document.querySelector('.content');
const newParEl = document.createElement('p');
newParEl.textContent = 'New text element';
contentEl.appendChild(newParEl);
newParEl.remove();

const buttonEl = document.createElement('button');
contentEl.appendChild(buttonEl);
// let count = 0;
// buttonEl.onclick = function() {
//     count++;
//     console.log(count);
// }

buttonEl.textContent = 'Send';
buttonEl.onclick = function() {
    buttonEl.textContent = 'Text sent';
}