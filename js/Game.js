/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game class and properties.
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Not quite"),
            new Phrase("Almost there"),
            new Phrase("Keep trying"),
            new Phrase("Super close"),
            new Phrase("Icy hot")
        ];
        this.activePhrase = null;
    } 
    //Method that selects & returns a random phrase from  array of phrases stored in the phrases property 
    getRandomPhrase() {
        const selectedPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[selectedPhrase];
    };
    //create a method that hides screed overlay 
    startGame(){
        const startOverlay = document.getElementById("overlay");
        startOverlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase()//call getRandomPhrase() by storing it in this.activePhrase 
        this.activePhrase.addPhraseToDisplay(); //adds the phrase to the gameboard
    };
   //checks for winning move through a return boolean
    checkForWin(){
        const hidden = document.querySelectorAll(".hide");
        console.log(hidden);
        console.log(hidden.length);
        if (hidden.length === 0){
            return true
        } else {
            return false
        }
    };
    //Ending the game after player has maxed out on missed properties
    removeLife(){
        const images = document.querySelectorAll("img");
            if (this.missed < 4){ 
                images[this.missed].src = "images/lostHeart.png";
                this.missed += 1;
            } else if (this.missed === 4) {
                this.gameOver(false);
                        }
    };

/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon){
        const endOverlay = document.getElementById("overlay");
        endOverlay.style.display = "";        
    //create an if-else statement that shows "you won", or "you lost"
        if (gameWon === true){
            document.getElementById("game-over-message").innerHTML = "Congratulations, you've won!";
            endOverlay.className = ("win");
        } else if (gameWon === false){
            document.getElementById("game-over-message").innerHTML = "That's not quite right, play again!";
            endOverlay.className = ("lose");
        }
    };

    handleInteraction(button){
        button.disabled = true;
        let key = button.innerText;
    //disable button once clicked
    if (this.activePhrase.checkLetter(key) === true){
        this.activePhrase.showMatchedLetter(key);
        button.classList.add("chosen");
        if (this.checkForWin() === true ){ 
            this.gameOver(true) 
        }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    };

    resetGame(){
        let buttons = document.querySelectorAll(".key")//selecting the class "key"
        const phrase = document.getElementById("phrase")//selecting the phrase 
        const ul = phrase.querySelector('ul'); //selecting the UL in phrase ID
        ul.innerHTML= "" // Clearing all of the UL elements 

    buttons.forEach(button => {
        button.classList.remove("chosen");
        button.classList.remove("wrong");
        button.classList.add("key");
        button.disabled = false;
    })
    console.log(buttons);

    const images = document.querySelectorAll("img");
    images.forEach (heart =>
        heart.src = "images/liveHeart.png"
        );
    };
};