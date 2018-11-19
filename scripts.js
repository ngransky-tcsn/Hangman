const partialP = document.getElementById('partial');
const guessInput = document.getElementById('guess');
const guessesBox = document.getElementById('guessed');

const word = "javascript";
let partial = [];
let guessed = [];
let attempts = 0;

for (let i = 0; i < word.length; i++) {
	partial.push('_');
}

function update() {
	partialP.innerText = '';
	guessesBox.innerText = '';
	for (letter in partial) {
		partialP.innerHTML += partial[letter] + '&nbsp;';
	}
	for (g in guessed) {
		guessesBox.innerHTML += guessed[g] + '&nbsp;';
	} 
	if (attempts == 6) {
		console.log('Game over!');
		guessInput.disabled = true;
	}
	if (!partial.includes('_')) {
		console.log('You win!');
		guessInput.disabled = true;
	}
}

function check(guess) {
	if (guessed.includes(guess)) {
		console.log("You already guessed that letter!");
	} else {
		guessed.push(guess);

		if (word.includes(guess)) {
			for (let i = 0; i < word.length; i++) {
				if (word[i] == guess) {
					partial[i] = word[i];
				}
			}
		} else {
			attempts++;
		}
		update();
	}
}

guessInput.addEventListener('input', event => {
	if (guessInput.value.length > 1) {
		guessInput.value = guessInput.value.slice(-1);
	}
	check(guessInput.value.toLowerCase());
});