'use strict';

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary');

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const ddMenu = document.querySelector('.dropdown-menu');
if (ddMenu.classList.contains('menu')) {
    ddMenu.classList.remove('dropdown-menu');
}

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dd = document.querySelector('div.dropdown');
dd.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const ddMB = document.querySelector('#dropdownMenuButton');
ddMB.id = 'superDropdown';

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const dataDD = document.querySelector("[aria-labelledby='dropdownMenuButton']");
dataDD.dataset.dd = '3';

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dt = document.querySelector('.dropdown-toggle');
dt.removeAttribute('type');