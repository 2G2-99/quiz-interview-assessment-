// End of quiz (End screen)
const endScreenEl = document.querySelector('#end-screen');
let finalScoreEl = document.querySelector('#final-score');
const scoreForm = document.querySelector('#score-form');
let highscores = document.querySelector('#highscores');

let scores = [];

//function to end the quiz and render page to input initials
function endQuiz() {
	showScreen(endScreenEl, questionsContainerEl);
	console.log((finalScoreEl.textContent = timeLeft));
	return (finalScoreEl.textContent = timeLeft);
}

// Function to save submit of Final Score
function submitScore() {}
// Save on the Local Storage of the score
// localStorage.setItem('score', finalScoreEl);

// -------------------------------------------------------

// Function to retrieve scores from Local Storage
function init() {
	// Parsing the JSON into a String
	const savedScores = JSON.parse(localStorage.getItem('scores'));

	if (savedScores !== null) {
		scores = savedScores;
	}

	return renderHighscores();
}

// Function to render highscores
function renderHighscores() {
	// Clear the highscores list
	highscores.textContent = '';

	// Generate a new li for each Highscore
	for (let i = 0; i < scores.length; i++) {
		const score = scores[i];

		let li = document.createElement('li');
		li.textContent = score;
		li.setAttribute('data-index', i);

		highscores.appendChild(li);
	}
}

// Function to store the score
function storeScore() {
	localStorage.setItem('scores', JSON.stringify(scores));
}
