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
// # Elements

let nQuestion = document.createElement('h2');
let enunciate = document.createElement('p');
let answersList = document.createElement('ol');
let answers = document.createElement('li');
