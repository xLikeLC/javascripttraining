let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Radu");
console.log(23);

let firstName = "Vasile";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3 ; is not correct
// let new = 23 ; // Unexpected token or function

// Correct
let myFirstJob = "Team Leader B2B";
let myCurrentJob = "programmer";

// Not  correct
let job1 = "Team Leader B2B";
let job2 = "programmer";

console.log(myFirstJob);

// Types of PRIMITIVE Data : 7

//1. Number
let age = 23;
//2. String
let LastName = "Luchian";
//3. Boolean true or false
let fullAge = true;
//4. Undefined
let children;
//5. Null empty value
//6. Symbol(ES2015)
//7 BigInt (ES2020)

/*
JavaScript has dynamic typing: We do not have to manually define the data type of
the value stored in a variable. Instead, data types are determined automatically.*/

true;
console.log(true);
let JavascriptIsFun = true;

console.log(JavascriptIsFun);
console.log(typeof true);
console.log(typeof JavascriptIsFun);
console.log(typeof 23);
console.log(typeof "Radu");

JavascriptIsFun = "Yes!";
console.log(typeof JavascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

// null
console.log(typeof null); // if not a Object
// Let It can be modified re-registered
let years = 30;
years = 31;
// Const can be not modified re-registered

const birthYear = 1994;

// birthYear = 1995; Uncaught TypeError: Assignment to constant variable.

var job = "programmer";
job = "Team Leader B2B";

const now = 2023;
const ageEugen = now - 1995;
const ageVadim = now - 1996;
console.log(ageEugen, ageVadim);

console.log(ageEugen * 2, ageVadim / 10, 2 ** 3);

const oneName = "Constantin";
const secondName = "Luchian";

console.log(oneName + " " + secondName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x -1
console.log(x);

// Comparison operators

console.log(ageEugen > ageVadim);
console.log(ageVadim >= 18);

const isFullAge = ageVadim >= 19;

let z, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageEugen + ageVadim) / 2;
console.log(ageEugen, ageVadim, averageAge);

// Coding Chanllenge #1

/*
Mark and John are trying to compare their BMI (Body
Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in
variables
2. Calculate both their BMIs using the formula (you
can even implement both versions)
3. Create a boolean variable markHigerBMI
containing information about whether Mark has a
higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
*/

/*
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigerBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigerBMI);*/

const nickName = "Constantin";
const jobs = "programmer";
const myAge = 1994;
const yearNow = 2024;
// Standard
const xLc =
  "I'm " + nickName + ", a " + (yearNow - myAge) + " years old " + jobs + "!";
console.log(xLc);
//  With backticks
const xLcNew = `I'm ${nickName}, a ${yearNow - myAge} years old ${jobs}!`;
console.log(xLcNew);
// other example
console.log(`Just a regular string...`);

// Multiple line standard
console.log(
  "String with \n\
multiple \n\
lines"
);
// Multiple line with backticks
console.log(`String 
multiple
lines`);
