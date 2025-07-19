// ! WHILE LOOP IN JAVASCRIPT
// * A while loop repeats a block of code as long as a specified condition is true.

// ? Syntax:
// while (condition) {
//   // code block
// }

let count = 1;

// * 1️⃣ Basic while loop
while (count <= 5) {
  console.log("Count is:", count); // * Prints 1 to 5
  count++;
}

// --------------------------------------------------------

// * 2️⃣ Using while loop with user input (simulated example)
let password = "admin";
let input = "";

// TODO: Simulate user input (In real cases, use prompt() in browser)
let attempts = ["1234", "password", "admin"];
let index = 0;

while (input !== password) {
  input = attempts[index]; // * Simulating user typing
  console.log("Trying password:", input);
  index++;
}

console.log("Access granted!");

// --------------------------------------------------------

// * 3️⃣ Infinite loop (⚠️ use with caution!)
/*
let i = 0;
while (true) {
  console.log(i++);
  if (i > 10) break; // * Breaks out of loop manually
}
*/

// ! Always make sure a condition will eventually become false
// ! Otherwise, the loop will run forever (infinite loop)

// --------------------------------------------------------

// * 4️⃣ Looping through an array using while loop
const fruits = ["Apple", "Banana", "Cherry"];
let i = 0;

while (i < fruits.length) {
  console.log("Fruit:", fruits[i]);
  i++;
}

// --------------------------------------------------------

// ? When to use while loop:
// @note:
// - When you don't know beforehand how many times you need to loop
// - When you're waiting for a condition to become false
