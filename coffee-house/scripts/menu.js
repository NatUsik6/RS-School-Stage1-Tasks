"use strict";

fillTabs()
.then(loadModalScript);

async function fillTabs() {
    let response = await fetch("resources/products.json");
    let products = await response.json();

    const coffeeTabGrid = document.querySelector(".menu-container__tab-coffee .menu-container__tab__grid");
    const teaTabGrid = document.querySelector(".menu-container__tab-tea .menu-container__tab__grid");
    const dessertTabGrid = document.querySelector(".menu-container__tab-dessert .menu-container__tab__grid");

    for (let product of products) {
        const card = createCard(product);

        switch (product.category) {
            case "coffee":
                coffeeTabGrid.append(card);
                break;
            case "tea":
                teaTabGrid.append(card);
                break;
            case "dessert":
                dessertTabGrid.append(card);
                break;
        }
    }
}

function createCard(product) {
    const card = document.createElement("figure");
    card.className = "card";

    const cardImage = document.createElement("div");
    cardImage.className = "card__image";
    cardImage.style.backgroundImage = `url('${product.image}')`;

    const cardCaption = document.createElement("figcaption");
    cardCaption.className = "card__caption";

    const cardDescription = document.createElement("div");
    cardDescription.className = "card__description";

    const cardTitle = document.createElement("p");
    cardTitle.className = "card__description__title";
    cardTitle.textContent = product.name;

    const cardText = document.createElement("p");
    cardText.className = "card__description__text";
    cardText.textContent = product.description;

    const cardCost = document.createElement("p");
    cardCost.className = "card__cost";
    cardCost.textContent = "$" + product.price;

    cardDescription.append(cardTitle, cardText);
    cardCaption.append(cardDescription, cardCost);
    card.append(cardImage, cardCaption);

    return card;
}

const buttonMore = document.querySelector(".button-more");
buttonMore.addEventListener("click", expandTab);
const radioButtons = document.querySelectorAll(".menu-container__radio");
radioButtons.forEach(radioButton => radioButton.addEventListener("change", changeTab));

const tabCoffee = document.querySelector(".menu-container__tab-coffee");
const tabDessert = document.querySelector(".menu-container__tab-dessert");

function expandTab() {
    const checkedRadioButton = document.querySelector(".menu-container__radio:checked");

    switch (checkedRadioButton.id) {
        case "coffee-button":
            tabCoffee.classList.add("expanded");
            break;
        case "dessert-button":
            tabDessert.classList.add("expanded");
            break;
    }
}

function changeTab() {
    document.querySelectorAll(".menu-container__tab").forEach(tab => tab.classList.remove("expanded"));
}

function loadModalScript() {
    let script = document.createElement("script");
    script.src = "scripts/modal.js";
    document.body.append(script);
}