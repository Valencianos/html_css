// Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. Ниже приведены основные требования и функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.

const wrapper = document.querySelector('.wrapper');
const container = wrapper.querySelector('.container');
wrapper.addEventListener('click', (e) => {
  if (e.target.closest('#addElt')) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = container.children.length + 1;
    container.append(box);
  } else if (e.target.closest('#remElt')) {
    if (container.children.length > 0) {
      container.lastElementChild?.remove();
    }
  } else if (e.target.closest('#copyElt')) {
    if (container.children.length > 0) {
      const copy = container.lastElementChild?.cloneNode(true);
      container.append(copy);
    }
  }
});