// HEADER 

const burgerButton = document.querySelector(".burger-button");
burgerButton.addEventListener("click", toggleBurgerMenuOpen);

function toggleBurgerMenuOpen() {
    const header = document.querySelector('.header');
    header.classList.toggle('burger-menu_open');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
}

const navLinks = document.querySelectorAll(".nav-container-list__link");
navLinks.forEach(navLink => navLink.addEventListener("click", disableBurgerMenuOpen));

function disableBurgerMenuOpen() {
    const header = document.querySelector(".header");
    header.classList.remove("burger-menu_open");
    document.body.style.overflow = "";
}