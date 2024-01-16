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

let riddle = [];
let wordState = {};
const main = document.createElement("main");
let counter = 0;
const maxCounter = 6;
const bodyParts = [
    ".hangman-head",
    ".hangman-body",
    ".hangman-left-arm",
    ".hangman-right-arm",
    ".hangman-left-leg",
    ".hangman-right-leg"
]

const createMain = () => {
    main.className = "main";
    const body = document.querySelector("body");
    body.appendChild(main);
}

const createGallowsSection = () => {
    const gallowsSection = createElement("section", "section gallows-section", main);

    const gallowsImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gallowsImage.setAttribute("width", "353");
    gallowsImage.setAttribute("height", "581");
    gallowsImage.innerHTML = `<rect fill="black" height="199.6" stroke="#FFFEFE" stroke-width="3" transform="rotate(45 176.337 34.6662)" width="39" x="176.34" y="34.67"/>
        <rect fill="black" height="578" rx="3.5" stroke="#FFFEFE" stroke-width="3" width="39" x="34.5" y="1.5"/>
        <rect fill="black" height="350" rx="3.5" stroke="#FFFEFE" stroke-width="3" transform="rotate(90 351.5 34.5)" width="39" x="351.5" y="34.5"/>
        <rect fill="black" height="74" width="10" x="298" y="75"/>
        <circle class="hangman-head" fill-opacity="0" cx="304" cy="189" fill="#000000" r="40" stroke="#000000" stroke-width="5"/>
        <line class="hangman-body" fill="none" stroke="#000000" stroke-width="5" x1="304" x2="304" y1="228" y2="359"/>
        <line class="hangman-right-arm" fill="none" stroke="#000000" stroke-width="5" x1="303" x2="352" y1="253" y2="303"/>
        <line class="hangman-left-arm" fill="none" stroke="#000000" stroke-width="5" x1="303.23" x2="253.23" y1="253" y2="303"/>
        <line class="hangman-right-leg" fill="none" stroke="#000000" stroke-width="5" x1="303.68" x2="352.68" y1="355.05" y2="405.05"/>
        <line class="hangman-left-leg" fill="none" stroke="#000000" stroke-width="5" x1="303.91" x2="253.91" y1="355.05" y2="405.05"/>`;
    gallowsSection.appendChild(gallowsImage);

    const gameTitle = createElement("p", "game-title", gallowsSection);
    gameTitle.textContent = "Hangman game";
}

const createKeyboardSection = async () => {
    const keyboardSection = createElement("section", "section keyboard-section", main);

    riddle = await getRandomRiddle();

    const wordContainer = createElement("div", "word-container", keyboardSection);

    for (let letter of riddle[0]) {
        createElement("p", `letter-container letter-${letter.toUpperCase()}`, wordContainer);
        wordState["Key" + letter.toUpperCase()] = {
            letter: letter.toUpperCase(),
            isActive: false
        };
    }

    const riddleContainer = createElement("p", "riddle-container", keyboardSection);
    riddleContainer.textContent = riddle[1];

    const guessesCounterContainer = createElement("p", "guesses-counter-container", keyboardSection);
    guessesCounterContainer.innerHTML = `Incorrect guesses: <span class="guesses-counter">${counter}</span>/6`;

    const keyboard = createElement("div", "keyboard", keyboardSection);
    fillKeyboard(keyboard);

    const modalWindow = createElement("div", "modal-window-container", main);
    const modalDescriptionWrapper = createElement("div", "modal-description-wrapper", modalWindow);
    createElement("p", "status-user", modalDescriptionWrapper);
    createElement("p", "secret-word", modalDescriptionWrapper);
    const buttonPlayAgain = createElement("button", "button-play-again", modalDescriptionWrapper);
    buttonPlayAgain.textContent = "Play again";
    buttonPlayAgain.addEventListener("click", playAgain);

    createElement("div", "overlay", main);
}

const fillKeyboard = (keyboard) => {
    let keyboardRows = [secondRowButtons, thirdRowButtons, fourthRowButtons];

    for (let i = 0; i < keyboardRows.length; i++) {
        const keyboardRow = createElement("div", "keyboard-row", keyboard);
        keyboardRows[i].forEach(char => {
            const keyboardButton = createElement("button", `keyboard-button ${char.code}`, keyboardRow);
            keyboardButton.textContent = char.itemEng.toUpperCase();
            keyboardButton.addEventListener("click", function () {
                if (!this.classList.contains("active")) {
                    this.classList.add("active");
                    pressKey(this.classList[1]);
                    removeEventListener(this);
                }
            });
        });
    }

    document.addEventListener("keydown", (event) => {
        event.preventDefault();

        if (document.querySelector(".modal-window-container").classList.contains("active")) {
            return;
        }
        
        const key = document.querySelector(`.${event.code}`);

        if (!key.classList.contains("active")) {
            key?.classList.add("active");
            pressKey(event.code);
        }
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

    let newRiddle = [];

    do {
        newRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    } while (riddle[0] === newRiddle[0]);

    return newRiddle;
}

const pressKey = (keyCode) => {
    if (!keyCode.includes("Key")) {
        return;
    }

    const clickedLetter = wordState[keyCode];

    if (clickedLetter === undefined) {
        document.querySelector(bodyParts[counter]).classList.add("visible");
        document.querySelector(".guesses-counter").textContent = ++counter;

        if (counter >= maxCounter) {
            showModal(false);
        }

        return;
    }

    clickedLetter.isActive = true;
    let elementLetters = document.querySelectorAll(`.letter-${clickedLetter.letter}`);
    elementLetters.forEach(element => element.textContent = clickedLetter.letter);

    if (Object.values(wordState).every((letter) => letter.isActive)) {
        showModal(true);
    }
}

const showModal = (isWin) => {
    const modal = document.querySelector(".modal-window-container");
    modal.querySelector(".status-user").textContent = `Status: ${isWin ? "Winner!" : "Looser. :("}`;
    modal.querySelector(".secret-word").textContent = `Answer: ${riddle[0].toUpperCase()}`;
    modal.classList.add("active");

    document.querySelector(".overlay").classList.add("active");
}

const playAgain = async () => {
    document.querySelector(".modal-window-container").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
    counter = 0;
    document.querySelector(".guesses-counter").textContent = counter;
    bodyParts.forEach(bodyPart => document.querySelector(bodyPart).classList.remove("visible"));

    riddle = await getRandomRiddle();
    
    const wordContainer = document.querySelector(".word-container");
    wordContainer.innerHTML = "";
    wordState = {};

    for (let letter of riddle[0]) {
        createElement("p", `letter-container letter-${letter.toUpperCase()}`, wordContainer);
        wordState["Key" + letter.toUpperCase()] = {
            letter: letter.toUpperCase(),
            isActive: false
        };
    }

    const riddleContainer = document.querySelector(".riddle-container");
    riddleContainer.textContent = riddle[1];

    document.querySelectorAll(".keyboard-button")
        .forEach(button => button.classList.remove("active"));
}

createMain();
createGallowsSection();
createKeyboardSection();