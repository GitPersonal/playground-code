// let random = Math.random();

// if (random < 0.5) {
//     console.log('Your number is less than 0.5');
//     console.log(random);
// }
// if (random >= 0.5) {
//     console.log('Your number is greater than 0.5');
//     console.log(random);
// }



// let rating = 3;

// if(rating === 3){
//     console.log("You are a superstar");
// } else if (rating === 2) {
//     console.log("You are just ok");
// }



// const dayOfTheWeek = "Friday";

// if (dayOfTheWeek === "Monday") {
//     console.log("It\'s monday.")
// } else if (dayOfTheWeek === "Saturday"){
//     console.log("Awesome saturday")
// } else if (dayOfTheWeek === "Friday") {
//     console.log("TGIF")
// }

// ********************************************

// const password = prompt("Please enter a new password");


// if (password.length >= 6) {
//     // console.log("Long enought password")
//     if (password.indexOf(' ') === -1 ){
//         console.log("Valid password");
//     } else {
//         console.log("Password cannot contain spaces")
//     }
// } else {
//     console.log("Password is too short. Must be 6 plus characters");
// }


// const userInput = prompt('Enter Something');

// if (userInput) {
//     console.log("TRUTHY");
// } else {
//     console.log("FALSY");
// }



// console.log(true && true);
// console.log(true && false);
// console.log(false && true);

// let answer = 1 === 1  && 2 < 7;

// console.log(answer);

// const password = prompt("Enter your Password");


// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid Password");
// } else {
//     console.log("Incorrect format for password");
// }


// const mystery = 'Passwor7'; 

// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }



// const age = 59;

// if (age < 5 || age > 65) {
//     console.log("Free");
// } else if (age < 10) {
//     console.log("$10");
// } else if (age < 65) {
//     console.log("$20");
// }


// var x = prompt("What does a dog wag?");

// if (x === "tail") {
//     alert("Correct");    
// }
// if (x !== "tail") {
//     alert("Wrong answer");
// }


// function make(ddd) {
//     console.log('fired ' + ddd);

// }

// make("once");
// make("twice");
// make("thrice");



// ***********************************

// for (let i = 0; i < 10.length; i++) {
//     const element = 10[i];
    
// }



// |||||||||||||||||||||||||||||||||||||||
// This loop will not run since the condition evaluates to false
// for (let i = 0; i < 0; i++) {
//     bounceBall()
//     const timesBounced = i + 1
//     console.log('The ball has bounced ' + timesBounced + ' times')
//   }
  
//   // You will only see this
//   console.log('next line of code')


// This loop will run twice
// for (let i = 0; i < 2; i++) {
//     bounceBall()
//     const timesBounced = i + 1
//     console.log('The ball has bounced ' + timesBounced + ' times')
//   }
  
//   console.log('next line of code')

// let score = 100;
// if (score > 50) {
//     document.write("You passed");
// } else{
//     document.write("Try again...");
// }


// var pass = 50;
// var score = 90;


// var hasPassed = score >= pass;

// var el = document.getElementById("answer");
// el.textContent = "Level passed: " + hasPassed;

// ************************************************************
// ************************************************************

// function runningBack(runs) {
   
//     if (runs >= 1) {
//         return "Runs the ball for a gain <br/>";
//     } else if (runs === 0) {
//         return "No gain on the play <br/>";
//     } else {
//         return "Loss of yards <br/>";
//     }
    
// }
// function quarterBack() {
//     return "Throws the ball <br/>";
// }
// function wideReceiver() {
//     return "Catches the ball <br/>";
// }
// function defense() {
//     return "Makes tackle";
// }

// let runBall = runningBack(100);
// let throwBall = quarterBack();
// let catchBall = wideReceiver();

// document.write(runBall);
// document.write(throwBall);
// document.write(catchBall);


// ************************************************************
// ************************************************************


function blue() {
    return "Color blue paint";
}

function red() {
    return "Color red paint";
}

function yellow() {
    return "Color yellow paint";
}

function green() {
    return "Color green paint";
}


let blueColor = blue();

document.write(blueColor);
















































