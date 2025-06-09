import SingleLetter from "./letter.js";

class SingleGuess {
    #correctlyGuessed = false;
    #correctWord = "Hello"
    #guessedWord = ""
    /** @type {SingleLetter[]} */
    #guessedLetters = []

    /**
     * 
     * @param {string} correctWord The correct word for the current round
     */
    constructor(correctWord) {
        if (!(typeof correctWord === "string" && correctWord.length > 0)) {
            console.error("Correct word is not string or is an empty string:", correctWord);
            return;
        }
        this.#correctWord = correctWord.toUpperCase();
        for (let i = 0; i < this.#correctWord.length; i++) {
            const letter = new SingleLetter(this.#correctWord[i]);
            this.#guessedLetters.push(letter);
        }
    }

    #updateStates() {
        let guessedWord = "";
        for (let i = 0; i < this.#guessedLetters.length; i++) {
            guessedWord = guessedWord + this.#guessedLetters[i].getGuessedLetter;
        }
        this.#guessedWord = guessedWord.toUpperCase();
        if (this.#guessedWord === this.#correctWord) {
            this.#correctlyGuessed = true;
        }
    }

    guess(letter) {
        this.#updateStates();
        let activeLetterIndex = this.#guessedWord.length;
        this.#guessedLetters[activeLetterIndex].guessLetter(letter, this.#correctWord);
        this.#updateStates();
    }

    get getGuessedLetter() {
        return this.#guessedLetters;
    }
}

export default SingleGuess;
