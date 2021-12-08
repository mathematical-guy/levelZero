// Exercise 1
// Write a program to console your name on the output.
console.log("Mohit Talreja");
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

let readline = require('readline-sync');
let decision = readline.question("Are you greater than 25? \nEnter Y for Yes and \n Enter N for No ");

if(decision === 'Y' || decision === 'y'){
    console.log('RIGHT 😀');
}
else{
    console.log('WRONG 😥')
}