// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});
