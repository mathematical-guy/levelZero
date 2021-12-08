let readline = require('readline-sync');
console.log('----------------------------------------------------------------------------');
console.log('Avengers questionnaire by Mohit (github: mathematical-guy)');
console.log('----------------------------------------------------------------------------');
let name = readline.question("Enter your name: ");


let score = 0;

function playGame() {
    console.log(`Hello ${name}\n\n`)
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].question)
        let answer = readline.question();
        if (questions[i].answer === answer) {
            score += 1;
        }
    }
    return score;
}

let questions = [
    {
        question: "How many Infinity Stones are there?",
        answer: "6"
    },
    {
        question: "Father of Tony?",
        answer: "Howard"
    },
    {
        question: "What type of doctor is Doctor Strange?",
        answer: "Neurosurgeon"
    },
    {
        question: "On what planet was the Soul Stone in Infinity War?",
        answer: "Vormir"
    },
    {
        question: "Black Panther is from?",
        answer: "Wakanda"
    }
]

result = playGame();
console.log(`${name}, your score is ${score}`)