/////////////////////  Coding Challenge 8
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
/*
const calcTip = function (bill) {
  // 3
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(40));

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]; //1
const tips = []; //2
const totals = []; // 2

// for p/u a trece prin marimea la bills de cite e lungimea lui  defenim o variabila "tip" ca sa facem 2 opetatii cu ea apoi  in ea apelam functia "calctip" apoi facem push in "tips" si apoi in totals tot push dar facem operatia de adunare.
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);
// definim o functie cu parametru "arr" apoi in interior o variabila care sumeaza acest parametru apoi returnam sum / la lungimea la arr
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum +arr[i]; este aceasi ca mai jos.
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]).toFixed(2)); // 4.00
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
*/
// Fibonacci number quest
//https://www.youtube.com/watch?v=5DhDhTO_ALw
// cum se calculaeaza sirul a + b = c ; transcirem a in b  si b in c
// 0 1 1 2 3 5 8 13 21 34 55 89 144 ...

let a = 0;
let b = 1;
let c = 0;

while (c <= 1000) {
  console.log(`Sirul lu Fibonacci este ${c}`);
  c = a + b;
  a = b;
  b = c;
}
