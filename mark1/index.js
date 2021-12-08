// Exercise 1
// Write a program to console your name on the output.
// console.log("Mohit Talreja");
//---------------------------------------------------

// Exercise 2
// A program to read input from your user. Output this name. Use readlineSync() for this

// let readline = require("readline-sync");
// let name = readline.question("What is your name? \n");
// console.log(name);

//---------------------------------------------------

// Exercise 3
// A program to take a string. And add "Welcome" to it. Then console it.

// let readline = require("readline-sync");
// let name = readline.question("What is your name? \n");
// console.log(`Welcome ${name}, how are you?`);


//---------------------------------------------------


// Exercise 5

// Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

// let readline = require('readline-sync');
// let decision = readline.question("Are you greater than 25? \nEnter Y for Yes and \n Enter N for No ");

// if(decision === 'Y' || decision === 'y'){
//     console.log('RIGHT 😀');
// }
// else{
//     console.log('WRONG 😥')
// }

//---------------------------------------------------

// Exercise 6
// Ask your user if your hometown is Ahmedabad and this time increment a variable based on the right answer.

// let readline = require('readline-sync');
// let score = 0;
// const city = "Ahmedabad";
// let entered_city = readline.question("Hometown of Mohit ?");
// if(entered_city === city){
//     score += 1;
// }
// console.log(`Your score is ${score}`)

//---------------------------------------------------

// Exercise 7
// Take two numbers and add them. Put this entire thing in a function add() and return the result

// function addNumbers(num1, num2){
//     return num1 + num2;
// }


// let readline = require('readline-sync');
// let number1 = Number(readline.question("Enter first number: "));
// let number2 = Number(readline.question("Enter second number: "));

// let result = addNumbers(number1, number2);
// console.log(`Addition of ${number1} and ${number2} is ${result}`)

//---------------------------------------------------

// ex09: print your name 5 times

// for(let i =0; i<5; i++){
//     console.log("Mohit");
// }

//---------------------------------------------------

// homework: star pattern

// function printStars(count, invert){
//     let output;
//     if(invert === 'Y' || invert === 'y'){
//         for(let row=0; row<count; row++){
//             output = ''
//             for(let col=count; col>row; col--){
//                 output += '*'
//             }
//             console.log(output);
//         }
//     }
//     else{
//         for(let row=0; row<count; row++){
//             output = ''
//             for(let col=0; col<row; col++){
//                 output += '*'
//             }
//             console.log(output)
//         }
//     }
// }

// let readline = require('readline-sync');
// let max_stars = Number(readline.question("How many maximum stars you want? "));
// let invert = readline.question("Do you want to invert?\nEnter Y for Yes.");
// printStars(max_stars, invert)


// ex10: list grocery items to buy

// let fastFoods = [
//     "Samosa", 
//     "Puff",
//     "Vada-Pav",
//     "Maggie",
//     "Noodles",
//     "Manchurian",
//     "Frankie",
//     "Burger",
//     "French Fries"
//     ]

// for(let i=0; i<fastFoods.length; i+=2){
//     console.log(fastFoods[i])
// }


// ex11: print every item on the list

// let fastFoods = [
//     "Samosa", 
//     "Puff",
//     "Vada-Pav",
//     "Maggie",
//     "Noodles",
//     "Manchurian",
//     "Frankie",
//     "Burger",
//     "French Fries"
//     ]

// for(let i=0; i<fastFoods.length; i++){
//     console.log(fastFoods[i])
// }

// ex12: club info about a superhero together

// let ironman = {
//     "realname": "Tony Stark",
//     'character': "Iron Man",
//     "skill": ["Genius", "Billionare", "Philanthropist"]
// }

// let captain_america = {
//     "realname": "Steve Rogers",
//     'character': "Captain America",
//     "skill": ["Super Strength", "Super Stamina", "Super Reflexes"]
// }

// console.log(`${ironman.character} is ${ironman.realname}.`)

// console.log(`${captain_america.character} is ${captain_america.realname}.`)

// ex13: put a list of questions together

console.log('----------------------------------------------------------------------------');
console.log('Avengers questionnaire by Mohit (github: mathematical-guy)');
console.log('----------------------------------------------------------------------------');
let readline = require('readline-sync');
let name = readline.question("Enter your name: ");
let score = 0;

function playGame(){
    for(let i=0; i<questions.length; i++){
        console.log(questions[i].question)
        let answer = readline.question();
        if(questions[i].answer === answer){
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