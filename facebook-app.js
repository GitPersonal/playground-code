var database = [
    {
        username: "Andrei",
        password: "supersecret"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "Tired from all that learning." 
    },
    {
        username: "Sally",
        timeline: "Javascript is cool" 
    }
];


var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed); 
    } else{
        alert("Sorry, wrong username and password.");
    }
}


signIn(userNamePrompt, passwordPrompt);