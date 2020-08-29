// Collect input from a user
let input = prompt("Please enter a number");
// Convert the input to a number
let convertInput = Number.parseInt(input);

while (typeof convertInput == "NaN" || typeof convertInput == "null") {

    input = prompt("Please enter a valid number");
    convertInput = Number.parseInt(input);
    console.log(typeof convertInput);

}




// Use Math.random() and the user's number to generate a random number
let random = Math.floor(Math.random() * convertInput) + 1;

// Create a message displaying the random number
console.log(`${random} is a number between 1 and ${input}`);



// Checking