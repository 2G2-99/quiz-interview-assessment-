// #High scores
let highScoresEl = document.querySelector('#high-scores');
let storedHighScores = JSON.parse(localStorage.getItem('highScoresList'));

function renderHighscores() {
	highScoresEl.textContent = '';
	if (storedHighScores !== null) {
		for (let i = 0; i < storedHighScores.length; i++) {
			let li = document.createElement('li');
			li.textContent = `${storedHighScores[i].initials} - ${storedHighScores[i].score}`;
			li.setAttribute('data-index', i);
			highScoresEl.appendChild(li);
		}
	}
}

// #Clear High Scores
let clearButtonEl = document.querySelector('#clear');

clearButtonEl.addEventListener('click', function () {
	localStorage.removeItem('highScoresList');
	storedHighScores = [];
	renderHighscores();
});

renderHighscores();
