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
var wins = 0
var losses = 0
var guessLeft = 15

document.getElementById("winCount").textContent = wins;
document.getElementById("lossCount").textContent = losses;
document.getElementById("left").textContent = guessLeft

function startGame() {
	var display = "";
	var answer = possible.charAt(Math.floor(Math.random() * possible.length));
	console.log(answer);
}
startGame()
