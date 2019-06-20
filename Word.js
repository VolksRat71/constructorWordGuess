// function to take letters from underlying word and make an individual letter array

//// function that returns a string representing the word. This should call the function
// on each letter object (the first function defined in `Letter.js`) that displays the 
//character or an underscore and concatenate those together.

////function that takes a character as an argument and calls the guess function on each 
//letter object (the second function defined in `Letter.js`)

//**Hint** THis file should only require "Letter.js"

var Letter = require("./Letter.js");

function Word (word){
    this.word = word;
    this.wordBreakdown = this.pushArr(word);
}

Word.prototype.pushArr = function (word){
    var wordArr = [];
    for (i = 0; i < word.length; i++){
        wordArr.push(new Letter(word[i]))
    }
    return wordArr;
};

var newWord = new Word("chevy")

console.log(newWord.wordBreakdown);
