//An array of possible words
var wordBank = ["roger", "scurvy", "eyepatch", "pirate", "captain", "buccaneer", "scallywag", "rum", "hemp", "rope", "sail", "bow", "monkey", "cannon", "freebooter", "landlubber", "blackjack", "davyjones", "ahoy", "matey", "booty", "treasure", "cutlass", "jollyroger", "oldsalt", "scuttle", "seadog", "plank", "dubloon", "pillage"];
//Create a random number
var randomNumber = Math.floor(Math.random() * wordBank.length);
//Using the random number, choose a random word from the array of possible words
var randomWord = wordBank[randomNumber];
//Stores your key input
var userGuess;
//Blank space variable
var blankSpacesUnder = "";
//Stores the guessed letters into a string
var guessedLetters = "";
//How many guesses are correct
var winLetters = 0;
//counter for number of wrong guesses
var counter = 6;
//hangman image
var hangmanImage = "<img src=" + "'assets/images/hangman" + counter + ".bmp'" + ">";
//Score and number of wins (# of times the user guessed the word correctly)
var score = 0;
// =========== //

//Updates the score after every win
function updateScore() {
		document.querySelector("#scoreboard").innerHTML = "Score: " + score;
}
//Create a loop to make as many underlined (blank) spaces as the word length
function blankSpaces() {
	blankSpacesUnder = "";
	for (var i=0;i<randomWord.length;i++){
		blankSpacesUnder += "<h3 class='moreBlankSpaces'>_ </h3>"
		document.querySelector(".pirateStart").innerHTML = blankSpacesUnder;
	}
}
//Function to change the underline to a letter
//Compare keypress to each letter of the random word
function changeWord(){
	for (var i=0;i<randomWord.length;i++){
		if (userGuess === randomWord[i]) {
			var correctGuess = document.getElementsByClassName('moreBlankSpaces');
			correctGuess[i].innerHTML = userGuess;
			winLetters++;
		}
		
	}
}
//Keep a counter of the number of attempts the user has made
//counter decreases for wrong answers, unchanged for correct answers
function numberAttempts(){
	document.querySelector("#numberAttempts").innerHTML = "Number of incorrect guesses remaining: " + counter;
}
//Change the hangman image after every incorrect guess
function updateHangman(){
	hangmanImage = "<img alt='Hangman Image' src=" + "'assets/images/hangman" + counter + ".bmp'" + ">";
	document.querySelector("#hangmanstart").innerHTML = hangmanImage;
}
//Reset Button Press to reset game and score
//clear the existing word and attempts
//reset counter to 6
function resetGame() {
	randomNumber = Math.floor(Math.random() * wordBank.length);
	randomWord = wordBank[randomNumber];
	if (counter > 0){
		document.querySelector(".pirateStart").innerHTML = "Another soul for Davy Jone's Locker!";
	} else if (counter === 0) {
		document.querySelector(".pirateStart").innerHTML = "Arrr another landlubber challenges Davy Jones!";
	}	
	counter = 6;
	score = 0;
	updateScore();
	numberAttempts();	
	updateHangman();
	guessedLetters = "";
	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + " ");
	winLetters = 0;
}
//Win condition
//winLetters to calculate when word is solved
//confirm if you want to play again
function winCondition(){
	if(winLetters === (randomWord.length)){
		alert("You barely escape death and sail off to safety");
		score++;
		updateScore();
		var faceAgain = confirm("Do you want to challenge Davy Jones in another game of Pirate Hangman?");
		if (faceAgain == true){
			alert("You venture back into the fog where you once again find yourself confronting Davy Jones. Take arms!");
			continueGame();
		} else {
			alert("There's no shame in backing off. Continue when you come back.");
			continueGame();
		}
	}
}
//continue the game and keep score
function continueGame(){
	randomNumber = Math.floor(Math.random() * wordBank.length);
	randomWord = wordBank[randomNumber];
	blankSpaces();
	counter = 6;
	numberAttempts();
	updateHangman();
	guessedLetters = "";
	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
	winLetters = 0;
}
//Game Over text
function gameOver() {
	if (counter === 0){
		alert("Game Over! Your dinghy has sunk! Welcome to Davy Jone's Locker!");
		counter = 6;
		numberAttempts();
		updateHangman();
		guessedLetters = "";
		document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
		winLetters = 0;
		document.querySelector(".pirateStart").innerHTML = "Yer soul be trapped in Davy Jone's Locker! Press Start Game to play again.";
	}
}
//On key press
//if correct, replace blank spaces with the keypress
//if incorrect, add letter to Letters already guessed section
//Decrement number of attempts by 1
	document.onkeyup = function(event){
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		if (counter > 0) {
			if (randomWord.indexOf(userGuess) !== -1 && guessedLetters.indexOf(userGuess) === -1){
			 	guessedLetters += userGuess;
			 	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
			 	changeWord();
			 	winCondition();
			} else if (guessedLetters.indexOf(userGuess) !== -1) {
		 		alert("You've already guessed that letter you fool");
			} else {
			 	guessedLetters += userGuess;
			 	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
			 	counter--;
			 	numberAttempts();
			 	updateHangman();
			 	gameOver();
		 	}
		}
	};	

updateScore(); //start game with 0 score
numberAttempts(); //start game with 6 counter
//Start button
document.getElementById("startbtn").onclick = function(){
	blankSpaces();
	
};
//Reset Button
document.getElementById("resetbtn").onclick = function(){
	resetGame();
};