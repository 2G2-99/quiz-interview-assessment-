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
	{
		enunciate: 'Instead of an "if" statement you can use ...',
		answers: {
			a: 'switch and ternary operator',
			b: 'for and while',
			c: 'map and forEach',
			d: 'All of them',
		},
		correctAnswer() {
			return this.answers.a;
		},
	},
	{
		enunciate: 'Which of these is not an Object type',
		answers: {
			a: 'Object',
			b: 'array',
			c: 'null',
			d: 'function',
		},
		correctAnswer() {
			return this.answers.d;
		},
	},
	{
		enunciate: 'Functions declarations syntax is...',
		answers: {
			a: 'function name {parameter} (...)',
			b: 'const name = function () {...}',
			c: 'function name(parameter) {...}',
			d: 'const name = (parameter) => ...',
		},
		correctAnswer() {
			return this.answers.c;
		},
	},
	{
		enunciate: 'What happens after the "+=" Assignment Operator?',
		answers: {
			a: 'Copies the value of the variable',
			b: 'Adds a value to the variable',
			c: 'Concatenates two variables',
			d: 'Adds a "+" to the value',
		},
		correctAnswer() {
			return this.answers.b;
		},
	},
	{
		enunciate: 'The official name of JavaScript is...',
		answers: {
			a: 'Is not JavaScript?',
			b: 'JS',
			c: 'Java',
			d: 'ECMAScript',
		},
		correctAnswer() {
			return this.answers.d;
		},
	},
];

let timeLeft = 90;

let question;
let lastQuestionIndex = quiz.length - 1;
let runningQuestionIndex = 0;
let choicesButtons;
const correctSoundFeedback = document.querySelector(
	"audio[data-sound-feedback='correct']"
);
const wrongSoundFeedback = document.querySelector(
	"audio[data-sound-feedback='wrong']"
);
let quizEnded = false;

// # DOM Elements
const startScreen = document.querySelector('#start-screen');

const questionsContainer = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choices = document.querySelector('#choices');

const feedBack = document.querySelector('#feedback');

// # Functions

const newElement = element => document.createElement(element);

function showScreen(toShow, toHide) {
	if (
		toShow.classList.contains('hide') &&
		!toHide.classList.contains('hide')
	) {
		toShow.classList.toggle('hide');
		toHide.classList.toggle('hide');
	}
}

function renderQuestion(runningQuestionIndex) {
	question = quiz[runningQuestionIndex];
	questionTitle.textContent = question.enunciate;

	renderButtonsOf(question);
}

function renderButtonsOf(question) {
	const possibleAnswers = Object.values(question.answers);

	for (const answer of possibleAnswers) {
		let choice = newElement('button');

		choice.textContent = answer;
		choice.classList.add('choice-button');
		choices.appendChild(choice);
	}
}

function checkChosen(e) {
	const answer = e.target.textContent;
	if (answer === question.correctAnswer()) {
		correctSoundFeedback.play();
		NewFeedBack('Correct!');
	} else {
		wrongSoundFeedback.play();
		NewFeedBack('Wrong!');
		timeLeft -= 10;
	}
	getNext();
}

function NewFeedBack(message) {
	if (feedBack.classList.contains('hide')) {
		feedBack.classList.toggle('hide');
		feedBack.textContent = message;
	} else {
		return (feedBack.textContent = message);
	}
}

function deleteChild(parent, child) {
	while (child) {
		parent.removeChild(child);
		child = parent.lastElementChild;
	}
}

function getNext() {
	deleteChild(choices, choices.lastElementChild);
	if (runningQuestionIndex === lastQuestionIndex) {
		endQuiz();
	} else if (runningQuestionIndex !== lastQuestionIndex) {
		runningQuestionIndex++;
		renderQuestion(runningQuestionIndex);
	}
}

function endQuiz() {
	quizEnded = true;
	showScreen(endScreen, questionsContainer);
	return (finalScore.textContent = timeLeft);
}

function initQuiz() {
	showScreen(questionsContainer, startScreen);
	renderQuestion(runningQuestionIndex);
}

choices.addEventListener('click', checkChosen);
