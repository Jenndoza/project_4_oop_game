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
}


//This method selects and returns a random phrase from the array of phrases stored in the phrases property above.
getRandomPhrase() {
    const selectedPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[selectedPhrase];
};
