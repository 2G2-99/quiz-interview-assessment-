'use strict';

let startButton = document.querySelector('#start');

let timer = document.querySelector('#time');
timer.textContent = 90;

let user = {
	initials: '',
	score: 0,
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

function storeScoreOf(user) {
	const highScoresString = localStorage.getItem('highScoresList');
	let highScores = JSON.parse(highScoresString) ?? [];
	highScores.push(user);
	highScores.sort((a, b) => b.score - a.score);
	localStorage.setItem('highScoresList', JSON.stringify(highScores));
}

scoreForm.addEventListener('submit', event => {
	event.preventDefault();
	user.initials = initialsInput.value.trim();
	user.score = finalScore.textContent;
	if (user.initials === '' || user['initials'].length === 0) {
		alert('Please, enter your initials');
		return;
	} else {
		storeScoreOf(user);
		user.initials = '';
		user.score = 0;
		initialsInput.value = '';
	}

	window.location.href = './highscores.html';
});
