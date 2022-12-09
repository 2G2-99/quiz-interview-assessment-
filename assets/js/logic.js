'use strict';
// # Logical variables
// answered;
// # Elements
let startBtn = document.querySelector('#start');
let timer = document.querySelector('#time');
timer.textContent = 60;

// # Event listener for start button
startBtn.addEventListener('click', startTimer);

function startTimer() {
	let timeInterval = setInterval(function () {
		if (!timeLeft) {
			clearInterval(timeInterval);
			timer.textContent = 0;
		} else {
			timer.textContent = timeLeft;
			timeLeft--;
		}
	}, 1000);

	// Invoking showQuestion
	showQuestion();
}
