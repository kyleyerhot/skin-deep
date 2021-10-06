// Program that prints questions from "The Skin Deep" video series.
// Ongoing updates as I hear new questions.

var questions = [
	'Why do you love me?',
	'What is an experience you wish I never had?',
	'What do you appreciate about me?',
	'What is one experience you wish we never had, and why?',
	'How do you think mental health has affected our relationship?',
	'How have I changed since we first met and how do you feel about it?',
	'What is something you are hesitant to tell me?',
	'What quality trait of mine do you wish you had and why?',
	'How are we most alike and most different?',
	'How do you describe me to others?',
	'What is your favorite imperfection of mine?',
	'When do you feel closest to me?',
	'What is one experience you wish I never had?',
	'If this were to be our last conversation, what would you never want me to forget?',
	'When you think about the first time we met, what do you remember?',
	'When have you seen me the most vulnerable and what have you learned from it?',
	'What is something you think I need to hear?',
	'What is one thing I can do to improve our relationship?',
	'Who has more power in our relationship, and why?',
	'What is the one thing I can do to improve our relationship?',
	'What would you tell your younger self about me when we first started dating?'
];

function newQuestion() {
	var randomQuestion = Math.floor(Math.random() * (questions.length));
	document.getElementById('questionDisplay').innerHTML = questions[randomQuestion];
}