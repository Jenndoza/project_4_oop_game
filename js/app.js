/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase('Life is like a box of chocolates'); //Testing step 2 & 3


const game = new Game(); //Testing step 4 
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});