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
  <div class="card" data-id="${element.id}">
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



const cartItems = document.querySelector('.cart__items');
let cardButtonsLength = document.querySelectorAll('.card__button').length;
const cardButtons = document.querySelectorAll('.card__button');

let cart = {};

cardButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    // if (!event.target.closest('.addToCart')) {
    //   return;
    // }

    const cardItemEl = event.target.closest('.card');
    console.log(cardItemEl);
    const id = +cardItemEl.dataset.id - 1;

    addToCart(id);
  })
})


function addToCart(productId) {
  const productRow = `
  <div class="item">
  <img src="${data[productId].img}" alt="${data[productId].title}" class="item__pic">
  <div class="item__content">
    <h4 class="item__title">${data[productId].title}</h4>
    <div class="item__box">
      <p class="item__price">Price:<span class="item__price_select">$${data[productId].price}</span></p>
      <p class="item__color">Color:<span class="item__color_select">${data[productId].color}</span></p>
      <p class="item__size">Size:<span class="item__size_select">${data[productId].size}</span></p>
      <p class="item__quantity">Quantity: <input type="number" value="${data[productId].qty}" class="item__quantity_select"></p>
    </div>
    <button class="item__close">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
          fill="#575757" />
      </svg>
    </button>
  </div>
  </div>
  `

  cartItems.insertAdjacentHTML("beforebegin", productRow);
};

// const removeFromCart = document.querySelector('.item__close');
// removeFromCart.addEventListener('click', () => {

// })