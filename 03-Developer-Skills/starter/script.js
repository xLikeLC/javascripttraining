// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = "23";

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1991));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// 1.1-Ce este amplitude ?  Raspuns : Diferenta din ceea mai mare si ceea mai mica temperatura in array
// 1.2-Cum determintam ceea mai mica si ceea mai mare temperatura in array?
// 1.3-Ce este problema la termometru ? Ce facem cind apare problema la termometru ?

// 2) Breaking up into sub-problems
// 2.1-Cum ignoram erroarea ?
// 2.2-Cum gasim temperatura maxima max value ?
// 2.3-Cum gasim temperatura minima min value ?
// 2.4-Determinam valoare minimala din maximala (amplitude) si returnam

// 2.2-Cum gasim temperatura maxima max value ? Raspuns.
// 2.3-Cum gasim temperatura minima min value ?
const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const calcTemp = temps[i];
    if (typeof calcTemp !== "number") continue;
    if (calcTemp > max) max = calcTemp; // daca temp este mai mare decit max  se rescrie max.
    if (calcTemp < min) min = calcTemp; // daca temp este mai mic atunti ea se rescrie.
  }
  console.log(max, min);
  // 2.4-Determinam valoare minimala din maximala (amplitude) si returnam
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);

console.log(`Amplituda este egala cu: ${amplitude}`);
// max 3 cind se face ciclu 1 data se salveaza 3
// max 7 verifica daca 3 este mai mare decit 7 , da este mai mare se rescrie
// max 4 verifica  > 7 nu ramane 7.

// PROBLEM 2 :

// Functia primeste 2 array cu temperatura.

// 1) Understanding the problem
//1.1 Daca sunt 2 array este necesar de facut functional similar ? No.

// 2) Breaking up into sub-problems.
// 2.1 Este necesar de facut concatinare la Array.

const inDateFirst = [1, 2, 3, 10, 20, -1];
const inDateSecond = [1, 3, 4, 5, 22, 34, -10];
const totalDates = inDateFirst.concat(inDateSecond);
console.log(totalDates);

const amplitudeNew = calcTempAplitude(totalDates);
console.log(`Amplituda din datele noi este egala cu: ${amplitudeNew}`);

// sau putem facem prin functie ce primeste 2 paramentri

const calcTempAplitudeNew = function (t1, t2) {
  // aici primeste 2 parametri
  const temps = t1.concat(t2); // am facut concatinare de array
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const calcTemp = temps[i];
    if (typeof calcTemp !== "number") continue;
    if (calcTemp > max) max = calcTemp; // daca temp este mai mare decit max  se rescrie max.
    if (calcTemp < min) min = calcTemp; // daca temp este mai mic atunti ea se rescrie.
  }
  console.log(max, min);
  // 2.4-Determinam valoare minimala din maximala (amplitude) si returnam
  return max - min;
};

const amplitudeCalc = calcTempAplitudeNew([1, 2, 20, 22], [10, 15, 10]); // primeste 2 argumente in forma de  array  care se duc dupa in functie.
console.log(`Amplituda este egala cu: ${amplitudeCalc}`);
*/
// Theme 56 Debugging with the Console and Breakpoints
/*
const masureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")), // returneaza tot timpul string trebuie sa convertim in Number
    value:10,
  };
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) cautam Eroarea in cod
console.log(masureKelvin());
*/

// Using a debugger
const calcTempAplitudeBug = function (t1, t2) {
  // aici primeste 2 parametri
  const temps = t1.concat(t2); 
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const calcTemp = temps[i];
    debugger;
    if (typeof calcTemp !== "number") continue;
    if (calcTemp > max) max = calcTemp; 
    if (calcTemp < min) min = calcTemp; 
  }
  console.log(max, min); 
  return max - min;
};

const amplitudeCalc = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]); 
//A) Identify BUG
console.log(`Amplituda este egala cu: ${amplitudeCalc}`);

///////////////////////////
//Coding Challenge #9 | JavaScript 🔥 | Lecture 057

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// 1.1-
// 1.2-

// 2) Breaking up into sub-problems
// 2.1-
// 2.2-

// 1) Understanding the problem
// 1.1-Ce este amplitude ?  Raspuns : Diferenta din ceea mai mare si ceea mai mica temperatura in array
// 1.2-Cum determintam ceea mai mica si ceea mai mare temperatura in array?
// 1.3-Ce este problema la termometru ? Ce facem cind apare problema la termometru ?

// 2) Breaking up into sub-problems
// 2.1-Cum ignoram erroarea ?
// 2.2-Cum gasim temperatura maxima max value ?
// 2.3-Cum gasim temperatura minima min value ?
// 2.4-Determinam valoare minimala din maximala (amplitude) si returnam
