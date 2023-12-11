"use strict"

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", openModal));

const menuContainer = document.querySelector(".menu-container");
const modal = document.querySelector(".modal");
const totalPrice = modal.querySelector(".modal__total__cost");
let price = 0;
let sizePrice = 0;
let additivesPrice = 0;
let selectedProduct;

async function openModal() {
    let productName = this.querySelector(".card__description__title").textContent;
    await fillData(productName);
    menuContainer.classList.add("modal-opened");
}

const closeButton = document.querySelector(".modal__button-close");
closeButton.addEventListener("click", closeModal);
const modalRadioButtons = document.querySelectorAll(".modal__radio");
modalRadioButtons.forEach(button => button.addEventListener("change", chooseSize));
const modalCheckboxButtons = document.querySelectorAll(".modal__checkbox");
modalCheckboxButtons.forEach(button => button.addEventListener("click", selectAdditives));
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", closeModal);

function closeModal() {
    menuContainer.classList.remove("modal-opened");
}

async function fillData(productName) {
    let response = await fetch("resources/products.json");
    let products = await response.json();
    selectedProduct = products.find(product => product.name === productName);

    modal.querySelector(".modal__image").style.backgroundImage = `url('${selectedProduct.image}')`;
    modal.querySelector(".modal__description__title").textContent = selectedProduct.name;
    modal.querySelector(".modal__description__text").textContent = selectedProduct.description;
    modal.querySelector(".s-size-text").textContent = selectedProduct.sizes.s.size;
    modal.querySelector(".m-size-text").textContent = selectedProduct.sizes.m.size;
    modal.querySelector(".l-size-text").textContent = selectedProduct.sizes.l.size;
    modal.querySelector(".extra-1-text").textContent = selectedProduct.additives[0].name;
    modal.querySelector(".extra-2-text").textContent = selectedProduct.additives[1].name;
    modal.querySelector(".extra-3-text").textContent = selectedProduct.additives[2].name;

    price = +selectedProduct.price;

    fillPrice();
}

function chooseSize() {
    switch(this.id) {
        case "s-size":
            sizePrice = 0;
            break;
        case "m-size":
            sizePrice = 0.5;
            break;
        case "l-size":
            sizePrice = 1;
            break;
    }

    fillPrice();
}

function selectAdditives() {
    additivesPrice += this.checked ? 0.5 : -0.5;
    fillPrice();
}

function fillPrice() {
    modal.querySelector(".modal__total__cost").textContent =
        "$" + (price + sizePrice + additivesPrice).toFixed(2);
}