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

// #End of quiz (End screen)
const endScreenEl = document.querySelector('#end-screen');
let finalScoreEl = document.querySelector('#score');
const scoreFormEl = document.querySelector('#score-form');
const initialsInput = document.querySelector('#initials');
const submitScoreEL = document.querySelector('#submit-score');
// Array to save scores
let user = {
	initials,
	score,
};

//function to end the quiz and render page to input initials
function endQuiz() {
	showScreen(endScreenEl, questionsContainerEl);
	console.log((finalScoreEl.textContent = timeLeft));
	return (finalScoreEl.textContent = timeLeft);
}

// Store user info into the Local Storage
function storeScore() {
	// Stringify the user info
	localStorage.setItem('user', JSON.stringify(user));
}

// Event listener to save user score on the Local Storage
scoreFormEl.addEventListener('submit', event => {
	event.preventDefault();

	// Update user info
	user.initials = initialsInput.value.trim();
	user.score = finalScoreEl.textContent;

	// Exit function if input is empty
	if (initials === '') {
		return;
	}

	// Invoke storeScore
	storeScore();

	// Set user info and initials to default
	user.initials = '';
	user.score = '';
	initialsInput.value = '';

	// Redirect to high scores page
	window.location.href = '../../highscores.html';
});

// -------------------------------------------------------
