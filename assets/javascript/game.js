var wordBank = ["roger", "pirate", "captain", "buccaneer", "scallywag", "rum", "hemp", "rope", "sail", "bow", "monkey", "cannon", "freebooter", "landlubber", "blackjack", "davyjones", "ahoy", "matey", "booty", "treasure", "cutlass", "jollyroger", "oldsalt", "scuttle", "seadog", "plank", "dubloon", "pillage"];
var randomNumber = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[randomNumber];
var blankSpacesLength = randomWord.length;
var blankSpacesArr = [];
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
function startGame(){
	var randomNumber = Math.floor(Math.random() * wordBank.length);
	var randomWord = wordBank[randomNumber];
	blankSpacesLength = randomWord.length;
	blankSpacesArr = [];
	for (i=0;i<blankSpacesLength;i++){
		blankSpacesArr.push("_ ");
		blankSpacesArr.join(" ");
		var blankSpacesArrString = blankSpacesArr.toString();
		var blankSpacesArrChanged = blankSpacesArrString.replace(/,/g," ");
		console.log(blankSpacesArrChanged);
		document.querySelector("#pirateStart").innerHTML = blankSpacesArrChanged;
		console.log(randomWord);
	}
	//console.log("----------");
	//console.log(randomWord);
}
//Reset Button Press to reset game and score
//clear the existing word and attempts
function resetGame() {
	document.querySelector("#pirateStart").innerHTML = "Another soul for Davy Jone's Locker!";
	counter = 6;	
}

//Keep a counter of the number of attempts the user has made
//counter decreases for wrong answers, unchanged for correct answers
function numberAttempts(){
	document.querySelector("#numberAttempts").innerHTML = "Number of guesses remaining: " + counter;
}
//on keypress, do a function
//if correct, replace blank spaces with the keypress
//if incorrect, add letter to Letters already guessed section
//Decrement number of attempts by 1
function updateHangman(){
	hangmanImage = "<img alt='Hangman Image' src=" + "'assets/images/hangman" + counter + ".bmp'" + ">";
	document.querySelector("#hangmanstart").innerHTML = hangmanImage;
}
document.onkeyup = function(event){
	//console.log(userGuess);
	//console.log(randomWord);
	if (counter === 0) {
		updateScore();
		return;
	}
	if (counter === 1) {
		updateScore();
		updateHangman();
	}
	if (counter === 2) {
		updateScore();
		updateHangman();
	}
	if (counter === 3) {
		updateScore();
		updateHangman();
	}
	if (counter === 4) {
		updateScore();
		updateHangman();
	}
	if (counter === 5) {
		updateScore();
		updateHangman();
	} 
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	for (i=0;i < randomWord.length;i++){
		if (userGuess === randomWord.charAt(i)){
			//reveal a letter or multiple letters that match
		} else {
			counter--;
		}
	}
};
	//
//Letters already guessed

//After word is solved, add +1 to score and a new word appears

//Automatically start the game
//startGame();
updateScore();

document.getElementById("startbtn").onclick = function(){
	startGame()
};
document.getElementById("resetbtn").onclick = function(){
	resetGame()
};