// #High scores
const viewScores = document.querySelector('.scores');
let highScoresEl = document.querySelector('#high-scores');

let scores = [];

init();

// Function to render highscores
function renderHighscores() {
	// Clear the highscores list
	highScoresEl.textContent = '';

	// Generate a new li for each Highscore
	for (let i = 0; i < scores.length; i++) {
		let li = document.createElement('li');
		li.textContent = `${scores[i].initials} - ${scores[i].score}`;
		li.setAttribute('data-index', i);

		highScoresEl.appendChild(li);
	}
}

// Function to retrieve scores from Local Storage
function init() {
	// Parsing the JSON into an Object
	const storedUser = JSON.parse(localStorage.getItem('user'));

	if (storedUser !== null) {
		scores.push(storedUser);
		scores.sort((a, b) => b.score - a.score);
	}

	// Save values of the storedUser object  properties
	let userInitials = storedUser.initials;
	let userScore = storedUser.score;

	localStorage.setItem('scores', JSON.stringify(scores));

	return renderHighscores();
}

// #Clear High Scores
let clearButtonEl = document.querySelector('#clear');

// Event listener to clear High Scores list
clearButtonEl.addEventListener('click', function () {
	localStorage.removeItem('scores');
	scores = [];
	renderHighscores();
});
