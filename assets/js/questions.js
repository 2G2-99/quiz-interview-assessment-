/**
 * #Pesudocode
 *  startBtn element
 * 	timer element = 3 minutes
 * 	h2 element for question N
 * 	p element for enunciate of question
 * 	ol element choicesList
 * 	li elements answers children of choicesList
 *	array holding question objects
 * 	* addEventListener for click over startBtn
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
 * 	* Create a function to clear out the HTML
 * 	function clearPage () {
 * 		document.body.textContent = ''
 * 		
 * 	}
 * 	
 * 	* Create a function to start to append the elements of the question
 * 	function insertQuestion () {
 * 		for (const i of questionsArr) {
	 		question = questionsArr[i]
			
			#questions.textContent = question
 		}
 * 	}
 * 
 * 	
 */

'use strict';
// # Logical variables
let answered = false;

// # Elements
let enunciate = document.querySelector('#question-title');
let choicesList = document.createElement('ol');
const newEl = element => document.createElement(element);

//  Array of questions objects
let questionsArr = [
	{
		question: 'HTML stands for...',
		answers: {
			a: 'Higher Textual Markup Language',
			b: 'Hypo Tiny Mini Limitation',
			c: 'Hyper Text Markup Language',
			d: 'Not sure',
		},
		correctAnswer() {
			return this.answers.c;
		},
	},
	{
		question: 'To start a form you need a ... tag',
		answers: {
			a: 'form',
			b: 'div',
			c: 'heading',
			d: 'input',
		},
		correctAnswer() {
			return this.answers.a;
		},
	},
	{
		question:
			'While CSS gives a style, HTML an structure, JavaScript gives ...',
		answers: {
			a: 'Potential',
			b: 'Intuition',
			c: 'Interactivity',
			d: 'Internet',
		},
		correctAnswer() {
			return this.answers.c;
		},
	},
	{
		question: 'How many data types exist on JavaScript',
		answers: {
			a: '8',
			b: '2',
			c: '10',
			d: '7',
		},
		correctAnswer() {
			return this.answers.a;
		},
	},
	{
		question: 'Which of these is not a primitive value',
		answers: {
			a: 'BigInt',
			b: 'String',
			c: 'Undefined',
			d: 'Object',
		},
		correctAnswer() {
			return this.answers.d;
		},
	},
];

// Function to hide the start-screen and show the question
function insertQuestion() {
	let startScreenEl = document.querySelector('#start-screen');
	let questionsContainerEl = document.querySelector('#questions');

	// Conditional to check if start-screen is hidden and question is not
	if (
		questionsContainerEl.classList.contains('hide') &&
		!startScreenEl.classList.contains('hide')
	) {
		startScreenEl.classList.toggle('hide');
		questionsContainerEl.classList.toggle('hide');
	}

	let choicesEl = document.querySelector('#choices');
	choicesEl.appendChild(choicesList);
	choicesList.classList.add('choices-list');

	// Iteration to insert enunciate and answers
	let i = 0;
	const question = questionsArr[i].question;
	do {
		enunciate.textContent = question;

		const answersEntries = Object.entries(questionsArr[i].answers);
		for (const [key, value] of answersEntries) {
			let choice = newEl('button');
			choice.textContent = `${key.toUpperCase()}: ${value}`;
			choicesList.appendChild(choice);
		}

		i++;
	} while ((answered = false));
}

// #Testing Area
insertQuestion();
