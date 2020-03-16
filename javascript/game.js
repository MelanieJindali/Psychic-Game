// ![Psychic](Images/1-Psychic.jpg)

// 1. [Watch the demo](https://youtu.be/qTc45Lox97g).

// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).



var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessChoices = [];


var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


var userGuessText = document.getElementById("userguess-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var guessChoicesText = document.getElementById("guesschoices-text");
var guessesLeftText = document.getElementById("guessesleft-text")
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


document.onkeyup = function(event) {

var userGuess = event.key; 

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

   if (options.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins ++;
           numGuesses = 10;
           guessChoices = [];
       }

       if (userGuess !== computerGuess) {
           numGuesses --;
       }

       if (numGuesses === 0) {
        numGuesses = 10;
        losses ++;
    }    

       var guessChoices = [];           
       guessChoices.push(userGuess);

   }

  
   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   guessesLeftText.textContent = "Guesses left: " + numGuesses;
   guessChoicesText.textContent = "Guesses so far: " + userGuess;
  
}