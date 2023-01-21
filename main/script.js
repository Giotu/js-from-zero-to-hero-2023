const btn = document.querySelector('.header__button');
const nav = document.querySelector('.header__menu');
const itemMenu = document.querySelectorAll('.header__list-item');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

itemMenu.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('menu-open');
    })
});
