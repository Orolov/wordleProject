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


    /**
     * Private method to update our current states for the user's guessed word
     * and whether the guess is correct
     */
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


    /**
     * Method to ensure updating our states
     * and determining whether our letter being passed through is in the correct position
     * and if it exists within the master word
     * @param {string} letter 
     */
    guess(letter) {
        this.#updateStates();
        let activeLetterIndex = this.#guessedWord.length;
        this.#guessedLetters[activeLetterIndex].guessLetter(letter, this.#correctWord);
        this.#updateStates();
    }


    /**
     * Getter method for our list that holds class objects of SingleLetters
     */
    get getGuessedLetter() {
        return this.#guessedLetters;
    }

    get getCorrectlyGuessed() {
        return this.#correctlyGuessed;
    }
}

export default SingleGuess;
