function loadGame() {

var options = ["baseball","basketball","soccer","golf","tennis","football","goal","touchdown","win","loss","points","hit",];

var word = options[Math.floor(Math.random() * options.length)];

var answer = [];

var display = [];

var incorrects = [];

var left = 5;

var wins = 0;

var losses = 0;

for (var i = 0; i < word.length; i++) {
	answer.push(word[i]); };

for (var i = 0; i < word.length; i++) {
	display.push("_");};


console.log(answer);
document.getElementById("holder").innerHTML = display.join(" ");
document.getElementById("left").textContent = left;
document.getElementById("winCount").textContent = wins;
document.getElementById("lossCount").textContent = losses;



	document.onkeyup = function(event) {
		if (answer.join(" ") === display.join(" ")) {
				userWins();
				document.getElementById("wrong").textContent = answer.join(" ");
				resetGame();
			}

			if (left === 0) {
				userLoses();
				document.getElementById("wrong").textContent = answer.join(" ");
				resetGame();
			}

		userInput = event.key;

		replaceLetter(userInput);
			
			
			if (checkIncorrects(userInput)) {
				incorrects.push(userInput);
				left --;
			}
			
			


			document.getElementById("holder").innerHTML = display.join(" ");
			document.getElementById("already").innerHTML = incorrects.join(" ");
			document.getElementById("left").textContent = left;
			document.getElementById("winCount").textContent = wins;
			document.getElementById("lossCount").textContent = losses;
		}

		function resetGame() {
			options = ["baseball","basketball","soccer","golf","tennis","football","goal","touchdown","win","loss","points","hit",];

			word = options[Math.floor(Math.random() * options.length)];

			answer = [];

			display = [];

			incorrects = [];

			left = 5;

			for (var i = 0; i < word.length; i++) {
				answer.push(word[i]); };

			for (var i = 0; i < word.length; i++) {
				display.push("_");};


			console.log(answer);
			document.getElementById("holder").innerHTML = display.join(" ");
			document.getElementById("left").textContent = left;
			document.getElementById("winCount").textContent = wins;
			document.getElementById("lossCount").textContent = losses;
		} 

		function checkIncorrects (userInput) {
		for (var i = 0; i < answer.length; i++) {
				if (userInput === answer[i]) {
					display[i] = answer[i];
					return false
				}
				
			}
		for (var i = 0; i < incorrects.length; i++) {
			if (incorrects[i] === userInput) {
				return false;
			}
		}
		return true;
}

function replaceLetter (userInput) {
	for (var i = 0; i < answer.length; i++) {
				if (userInput === answer[i]) {
					display[i] = answer[i];
				}
				
			}
}

function userWins () {
	wins ++;
}

function userLoses () {
	losses ++;
}
	}

function test () {
	var str = "world";
	var n = str.includes("z");
	console.log(n);
}



test()
