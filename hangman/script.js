const firstRowButtons = [
    { itemEng: '`', itemRu: 'ё', valueEng: '`', valueRu: 'ё', code: 'Backquote', isSpecialSymbol: false },
    { itemEng: '1', itemRu: '1', valueEng: 1, valueRu: 1, code: 'Digit1', isSpecialSymbol: false },
    { itemEng: '2', itemRu: '2', valueEng: 2, valueRu: 2, code: 'Digit2', isSpecialSymbol: false },
    { itemEng: '3', itemRu: '3', valueEng: 3, valueRu: 3, code: 'Digit3', isSpecialSymbol: false },
    { itemEng: '4', itemRu: '4', valueEng: 4, valueRu: 4, code: 'Digit4', isSpecialSymbol: false },
    { itemEng: '5', itemRu: '5', valueEng: 5, valueRu: 5, code: 'Digit5', isSpecialSymbol: false },
    { itemEng: '6', itemRu: '6', valueEng: 6, valueRu: 6, code: 'Digit6', isSpecialSymbol: false },
    { itemEng: '7', itemRu: '7', valueEng: 7, valueRu: 7, code: 'Digit7', isSpecialSymbol: false },
    { itemEng: '8', itemRu: '8', valueEng: 8, valueRu: 8, code: 'Digit8', isSpecialSymbol: false },
    { itemEng: '9', itemRu: '9', valueEng: 9, valueRu: 9, code: 'Digit9', isSpecialSymbol: false },
    { itemEng: '0', itemRu: '0', valueEng: 0, valueRu: 0, code: 'Digit0', isSpecialSymbol: false },
    { itemEng: '-', itemRu: '-', valueEng: '-', valueRu: '-', code: 'Minus', isSpecialSymbol: false },
    { itemEng: '=', itemRu: '=', valueEng: '=', valueRu: '=', code: 'Equal', isSpecialSymbol: false },
    { itemEng: 'Backspace', itemRu: 'Backspace', valueEng: '', valueRu: '', code: 'Backspace', isSpecialSymbol: true },
];

const secondRowButtons = [
    { itemEng: 'Tab', valueEng: ' ', itemRu: 'Tab', valueRu: ' ', code: 'Tab', isSpecialSymbol: true },
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
    { itemEng: '[', itemRu: 'х', valueEng: '[', valueRu: 'х', code: 'BracketLeft', isSpecialSymbol: false },
    { itemEng: ']', itemRu: 'ъ', valueEng: ']', valueRu: 'ъ', code: 'BracketRight', isSpecialSymbol: false },
    { itemEng: '\\', itemRu: '\\', valueEng: '\\', valueRu: '\\', code: 'Backslash', isSpecialSymbol: false },
    { itemEng: 'Del', itemRu: 'Del', valueEng: '', valueRu: '', code: 'Delete', isSpecialSymbol: true },
];

const thirdRowButtons = [
    { itemEng: 'CapsLock', valueEng: '', itemRu: 'CapsLock', valueRu: '', code: 'CapsLock', isSpecialSymbol: true },
    { itemEng: 's', itemRu: 'ы', valueEng: 's', valueRu: 'ы', code: 'KeyS', isSpecialSymbol: false },
    { itemEng: 'a', itemRu: 'ф', valueEng: 'a', valueRu: 'ф', code: 'KeyA', isSpecialSymbol: false },
    { itemEng: 'd', itemRu: 'в', valueEng: 'd', valueRu: 'в', code: 'KeyD', isSpecialSymbol: false },
    { itemEng: 'f', itemRu: 'а', valueEng: 'f', valueRu: 'а', code: 'KeyF', isSpecialSymbol: false },
    { itemEng: 'g', itemRu: 'п', valueEng: 'g', valueRu: 'п', code: 'KeyG', isSpecialSymbol: false },
    { itemEng: 'h', itemRu: 'р', valueEng: 'h', valueRu: 'р', code: 'KeyH', isSpecialSymbol: false },
    { itemEng: 'j', itemRu: 'о', valueEng: 'j', valueRu: 'о', code: 'KeyJ', isSpecialSymbol: false },
    { itemEng: 'k', itemRu: 'л', valueEng: 'k', valueRu: 'л', code: 'KeyK', isSpecialSymbol: false },
    { itemEng: 'l', itemRu: 'д', valueEng: 'l', valueRu: 'д', code: 'KeyL', isSpecialSymbol: false },
    { itemEng: ';', itemRu: 'ж', valueEng: ';', valueRu: 'ж', code: 'Semicolon', isSpecialSymbol: false },
    { itemEng: '"', itemRu: 'э', valueEng: '"', valueRu: 'э', code: 'Quote', isSpecialSymbol: false },
    { itemEng: 'Enter', itemRu: 'Enter', valueEng: '', valueRu: '', code: 'Enter', isSpecialSymbol: true },
];

const fourthRowButtons = [
    { itemEng: 'Shift', itemRu: 'Shift', valueEng: '', valueRu: '', code: 'ShiftLeft', isSpecialSymbol: true },
    { itemEng: 'z', itemRu: 'я', valueEng: 'z', valueRu: 'я', code: 'KeyZ', isSpecialSymbol: false },
    { itemEng: 'x', itemRu: 'ч', valueEng: 'x', valueRu: 'ч', code: 'KeyX', isSpecialSymbol: false },
    { itemEng: 'c', itemRu: 'с', valueEng: 'c', valueRu: 'с', code: 'KeyC', isSpecialSymbol: false },
    { itemEng: 'v', itemRu: 'м', valueEng: 'v', valueRu: 'м', code: 'KeyV', isSpecialSymbol: false },
    { itemEng: 'b', itemRu: 'и', valueEng: 'b', valueRu: 'и', code: 'KeyB', isSpecialSymbol: false },
    { itemEng: 'n', itemRu: 'т', valueEng: 'n', valueRu: 'т', code: 'KeyN', isSpecialSymbol: false },
    { itemEng: 'm', itemRu: 'ь', valueEng: 'm', valueRu: 'ь', code: 'KeyM', isSpecialSymbol: false },
    { itemEng: ',', itemRu: 'б', valueEng: ',', valueRu: 'б', code: 'Comma', isSpecialSymbol: false },
    { itemEng: '.', itemRu: 'ю', valueEng: '.', valueRu: 'ю', code: 'Period', isSpecialSymbol: false },
    { itemEng: '/', itemRu: '.', valueEng: '/', valueRu: '.', code: 'Slash', isSpecialSymbol: false },
    { itemEng: '▲', itemRu: '▲', valueEng: '▲', valueRu: '▲', code: 'ArrowUp', isSpecialSymbol: true },
    { itemEng: 'Shift', itemRu: 'Shift', valueEng: '', valueRu: '', code: 'ShiftRight', isSpecialSymbol: true },
];

const fifthRowButtons = [
    { itemEng: 'Ctrl', itemRu: 'Ctrl', valueEng: '', valueRu: '', code: 'ControlLeft', isSpecialSymbol: true },
    { itemEng: 'Win', itemRu: 'Win', valueEng: '', valueRu: '', code: 'MetaLeft', isSpecialSymbol: true },
    { itemEng: 'Alt', itemRu: 'Alt', valueEng: '', valueRu: '', code: 'AltLeft', isSpecialSymbol: true },
    { itemEng: '', itemRu: '', valueEng: ' ', valueRu: ' ', code: 'Space', isSpecialSymbol: false },
    { itemEng: 'Alt', itemRu: 'Alt', valueEng: '', valueRu: '', code: 'AltRight', isSpecialSymbol: true },
    { itemEng: '◄', itemRu: '◄', valueEng: '◄', valueRu: '◄', code: 'ArrowLeft', isSpecialSymbol: true },
    { itemEng: '▼', itemRu: '▼', valueEng: '▼', valueRu: '▼', code: 'ArrowDown', isSpecialSymbol: true },
    { itemEng: '►', itemRu: '►', valueEng: '►', valueRu: '►', code: 'ArrowRight', isSpecialSymbol: true },
    { itemEng: 'En', itemRu: 'Ru', valueEng: '', valueRu: '', code: 'ControlRight', isSpecialSymbol: true },
];

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
        createElement("p", `letter-container letter-${letter}`, wordContainer);
    }

    const riddleContainer = createElement("p", "riddle-container", keyboardSection);
    riddleContainer.textContent = riddle[1];

    const guessesCounterContainer = createElement("p", "guesses-counter-container", keyboardSection);
    guessesCounterContainer.innerHTML = `Incorrect guesses: <span class="guesses-counter">0</span>/6`;

    const keyboard = createElement("div", "keyboard", keyboardSection);
    let lang = localStorage.getItem("lang");
    lang = lang == null ? "en" : lang;
    localStorage.setItem("lang", lang);
    fillKeyboard(keyboard, lang);
}

const fillKeyboard = (keyboard, lang) => {
    let keyboardRows = [firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons];

    for (let i = 0; i < 5; i++) {
        const keyboardRow = createElement("div", "keyboard-row", keyboard);
        keyboardRows[i].forEach(char => {
            const keyboardButton = createElement("button", `keyboard-button ${char.code}` + (char.isSpecialSymbol ? " keyboard-button-special" : ""), keyboardRow);
            keyboardButton.textContent = lang == "en" ? char.itemEng : char.itemRu;
        });
    }

    const langKey = document.querySelector(".ControlRight");
    langKey.addEventListener("click", changeLayout);

    document.addEventListener("keydown", (event) => {
        event.preventDefault();
        const key = document.querySelector(`.${event.code}`);
        key.classList.add("active");

        if (event.code == "ControlRight") {
            changeLayout();
        }
    });

    document.addEventListener("keyup", (event) => {
        const key = document.querySelector(`.${event.code}`);
        key.classList.remove("active");
    });
}

const createInstructionSection = () => {
    const instructionSection = createElement("section", "section instruction-section", main);
}

const createElement = (tag, className, parent) => {
    const element = document.createElement(tag);
    element.className = className;
    parent.appendChild(element);

    return element;
}

const changeLayout = () => {
    const keyboard = document.querySelector(".keyboard");
    keyboard.innerHTML = "";
    let lang = localStorage.getItem("lang");
    lang = lang == "en" ? "ru" : "en";
    localStorage.setItem("lang", lang);
    fillKeyboard(keyboard, lang);
}

const getRandomRiddle = async () => {
    const response = await fetch("resources/riddles.json");
    const riddles = await response.json();

    return riddles[Math.floor(Math.random() * riddles.length)];
}

createMain();
createGallowsSection();
createKeyboardSection();
createInstructionSection();