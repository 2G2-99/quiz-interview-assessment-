'use strict';
//  Array of questions objects
let quiz = [
	{
		enunciate: 'HTML stands for...',
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
		enunciate: 'To start a form you need a ... tag',
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
		enunciate:
			'While CSS gives a style, HTML an structure, JavaScript gives ...',
		answers: {
			a: 'Potential',
			b: 'Interactivity',
			c: 'Intuition',
			d: 'Internet',
		},
		correctAnswer() {
			return this.answers.b;
		},
	},
	{
		enunciate: 'How many data types exist on JavaScript',
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
		enunciate: 'Which of these is not a primitive value',
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

let timeLeft = 60;

// Variables of the index
let lastQuestionIndex = quiz.length - 1;
let runningQuestionIndex = 0;
let choice;
let choicesButtons;

// # DOM Elements
const startScreen = document.querySelector('#start-screen');

const questionsContainer = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choices = document.querySelector('#choices');

const feedBack = document.querySelector('#feedback');

// # Functions

// function to create new elements
const newElement = element => document.createElement(element);

// Function to make the questions visible
function showScreen(toShow, toHide) {
	// Conditional to check if start-screen is hidden and question is not
	if (
		toShow.classList.contains('hide') &&
		!toHide.classList.contains('hide')
	) {
		toShow.classList.toggle('hide');
		toHide.classList.toggle('hide');
	}

	return renderQuestion();
}

// Function to insert current question
function renderQuestion() {
	let question = quiz[runningQuestionIndex];
	questionTitle.textContent = question.enunciate;

	const possibleAnswers = Object.values(quiz[runningQuestionIndex].answers);

	for (const answer of possibleAnswers) {
		choice = newElement('button');

		choice.textContent = answer;
		choice.classList.add('choice-button');
		choices.appendChild(choice);
	}

	return checkChoice();
}

function checkChoice() {
	choicesButtons = document.querySelectorAll('.choice-button');

	for (let i = 0; i < choicesButtons.length; i++) {
		const button = choicesButtons[i];

		button.addEventListener('click', function (e) {
			const userChoice = e.target.textContent;

			if (userChoice === quiz[runningQuestionIndex].correctAnswer()) {
				NewFeedBack('Correct!');
				deleteChild(choices, choices.lastElementChild);
			} else {
				NewFeedBack('Wrong!');
				timeLeft -= 10;
				deleteChild(choices, choices.lastElementChild);
			}

			if (runningQuestionIndex < lastQuestionIndex) {
				runningQuestionIndex++;
				return renderQuestion();
			}
		});
	}
}

function deleteChild(parent, child) {
	while (child) {
		parent.removeChild(child);
		child = parent.lastElementChild;
	}
}

function NewFeedBack(value) {
	if (feedBack.classList.contains('hide')) {
		feedBack.classList.toggle('hide');
		feedBack.textContent = value;
	} else {
		return (feedBack.textContent = value);
	}
}
