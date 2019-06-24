// function to take array item & convert letters to underscores to create underlying charactor

// function to covert letter guessed to boolean "true" or "false"

// function to return whether letter has been guessed or replace underscore with correct underlying letter

// function that takes charactors as arguements & checks against underlying charactor while updating boolean value

//**HINT** this file should not require any other files

function Letter (letter) {
    this.letter = letter;
    this.guess = false;
};

Letter.prototype.underlying = function() {
    if (this.guess === true) {
        return this.letter
    } else {return "_"}
};

Letter.prototype.check = function (guess) {
    if (this.letter === guess){
        this.guess = true 
    } 
};

module.exports = Letter;