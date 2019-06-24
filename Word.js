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

var newWord = new Word("Right now, he's probably slow dancing With a bleached-blond tramp And she's probably getting frisky Right now, he's probably buying Her some fruity little drink 'Cause she can't shoot whiskey Right now, he's probably up behind her With a pool-stick Showing her how to shoot a combo And he don't know I dug my key into the side Of his pretty little souped-up four-wheel drive Carved my name into his leather seats I took a Louisville slugger to both head lights I slashed a hole in all four tires Maybe next time he'll think before he cheats Right now, she's probably up singing some White-trash version of Shania karaoke Right now, she's probably saying 'I'm drunk' And he's a-thinking that he's gonna get lucky Right now, he's probably Dabbing on three dollars Worth of that bathroom Polo Oh, and he don't know That I dug my key into the side Of his pretty little souped-up four-wheel drive Carved my name into his leather seats I took a Louisville slugger to both head lights I slashed a hole in all four tires Maybe next time he'll think before he cheats I might have saved a little trouble for the next girl 'Cause the next time that he cheats Oh, you know it won't be on me! No, not on me 'Cause I dug my key into the side Of his pretty little souped-up four-wheel drive Carved my name into his leather seats I took a Louisville slugger to both head lights I slashed a hole in all four tires Maybe next time he'll think before he cheats Oh, maybe next time he'll think before he cheats Oh, before he cheats Oh")

console.log(newWord.wordBreakdown);

module.exports = Word;
