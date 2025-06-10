import SingleLetter from "./letter.js";
import SingleGuess from "./singleguess.js";

class Guess {
    /** @type {SingleGuess[]} */
    #guesses = [];

    /** @type {string[]} */
    #wrongLetters = [];

    /** @type {string[]} */
    #correctLetters = [];
    #correctWord = "";
    #correctlyGuessed = false;
    #maxGuesses = 6;

    /** @param {string}  */
    constructor(correctWord){
        this.#correctWord = correctWord.toUpperCase();
    }

    /**
     * 
     * @param {string} word 
     * @returns 
     */
    guess(word = "") {
        if (this.#correctlyGuessed) {
            console.log("You have won the game!");
            return;
        }
        if (this.#guesses.length > this.#maxGuesses) {
            console.log("Game Ended")
            return;
        }
        if (word.length !== this.#correctWord.length ) {
            console.log("Not enough letters", word)
            return;
        }
        const newGuess = new SingleGuess(this.#correctWord);
        for(let i = 0; i < word.length; i++) {
            newGuess.guess(word[i])
        }
        this.#guesses.push(newGuess);
        this.#updateUsedLetters();
        
        this.#correctlyGuessed = newGuess.getCorrectlyGuessed;
        if (this.#correctlyGuessed) {
            console.log("You have won the game!");
            return;
        }
    }

    /**
     * Private method to update our list of correct/wrong letters from the user's guesses
     */
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

    get getGuessesLength() {
        return this.#guesses.length;
    }

    get getGuesses() {
        return this.#guesses;
    }

    get getCorrectlyGuessed() {
        return this.#correctlyGuessed;
    }

    get getMaxGuesses() {
        return this.#maxGuesses;
    }

}

export default Guess;