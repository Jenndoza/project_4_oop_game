/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
       this.phrase = phrase.toLowerCase();//representing actual phrase
    }

    //display phrase on game board
    addPhraseToDisplay (){
        let phrase = document.getElementById("phrase"); 
        let ul = phrase.querySelector("ul"); //select the ul in the html to hide characters
        //use a for loop to loop around each letter for an attempt 
        for (let i=0; i<this.phrase.length; i++){ 
            if (this.phrase[i] !== " "){ 
                ul.innerHTML += `<li class="hide letter">${this.phrase[i]}</li>`
            } else {
                ul.innerHTML += `<li class="space">${this.phrase[i]}</li>`
            } 
        }
        return this.phrase;
    };
    
    checkLetter(letter){
        if (this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        };
    };

    showMatchedLetter(letter){
        let revealLetter = document.querySelectorAll("li"); 
        // console.log("revealLetter: ", revealLetter);
        //creating a for loop that iterates over the letters to see if the letter matches one of the phrases by using attributes
        for (let i=0; i<revealLetter.length; i++){
            if (revealLetter[i].textContent === letter){
                revealLetter[i].classList.add("show");
                revealLetter[i].classList.remove("hide");
            }
        };

    };
};
