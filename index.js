import Guess from "./javascript/guess.js";

let userGuess = new Guess('hello');

window.userGuess = userGuess;





window.onload = (event) => {
    
    const table = document.getElementById('table');
    for (let i = 1; i <= 6; i++){
        const newRow = document.createElement('div');
        newRow.setAttribute('id', 'row'+i);
        newRow.setAttribute('class', 'row');
        for (let j = 1; j <= 6; j++){
            const newCell = document.createElement('div');
            newCell.setAttribute('id', 'cell'+j);
            newCell.setAttribute('class', 'cell');
            newRow.appendChild(newCell);
        }
        table.appendChild(newRow);
    }

    const keyboard = document.getElementById('keyboard');

};

/*
function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}

document.addEventListener('keydown', event => {
    console.log(event);
    if (isLetter(event.key) && (userGuess.guess.length < userGuess.maxSize)) {
        userGuess.guess += event.key;
    }
    
    if (event.key === 'Backspace') {
        userGuess.guess = userGuess.guess.slice(0, -1);
    }
});*/