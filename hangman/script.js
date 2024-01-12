const secondRowButtons = [
    { itemEng: 'q', itemRu: 'й', valueEng: 'q', valueRu: 'й', code: 'KeyQ', isSpecialSymbol: false },
    { itemEng: 'w', itemRu: 'ц', valueEng: 'w', valueRu: 'ц', code: 'KeyW', isSpecialSymbol: false },
    { itemEng: 'e', itemRu: 'у', valueEng: 'e', valueRu: 'у', code: 'KeyE', isSpecialSymbol: false },
    { itemEng: 'r', itemRu: 'к', valueEng: 'r', valueRu: 'к', code: 'KeyR', isSpecialSymbol: false },
    { itemEng: 't', itemRu: 'е', valueEng: 't', valueRu: 'е', code: 'KeyT', isSpecialSymbol: false },
    { itemEng: 'y', itemRu: 'н', valueEng: 'y', valueRu: 'н', code: 'KeyY', isSpecialSymbol: false },
    { itemEng: 'u', itemRu: 'г', valueEng: 'u', valueRu: 'г', code: 'KeyU', isSpecialSymbol: false },
    { itemEng: 'i', itemRu: 'ш', valueEng: 'i', valueRu: 'ш', code: 'KeyI', isSpecialSymbol: false },
    { itemEng: 'o', itemRu: 'щ', valueEng: 'o', valueRu: 'щ', code: 'KeyO', isSpecialSymbol: false },
    { itemEng: 'p', itemRu: 'з', valueEng: 'p', valueRu: 'з', code: 'KeyP', isSpecialSymbol: false },
];

const thirdRowButtons = [
    { itemEng: 'a', itemRu: 'ф', valueEng: 'a', valueRu: 'ф', code: 'KeyA', isSpecialSymbol: false },
    { itemEng: 's', itemRu: 'ы', valueEng: 's', valueRu: 'ы', code: 'KeyS', isSpecialSymbol: false },
    { itemEng: 'd', itemRu: 'в', valueEng: 'd', valueRu: 'в', code: 'KeyD', isSpecialSymbol: false },
    { itemEng: 'f', itemRu: 'а', valueEng: 'f', valueRu: 'а', code: 'KeyF', isSpecialSymbol: false },
    { itemEng: 'g', itemRu: 'п', valueEng: 'g', valueRu: 'п', code: 'KeyG', isSpecialSymbol: false },
    { itemEng: 'h', itemRu: 'р', valueEng: 'h', valueRu: 'р', code: 'KeyH', isSpecialSymbol: false },
    { itemEng: 'j', itemRu: 'о', valueEng: 'j', valueRu: 'о', code: 'KeyJ', isSpecialSymbol: false },
    { itemEng: 'k', itemRu: 'л', valueEng: 'k', valueRu: 'л', code: 'KeyK', isSpecialSymbol: false },
    { itemEng: 'l', itemRu: 'д', valueEng: 'l', valueRu: 'д', code: 'KeyL', isSpecialSymbol: false },
];

const fourthRowButtons = [
    { itemEng: 'z', itemRu: 'я', valueEng: 'z', valueRu: 'я', code: 'KeyZ', isSpecialSymbol: false },
    { itemEng: 'x', itemRu: 'ч', valueEng: 'x', valueRu: 'ч', code: 'KeyX', isSpecialSymbol: false },
    { itemEng: 'c', itemRu: 'с', valueEng: 'c', valueRu: 'с', code: 'KeyC', isSpecialSymbol: false },
    { itemEng: 'v', itemRu: 'м', valueEng: 'v', valueRu: 'м', code: 'KeyV', isSpecialSymbol: false },
    { itemEng: 'b', itemRu: 'и', valueEng: 'b', valueRu: 'и', code: 'KeyB', isSpecialSymbol: false },
    { itemEng: 'n', itemRu: 'т', valueEng: 'n', valueRu: 'т', code: 'KeyN', isSpecialSymbol: false },
    { itemEng: 'm', itemRu: 'ь', valueEng: 'm', valueRu: 'ь', code: 'KeyM', isSpecialSymbol: false },
];

const wordState = {};
const main = document.createElement("main");

const createMain = () => {
    main.className = "main";
    const body = document.querySelector("body");
    body.appendChild(main);
}

const createGallowsSection = () => {
    const gallowsSection = createElement("section", "section gallows-section", main);
    
    const gallowsImage = createElement("img", "gallows-image", gallowsSection);
    gallowsImage.src = "assets/gallows.svg";
    gallowsImage.alt = "gallows";

    const gameTitle = createElement("p", "game-title", gallowsSection);
    gameTitle.textContent = "Hangman game";
}

const createKeyboardSection = async () => {
    const keyboardSection = createElement("section", "section keyboard-section", main);

    const riddle = await getRandomRiddle();

    const wordContainer = createElement("div", "word-container", keyboardSection);

    for (let letter of riddle[0]) {
        createElement("p", `letter-container letter-${letter.toUpperCase()}`, wordContainer);
        wordState["Key" + letter.toUpperCase()] = {
            letter: letter.toUpperCase(),
            isActive: false};
    }

    const riddleContainer = createElement("p", "riddle-container", keyboardSection);
    riddleContainer.textContent = riddle[1];

    const guessesCounterContainer = createElement("p", "guesses-counter-container", keyboardSection);
    guessesCounterContainer.innerHTML = `Incorrect guesses: <span class="guesses-counter">0</span>/6`;

    const keyboard = createElement("div", "keyboard", keyboardSection);
    fillKeyboard(keyboard);
}

const fillKeyboard = (keyboard) => {
    let keyboardRows = [secondRowButtons, thirdRowButtons, fourthRowButtons];

    for (let i = 0; i < keyboardRows.length; i++) {
        const keyboardRow = createElement("div", "keyboard-row", keyboard);
        keyboardRows[i].forEach(char => {
            const keyboardButton = createElement("button", `keyboard-button ${char.code}`, keyboardRow);
            keyboardButton.textContent = char.itemEng;
            keyboardButton.addEventListener("click", function () {
                pressKey(this.classList[1])
            });
        });
    }

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        const key = document.querySelector(`.${event.code}`);
        key?.classList.add("active");
        pressKey(event.code);
    });

    document.addEventListener("keyup", (event) => {
        const key = document.querySelector(`.${event.code}`);
        key?.classList.remove("active");
    });
}

const createElement = (tag, className, parent) => {
    const element = document.createElement(tag);
    element.className = className;
    parent.appendChild(element);

    return element;
}

const getRandomRiddle = async () => {
    const response = await fetch("resources/riddles.json");
    const riddles = await response.json();

    return riddles[Math.floor(Math.random() * riddles.length)];
}

const pressKey = (keyCode) => {
    if (!keyCode.includes("Key")) {
        return;
    }

    const clickedLetter = wordState[keyCode];

    if (clickedLetter === undefined) {
        // TODO: add logic when letter is wrong
        console.log(keyCode);
        return;
    }

    clickedLetter.isActive = true;
    let elementLetters = document.querySelectorAll(`.letter-${clickedLetter.letter}`);
    elementLetters.forEach(element => element.textContent = clickedLetter.letter);
}

createMain();
createGallowsSection();
createKeyboardSection();