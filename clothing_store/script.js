const menuActive = document.querySelector('.menu'); // find menu
const burger = document.querySelector('.user-list__item-menu'); // find burger button
// const menuClose = document.querySelector('.menu-close'); // find button x

function toggleMenu() {
	menuActive.classList.toggle('hide'); //function remove or set class with name hidden in div with class .menu-active
}

burger.addEventListener('click', toggleMenu); // function will work upon click on burger
// menuClose.addEventListener('click', toggleMenu); // function will work upon click on x

const url = './data.json';
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`mistake ${error}`);
  }
}

const data = await getData(url);

const cards = document.querySelector('.cards');
data.forEach(element => {
  cards.insertAdjacentHTML('beforeend', 
  `
  <div class="card">
    <div class="card__img" style="background-image: url(${element.img})">
      <div class="card__dark">
        <button class="card__button">
          <img src="./img/Forma 1 (3).svg" alt="add to basket button">
          <p class="card__button_text">Add to Cart</p>
        </button>
      </div>
    </div>
    <div class="card__text">
      <h5 class="card__text_title">${element.title}</h6>
      <p class="card__text_desc">${element.desc}</p>
      <p class="card__text_price">$${element.price}</p>
    </div>
  </div>
  `)
});