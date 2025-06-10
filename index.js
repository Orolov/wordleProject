import Guess from "./javascript/guess.js";

// Hardcoded the word to guess initially being hello
let userGuess = new Guess('hello');

window.userGuess = userGuess;





window.onload = (event) => {
    
    const table = document.getElementById('table');
    for (let i = 1; i <= 6; i++){
        const newRow = document.createElement('div');
        newRow.setAttribute('id', 'row'+i);
        newRow.setAttribute('class', 'row');
        for (let j = 1; j <= 5; j++){
            const newCell = document.createElement('div');
            newCell.setAttribute('id', 'cell'+j);
            newCell.setAttribute('class', 'cell');
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }

    const keyboard = document.getElementById('keyboard');

    const inputElement = document.getElementById('guessButton');
    inputElement.onclick = onGuessButtonClick;
};


function disableButton() {
    /** @type {HTMLButtonElement} */
    const guessButton = document.getElementById('guessButton');
    /** @type {HTMLInputElement} */
    const inputElement = document.getElementById('userInput');
    if (guessButton && inputElement) {
        guessButton.disabled = true;
        inputElement.disabled = true;
    }
}

function onGuessButtonClick() {
    /** @type {HTMLInputElement} */
    const userInput = document.getElementById('userInput');
    if (userInput && !userGuess.getCorrectlyGuessed) {
        userGuess.guess(userInput.value);
        if (userGuess.getCorrectlyGuessed) {
            disableButton();
        }
        userInput.value = '';
        const currentRow = document.getElementById('row'+userGuess.getGuessesLength);
        const currentGuess = userGuess.getGuesses[userGuess.getGuessesLength - 1]
        const guessLetters = currentGuess.getGuessedLetter
        if (currentRow) {
            for (let i = 0; i < 5; i++) {
                const letter = guessLetters[i].getGuessedLetter;
                const currentLetterElement = currentRow.children[i];
                currentLetterElement.innerText = letter;

                if (guessLetters[i].getCorrectPosition && guessLetters[i].getLetterExists) {
                    //green
                    currentLetterElement.setAttribute('class', 'cell green');



                    //   CHECK IF LETTER EXISTS ONLY ONCE FUNCTIONALITY 
                } else if (guessLetters[i].getLetterExists) {
                    //yellow
                    currentLetterElement.setAttribute('class', 'cell yellow');
                } else {
                    //gray
                    currentLetterElement.setAttribute('class', 'cell gray');
                }
            }
        }
    }
    if (userGuess.getGuessesLength >= userGuess.getMaxGuesses) {
        disableButton();
    }
}