import SingleGuess from "./singleguess.js";

class Guess {
    /** @type {SingleGuess[]} */
    #guesses = [];
    #wrongLetters = [];
    #correctLetters = [];
    #correctWord = "";
    #maxGuesses = 6;

    /** @param {string}  */
    constructor(correctWord){
        this.#correctWord = correctWord.toUpperCase();
    }

    guess(word = "") {
        if (this.#guesses.length > this.#maxGuesses) {
            console.log("Game Ended")
            return;
        }
        if (word.length !== this.#correctWord.length ) {
            console.log("Not enough letters")
            return;
        }
        const newGuess = new SingleGuess(this.#correctWord);
        for(let i = 0; i < word.length; i++) {
            newGuess.guess(word[i])
        }
        this.#guesses.push(newGuess);
        this.#updateUsedLetters();
    }

    #updateUsedLetters() {
        for (let i = 0; i < this.#guesses.length; i++) {
            const guessedLetters = this.#guesses[i].getGuessedLetter;
            console.log(guessedLetters);
            for (let j = 0; j < guessedLetters.length; j++) {
                if (guessedLetters[j].getLetterExists) {
                    this.#correctLetters.push(guessedLetters[j].getGuessedLetter);
                } else {
                    this.#wrongLetters.push(guessedLetters[j].getGuessedLetter);
                }
            }
        }
    }
}

export default Guess;