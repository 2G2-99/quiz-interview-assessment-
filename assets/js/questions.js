/**
 * #Pesudocode
 *  startBtn element
 * 	timer element = 3 minutes
 * 	h2 element for question N
 * 	p element for questionTitleEl of question
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
			b: 'Interactivity',
			c: 'Intuition',
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
//----------------------------

// # Logical variables
// Variables of the index
let lastQuestionIndex = questionsArr.length - 1;
let runningQuestionIndex = 0;
let answered = true;

// # Elements
let startScreenEl = document.querySelector('#start-screen');
let questionsContainerEl = document.querySelector('#questions');
let questionTitleEl = document.querySelector('#question-title');
let choicesEl = document.querySelector('#choices');

// function to create new elements
const newEl = element => document.createElement(element);

// Function to make the questions visible
function showQuestion() {
	// Conditional to check if start-screen is hidden and question is not
	if (
		questionsContainerEl.classList.contains('hide') &&
		!startScreenEl.classList.contains('hide')
	) {
		startScreenEl.classList.toggle('hide');
		questionsContainerEl.classList.toggle('hide');
	}
}

function insertQuestion() {
	let question = questionsArr[runningQuestionIndex];

	questionTitleEl.textContent = question.question;
	// Array of values of answers
	const answersValue = Object.values(
		questionsArr[runningQuestionIndex].answers
	);

	// Iteration over each value
	for (const value of answersValue) {
		let choice = newEl('button');

		choice.textContent = value;
		choice.classList.add('choice-button');
		choicesEl.appendChild(choice);
	}

	checkChoice();
}

// Function to check choice
function checkChoice() {
	// nodeList of choice buttons
	const nodeList = document.querySelectorAll('.choice-button');
	// Iteration over nodeList
	for (let i = 0; i < nodeList.length; i++) {
		const node = nodeList[i];

		// Event listener to check if is correct
		node.addEventListener('click', function (e) {
			const myChoice = e.target.textContent;

			if (
				myChoice === questionsArr[runningQuestionIndex].correctAnswer()
			) {
				console.log(true);
				runningQuestionIndex++;
				showQuestion();
			} else {
				console.log(false);
				runningQuestionIndex++;
				showQuestion();
			}
		});
	}
}
// #Testing Area
insertQuestion();
