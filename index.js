// Constructor initialize
var Word = require("./word.js");
var inquirer = require("inquirer");

// Car Name Array
var carNames = ["Ford Model T", "Cadillac Type 51", "Ford V8", "Chrysler Airflow", "Willys Jeep", "Ford F-Series Pickup", "Chevrolet Tri-Five", "1959 Cadillac", "Chevrolet Corvette Stingray", "Shelby Cobra", "Jeep Wagoneer", "Ford Mustang", "Pontiac GTO", "Lincoln Continental Mark III", "AMC Gremlin", "Cadillac Eldorado", "Chrysler Town & Country", "Dodge Viper", "Ford GT", "Tesla Model S"];

var randomIndex = Math.floor(Math.random() * carNames.length);
var randomWord = carNames[randomIndex];

// Pass random word through Word constructor
computerWord = new Word(randomWord);

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter between A-Z!",
        name: "userinput"
    }
])