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
			return this.answers.b;
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
// ! Remember to change to 60
let timeLeft = 60;

// Variables of the index
let lastQuestionIndex = questionsArr.length - 1;
let runningQuestionIndex = 0;
let choice;
let nodeList;

// # Elements
// Start Screen
const startScreenEl = document.querySelector('#start-screen');

// Questions
const questionsContainerEl = document.querySelector('#questions');
const questionTitleEl = document.querySelector('#question-title');
const choicesEl = document.querySelector('#choices');

// Feedback
const feedBackEl = document.querySelector('#feedback');

// function to create new elements
const newEl = element => document.createElement(element);

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
	let question = questionsArr[runningQuestionIndex];

	questionTitleEl.textContent = question.question;
	// Array of values of answers
	const answersValue = Object.values(
		questionsArr[runningQuestionIndex].answers
	);

	// Iteration over each value
	for (const value of answersValue) {
		choice = newEl('button');

		choice.textContent = value;
		choice.classList.add('choice-button');
		choicesEl.appendChild(choice);
	}

	return checkChoice();
}

// Function to check choice
function checkChoice() {
	// nodeList of choice buttons
	nodeList = document.querySelectorAll('.choice-button');
	// Iteration over nodeList
	for (let i = 0; i < nodeList.length; i++) {
		const node = nodeList[i];

		// Event listener to check if is correct
		node.addEventListener('click', function (e) {
			const myChoice = e.target.textContent;

			// Conditional to check choice, then show feedback and delete all elements to render next question (in case the choice is incorrect 10 seconds are to be taken from the time left)
			if (
				myChoice === questionsArr[runningQuestionIndex].correctAnswer()
			) {
				NewFeedBack('Correct!');
				deleteChild(choicesEl, choicesEl.lastElementChild);
			} else {
				NewFeedBack('Wrong!');
				timeLeft -= 10;
				deleteChild(choicesEl, choicesEl.lastElementChild);
			}

			if (runningQuestionIndex < lastQuestionIndex) {
				runningQuestionIndex++;
				return renderQuestion();
			}
		});
	}
}

// Function to delete child elements
function deleteChild(parent, child) {
	while (child) {
		parent.removeChild(child);
		child = parent.lastElementChild;
	}
}

// Function to show feedback
function NewFeedBack(value) {
	if (feedBackEl.classList.contains('hide')) {
		feedBackEl.classList.toggle('hide');
		feedBackEl.textContent = value;
	} else {
		return (feedBackEl.textContent = value);
	}
}

console.log(questionsArr.length);
console.log(lastQuestionIndex);
