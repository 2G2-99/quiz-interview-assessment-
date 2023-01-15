'use strict';

let startButton = document.querySelector('#start');

let timer = document.querySelector('#time');
timer.textContent = 60;

let user = {
	initials,
	score,
};

startButton.addEventListener('click', runTimer);

function runTimer() {
	let timeInterval = setInterval(function () {
		timeLeft--;
		timer.textContent = timeLeft;

		if (timeLeft <= 0 || quizEnded) {
			clearInterval(timeInterval);
			timer.textContent = 0;
			return showScreen(endScreen, questionsContainer);
		}
	}, 1000);
	initQuiz();
}

// #End of quiz (End screen)
const endScreen = document.querySelector('#end-screen');
let finalScore = document.querySelector('#score');
const scoreForm = document.querySelector('#score-form');
const initialsInput = document.querySelector('#initials');
const submitScore = document.querySelector('#submit-score');

function storeScore() {
	localStorage.setItem('user', JSON.stringify(user));
}

scoreForm.addEventListener('submit', event => {
	event.preventDefault();

	user.initials = initialsInput.value.trim();
	user.score = finalScore.textContent;

	if (initials === '') {
		return;
	}

	storeScore();

	user.initials = '';
	user.score = '';
	initialsInput.value = '';

	window.location.href = './highscores.html';
});
