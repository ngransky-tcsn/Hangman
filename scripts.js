const partialP = document.getElementById('partial');
const guessInput = document.getElementById('guess');
const guessesBox = document.getElementById('guessed');
const message = document.getElementById('message');

//Initialize variables
const word = "javascript";
let partial = [];
let guessed = [];
let attempts = 6;

// Create underscores for word in partial
for (let i = 0; i < word.length; i++) {
	partial.push('_');
}

// Updates the page with game information for each guess
function update() {
	partialP.innerText = '';
	guessesBox.innerText = '';
	message.innerText = '';

	document.getElementById('attempts').innerText = attempts;

	// Update partial word and guessed list
	for (letter in partial) {
		partialP.innerHTML += partial[letter] + '&nbsp;';
	}
	for (g in guessed) {
		guessesBox.innerHTML += guessed[g] + '&nbsp;';
	} 

	// Check if out of attempts
	if (attempts == 0) {
		message.innerText = 'Game over!'
		guessInput.disabled = true;
	}
	// Check if player won
	if (!partial.includes('_')) {
		message.innerText = 'You win!'
		guessInput.disabled = true;
	}
}

// Checks guess to see if already guessed and is in word. Then updates partial array.
// PARAMS: string guess
function check(guess) {
	// Checks if guess was already guessed
	if (guessed.includes(guess)) {
		message.innerText = 'You already guessed that letter!'
	} else {
		guessed.push(guess);
		// Checks if guess is in word
		if (word.includes(guess)) {
			// Update partial
			for (let i = 0; i < word.length; i++) {
				if (word[i] == guess) {
					partial[i] = word[i];
				}
			}
		} else {
			attempts--;
			document.getElementById('gallows').src = `Images/${6 - attempts}.png`;
		}
		update();
	}
}

update();

// Listen for input on input field, restrict to 1 char, and call check.
guessInput.addEventListener('input', event => {
	if (guessInput.value.length > 1) {
		guessInput.value = guessInput.value.slice(-1);
	}
	check(guessInput.value.toLowerCase());
});