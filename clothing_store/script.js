const menuActive = document.querySelector('.menu'); // find menu
const burger = document.querySelector('.user-list__item-menu'); // find burger button
// const menuClose = document.querySelector('.menu-close'); // find button x

function toggleMenu() {
	menuActive.classList.toggle('hide'); //function remove or set class with name hidden in div with class .menu-active
}

burger.addEventListener('click', toggleMenu); // function will work upon click on burger
// menuClose.addEventListener('click', toggleMenu); // function will work upon click on x