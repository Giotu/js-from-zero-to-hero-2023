const btn = document.querySelector('.header__button');
const nav = document.querySelector('.header__menu');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
})
