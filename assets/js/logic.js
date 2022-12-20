'use strict';
// # Logical variables
// answered;
// # Elements
let startBtn = document.querySelector('#start');
let timer = document.querySelector('#time');
timer.textContent = 60;

// # Event listener for start button
startBtn.addEventListener('click', runTimer);

function runTimer() {
	let timeInterval = setInterval(function () {
		timeLeft--;
		timer.textContent = timeLeft;

		if (!timeLeft) {
			clearInterval(timeInterval);
			timer.textContent = 0;
			return showScreen(endScreenEl, questionsContainerEl);
		} else if (runningQuestionIndex === lastQuestionIndex) {
			clearInterval(timeInterval);
			endQuiz();
		}
	}, 1000);

	// Invoking showScreen
	showScreen(questionsContainerEl, startScreenEl);
}
