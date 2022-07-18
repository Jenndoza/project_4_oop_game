/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase('Life is like a box of chocolates'); //Testing step 2 & 3


//const game = new Game(); //Testing step 4 
//game.phrases.forEach((phrase, index) => {
//console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//});

//Testing step 5 code
//const logPhrase = (phrase) => {
 //   console.log(`Phrase - phrase: `, phrase.phrase);
 //   };
 //   const game = new Game();
 //  logPhrase(game.getRandomPhrase());
 //  logPhrase(game.getRandomPhrase());
 //  logPhrase(game.getRandomPhrase());
 //  logPhrase(game.getRandomPhrase());
 //  logPhrase(game.getRandomPhrase());

 //Testing step 6
    // const game = new Game(); 
    // game.phrases.forEach((phrase, index) => { 
    //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
    // });

 //Testing that code works in step 5 - to get the random phrase
    // const logPhrase = (phrase) => { 
    //     console.log(`Phrase - phrase: `, phrase.phrase); 
    //     }; 
    //     const game = new Game(); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase());
    
//testing addPhraseToDisplay()
    // const game = new Game(); 
    // const randomPhrase = game.getRandomPhrase(); 
    // const phrase = new Phrase(randomPhrase.phrase); 
    // phrase.addPhraseToDisplay();

//testing startGame() method:
    // const game = new Game(); 
    // game.startGame(); 
    // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);   

//adding event listener for keyboard buttons
var game;
const startButton = document.getElementById("btn__reset");
startButton.addEventListener( "click", function() {
    game = new Game;    //use game variable to instantiate a new Game object
    game.resetGame();
    game.startGame(); //call the startGame method with new game to start

});

//another event listener 
const qwerty = document.getElementById("qwerty");
qwerty.addEventListener( "click", (e) => {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target);
    }
}
);    