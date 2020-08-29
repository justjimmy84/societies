//Store objects within arrays, think of the quiz with questions and answers

//Object.keys() a method that returns an array of the property names (or keys) of an object (that was passed through as an argument). const personProps = Object.keys(person);

//Check the length of an object by determining the the length of the array produced by Object.keys()

//Object.values() a method returns an array of a given object's property VALUES.

//The spread operator also works for objects

/* 
const person = {
    name: 'Edward',
    city: 'New York City',
    age: 37,
    isStudent: true,
    skills: ['Javascript', 'HTML', 'CSS'],
};

for ( let prop in person ) {
    console.log(`${prop}: ${person[prop]}`);
}
 */
/*
const message = `Hi, I'm ${person['name']} Most people know me as ${person.name = 'Duke'}. ${person.name}. I have ${person.skills.length} skills: ${person.skills.join(', ')}.`;
console.log(message); */

/* const quiz = [
    ['What is 1+2?', '3'],
    ['What is 2+3?', '5'],
    ['What is 3+4?', '7'],
];

let correctAnswers = 0;

for ( let i = 0 ; i < quiz.length ; i++ ) {
    const answer = prompt(quiz[i][0]);
    if ( answer === quiz[i][1]) {
        correctAnswers++;
    }
}

alert(`You got ${correctAnswers} questions correct!`); */

/* const inStock = [
    ['So What', 'Miles Davies', '9:04'],
    ['Respect', 'Aretha Franklin', '2:45'],
    ['What a Wonderful World', 'Louis Armstrong', '2:21'],
];
 */
/* const myArtists = `${inStock[0][1]}, ${inStock[1][1]}, ${inStock[2][1]}`;
 */

/* const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'mlk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucmbers',];
let search = prompt('Search for a product.');
let message;

if ( !search ) {
    message = `<strong>In stock:</strong> ${inStock.join(', ')}. <p>You didn't search for anything!`;
} else if (inStock.includes(search.toLowerCase())) {
    message = `Yes, we have <strong>${search}</strong>. It's ${inStock.indexOf(search) + 1} on the list!`;
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`; */

/*
.join(separation value) returned joined result
.includes(value) returns true/false
.indexOf(search value); returns idnex value
*/

/* const daysInWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday', 
    'Saturday',
    'Sunday',
]

console.log(daysInWeek.join()); */


/* const playlist = [
    "So What",
    "Respect",
    "What a wonderful world",
    "At Last",
    "Three Little Birds",
]

function createListItems(arr) {
    let items = "";
    for (i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

document.querySelector('main').innerHTML = `
    <ol>
        ${createListItems(playlist)}
    </ol>
`; */

/* const middle = ["lettice", "cheese", "patty"];
const burger = ["top bun", ...middle, "bottom bun"];
console.log(burger); */

/* const planets = [
     "Mercury", 
     "Venus", 
     "Earth", 
     "Mars" 
    ];

console.log(planets[0]);
planets.push('Uranus');
console.log(planets); */

/* function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

let counter = 0;
while (counter < 10) {
    counter++;
    console.log(getRandomNumber(6));
} */

//Default parameter in a functoin
/* function sayGreeting(name = 'this is a default name') {
    return `Good morning, ${name}`;
} */

//If there are multiple parameters, and they each have default value, and you want to use the defaeult value of the first parameter
/* sayGreeting(undefined, 'Jimmy'); */

//Arrow Functions
/* const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
 */
/* function areaTriangle(length, width) {
    let area = length * width;
    return area;
}

function prismVolume(width, height, length) {
    let volume = width * height * length;
    return volume;
} */

//floor and random are both functions

/* function getRandomNumber(upper) {
    const randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}

const dieRoll = getRandomNumber(6);
console.log(getRandomNumber(100)); */

/* function getYear() {
    const year = new Date().getFullYear();
    console.log(year);
    return year;
}

alert(getYear()); */

/* function isFieldEmpty() {
    const field = document.querySelector("#info");
    return  field.value === '';
}

const fieldTest = isFieldEmpty();

if (fieldTest === true) {
    alert("Please provide your information.");
} */

/* function getArea(width, length) {
    const area = width * length;
    return area;
}

console.log(getArea(10,10)); */

/* const pets = [
    {
        name: 'Chewie',
        type: 'Home',
        breed: 'Dalmation',
        age: 7,
        photo: 'www.blizzard.com',
    },
    {
        name: 'Dog2',
        type: 'Work',
        breed: 'Beagle',
        age: 7,
        photo: 'www.blizzard.com',
    },
    {
        name: 'Dog3',
        type: 'Space',
        breed: 'German Shepard',
        age: 7,
        photo: 'www.blizzard.com',
    },
]; */

/* let html = '';

for ( let i = 0 ; i < pets.length ; i++) {
    for ( let key in pets[i]) {
     html += `<p>${key}: ${pets[i][key]}</P>`
    }
    html += `<hr>`;
}
 */

//Better way to do it, to factor in h2 h3 tags etc

/* let html = '';

for ( let i = 0 ; i < pets.length ; i++ ) {
    let pet = pets[i];
    html += `
        <h2>${pet.name}</h2>
        <h3>${pet.type}</h3>
        <h4>${pet.breed}</h4>
    `;
    for ( let key in pet) {
    }
}

const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', html); */

