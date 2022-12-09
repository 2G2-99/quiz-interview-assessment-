/**
 * #Pesudocode
 *  startBtn element
 * 	timer element = 3 minutes
 * 	h2 element for question N
 * 	p element for enunciate of question
 * 	ol element answersList
 * 	li elements answers children of answersList
 *
 * 	* addEventListener for click over startBtn
 *
 * 	function startTimer () {
 * 		timeLeft = 3 minutes
 * 
 *		timeInterval = setInterval (function () {
		if (!timeLeft) {
			endGame()
			request name to hold with final score()
		} else {
		timeLeft--
		}
	 }, 1000ms)
 * 	}
 *
 * 	* 
 */

'use strict';
// # Logical variables
// answered;
// # Elements
let startBtn = document.querySelector('#start');
let timer = document.querySelector('#time');
timer.textContent = 90;

// # Event listener for start button
startBtn.addEventListener('click', startTimer);

function startTimer() {
	// ! Remember to change to 90
	var timeLeft = 90;

	var timeInterval = setInterval(function () {
		if (!timeLeft) {
			clearInterval(timeInterval);
			timer.textContent = 0;
		} else {
			timer.textContent = timeLeft;
			timeLeft--;
		}
	}, 1000);

	// Invoking insertQuestion
	showQuestion();
}

// console.log(`answered is not ${!answered}`);
