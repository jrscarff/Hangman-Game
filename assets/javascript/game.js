// var options = ["baseball","basketball","soccer","golf","tennis","football","goal","touchdown","win","loss","points","hit",];

// var word = options[Math.floor(Math.random() * options.length)];

// var answer = [];

// var display = "";

// var incorrects = [];

// for (var i = 0; i < word.length; i++) {
	// answer.push(word[i]); };

// for (var i = 0; i < word.length; i++) {
	// display = display + "_";};

// console.log(display);
// document.getElementById("holder").innerHTML = display;
// console.log(answer);

// function loadGame() {
//	document.onkeyup = function(event) {
//		userInput = event.key;
//			for (var i = 0; i < answer.length; i++) {
//				if (userInput === answer[i]) {
//					display[i] = answer[i];
//					console.log(display[i]);}}}}
var possible = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessLeft = 10;
var display = "";

document.getElementById("winCount").textContent = wins;
document.getElementById("lossCount").textContent = losses;
document.getElementById("left").textContent = guessLeft

function startGame() {
	var answer = possible.charAt(Math.floor(Math.random() * possible.length));
	console.log(answer);
	document.onkeyup = function(event) {
		userInput = event.key;
		if (userInput === answer) {
			alert("You have guessed correctly!");
			wins ++;
			document.getElementById("winCount").textContent = wins;
		}
		else if (alreadyCheck(userInput)) {

		} 
		else {
			guessCount(userInput)
		}
		if (guessLeft === 0) {
			alert("You Lost");
			losses ++;
			document.getElementById("lossCount").textContent = losses;
		}
	}
}



function userWins () {
	alert("You have guessed correctly!");
	wins ++;
}
function guessCount (event) {
	console.log(event); 
		guessLeft --;
		display = display + event + ",";
		document.getElementById("left").textContent = guessLeft;
		document.getElementById("already").textContent = display;
}
function alreadyCheck (event) {
	for (var i = 0; i < display.length; i++) {
		if (display[i] === event) {
			return true;
		}
	}
}
startGame()
