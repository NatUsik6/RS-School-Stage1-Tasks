"use strict"

let currentPosition = 0;
const lastPosition = 2;

const sliderRightArrowButton = document.querySelector(".favorite-coffee__slider__container__right-arrow-button");
sliderRightArrowButton.addEventListener("click", moveSliderLeft);
const sliderWrapper = document.querySelector(".slider-wrapper");

function moveSliderLeft() {
    increasePosition();

    switch (currentPosition) {
        case 0:
            sliderWrapper.style.justifyContent = "flex-start";
            break;
        case 1:
            sliderWrapper.style.justifyContent = "center";
            break;
        case 2:
            sliderWrapper.style.justifyContent = "flex-end";
            break;
    }
}

function increasePosition() {
    currentPosition = currentPosition < lastPosition ? currentPosition + 1 : 0;
}

function decreasePosition() {
    currentPosition = currentPosition > 0 ? currentPosition - 1 : lastPosition;
}