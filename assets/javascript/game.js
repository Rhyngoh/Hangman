var wordBank = ["roger", "scurvy", "eyepatch", "pirate", "captain", "buccaneer", "scallywag", "rum", "hemp", "rope", "sail", "bow", "monkey", "cannon", "freebooter", "landlubber", "blackjack", "davyjones", "ahoy", "matey", "booty", "treasure", "cutlass", "jollyroger", "oldsalt", "scuttle", "seadog", "plank", "dubloon", "pillage"];
var randomNumber = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[randomNumber];
var userGuess;
//multiple letters
var multiCorrectArr = [];
var multiCorrect = 0;
var indexMultiCorrect = wordBank.indexOf(userGuess);
var multiCorrectStr = "";
var blankSpacesUnder = "";
var duplicateLetters = "";
//var blankSpacesArrChanged ;
var guessedLetters = "";
var winLetters = 0;
//counter for number of wrong guesses
//counter = 6 for each limb
var counter = 6;
//hangman image
var hangmanImage = "<img src=" + "'assets/images/hangman" + counter + ".bmp'" + ">";

// --------- //

//Score and number of wins (# of times the user guessed the word correctly)
var score = 0;
function updateScore() {
		document.querySelector("#scoreboard").innerHTML = "Score: " + score;
}
//Start Button Press to begin game
//Choose a random word from from a wordbank
//Create a loop to make as many underlined spaces as the word length
function blankSpaces() {
	blankSpacesUnder = "";
	for (i=0;i<randomWord.length;i++){
		blankSpacesUnder += "<h3 class='moreBlankSpaces'>_ </h3>"
		document.querySelector(".pirateStart").innerHTML = blankSpacesUnder;
	console.log(randomWord);
	console.log(blankSpacesUnder);
	}
}
//if repeat, do function
//Function to change the underline to a letter
function changeWord(){
	for (i=0;i<randomWord.length;i++){
		if (userGuess === randomWord[i]) {
			var correctGuess = document.getElementsByClassName('moreBlankSpaces');
			correctGuess[i].innerHTML = userGuess;
			console.log("You've put an input" + correctGuess);
			winLetters++;
			console.log("win letters" + winLetters);
		}
		
	}
}
//Keep a counter of the number of attempts the user has made
//counter decreases for wrong answers, unchanged for correct answers
function numberAttempts(){
	document.querySelector("#numberAttempts").innerHTML = "Number of incorrect guesses remaining: " + counter;
}
//on keypress, do a function
//if correct, replace blank spaces with the keypress
//if incorrect, add letter to Letters already guessed section
//Decrement number of attempts by 1
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
	console.log(counter);
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
function winCondition(){
	if(winLetters === (randomWord.length)){
		alert("You barely escape death and sail off to safety");
		score++;
		//alert("Your score is: " + score);
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
document.onkeyup = function(event){
	//console.log(userGuess);
	//console.log(randomWord);
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("You typed " + userGuess);
	if (counter > 0) {
		if (randomWord.indexOf(userGuess) !== -1 && guessedLetters.indexOf(userGuess) === -1){
		 	//alert("THE WORD CONTAINS THIS LETTER");
		 	guessedLetters += userGuess;
		 	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
		 	console.log("guessed letters: " + guessedLetters);
		 	changeWord();
		 	winCondition();
		} else if (guessedLetters.indexOf(userGuess) !== -1) {
	 		alert("You've already guessed that letter you fool");
		} else {
		 	//alert("THE WORD DOES NOT CONTAIN THIS LETTER");
		 	guessedLetters += userGuess;
		 	document.querySelector("#lettersGuessed").innerHTML = ("Letters already guessed: " + guessedLetters + " ");
		 	counter--;
		 	console.log(counter);
		 	numberAttempts();
		 	updateHangman();
		 	console.log(counter);
		 	gameOver();
		 	console.log(guessedLetters);
	 	}
	}
	 
};

//Automatically start the game
//startGame();
updateScore(); //start game with 0 score
numberAttempts(); //start game with 6 counter

//Start button
document.getElementById("startbtn").onclick = function(){
	blankSpaces();
	console.log("Start Button Clicked");
};
//Reset Button
document.getElementById("resetbtn").onclick = function(){
	resetGame();
	console.log("Reset Button Clicked");
};