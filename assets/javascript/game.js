var wordBank = ["roger", "pirate", "captain", "buccaneer", "scallywag", "rum", "hemp", "rope", "sail", "bow", "monkey", "cannon", "freebooter", "landlubber", "blackjack", "davyjones", "ahoy", "matey", "booty", "treasure", "cutlass", "jollyroger", "oldsalt", "scuttle", "seadog", "plank", "dubloon", "pillage"];
var randomNumber = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[randomNumber];
var blankSpacesLength = randomWord.length;
var blankSpacesArr = [];
// --------- //
function startGame() {
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
}
function resetGame() {
	document.querySelector("#pirateStart").innerHTML = "Another soul for Davy Jone's Locker!";
	
}
function numberAttempts(){
	document.querySelector("#numberAttempts").innerHTML = "Number of guesses remaining: " + counter
}
document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	console.log(randomWord);
}