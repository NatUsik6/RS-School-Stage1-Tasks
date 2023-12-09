"use strict"

let currentPosition = 0;
const lastPosition = 2;

const sliderRightArrowButton = document.querySelector(".favorite-coffee__slider__container__right-arrow-button");
sliderRightArrowButton.addEventListener("click", moveSliderLeft);
const sliderLeftArrowButton = document.querySelector(".favorite-coffee__slider__container__left-arrow-button");
sliderLeftArrowButton.addEventListener("click", moveSliderRight);

const sliderWrapper = document.querySelector(".slider-wrapper");
const slider = document.querySelector(".slider");

const sliderProgress1 = document.querySelector(".favorite-coffee__slider__controls_page1 .slider__progress");
const sliderProgress2 = document.querySelector(".favorite-coffee__slider__controls_page2 .slider__progress");
const sliderProgress3 = document.querySelector(".favorite-coffee__slider__controls_page3 .slider__progress");
const sliderProgressList = [sliderProgress1, sliderProgress2, sliderProgress3];

sliderProgressList.forEach(sliderProgress => sliderProgress.addEventListener("animationend", moveSliderLeft))
startSliderProgress();

function moveSliderLeft() {
    increasePosition();
    setSliderPosition();
    startSliderProgress();
}

function moveSliderRight() {
    decreasePosition();
    setSliderPosition();
    startSliderProgress();
}

function increasePosition() {
    currentPosition = currentPosition < lastPosition ? currentPosition + 1 : 0;
}

function decreasePosition() {
    currentPosition = currentPosition > 0 ? currentPosition - 1 : lastPosition;
}

function setSliderPosition() {
    slider.style.transform = `translateX(-${sliderWrapper.offsetWidth * currentPosition}px)`;
}

function startSliderProgress() {
    sliderProgressList.forEach(sliderProgress => sliderProgress.classList.remove("active"));

    switch (currentPosition) {
        case 0:
            sliderProgress1.classList.add("active");
            break;
        case 1:
            sliderProgress2.classList.add("active");
            break;
        case 2:
            sliderProgress3.classList.add("active");
            break;
    }
}