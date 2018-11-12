const partialP = document.getElementById('partial');
const guessInput = document.getElementById('guess');
const guessBox = document.getElementById('guesses');

const word = "javascript";
let partial = [];
let guessed = [];
let attempts = 0;

for (let i = 0; i < word.length; i ++) {
	partial.push('_'); 
}

function check(guess) {
	console.log(guess);
}

guessInput.addEventListener('input', event => {
	if (guessInput.value.length > 1) {
		guessInput.value = guessInput.value.slice(-1);
	}
	check(guessInput.value.toLowerCase());
});