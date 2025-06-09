class SingleLetter {
    #letterExists = false
    #correctPosition = false
    #correctLetter = ""
    #guessedletter = ""

    /**
     * Create a single letter traker object
     * @param {string} correctLetter 
     */
    constructor(correctLetter) {
        this.#correctLetter = correctLetter;
    }

    /**
     * Pass in the letter the user guessed. It will update all the states.
     * @param {string} letter user guessed letter
     * @param {string} word  correct word
     */
    guessLetter(letter, word) {
        this.#guessedletter = letter.toUpperCase();
        if (this.#correctLetter === this.#guessedletter) {
            this.#correctPosition = true;
        }

        if (word.includes(this.#guessedletter)){
            this.#letterExists = true;
        }
    }

    get getLetterExists() {
        return this.#letterExists;
    }

    get getCorrectPosition() {
        return this.#correctPosition;
    }

    get getCorrectLetter() {
        return this.#correctLetter;
    }

    get getGuessedLetter() {
        return this.#guessedletter;
    }
}

export default SingleLetter;