// ! FOR LOOP IN JAVASCRIPT
// * A for loop is used to run a block of code a known number of times.

// ? Syntax:
// for (initialization; condition; update) {
//   // code block
// }

console.log("Printing numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i); // * Output: 1 2 3 4 5
}

// --------------------------------------------------------

// * 1️⃣ Loop through an array
const colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]); // * Accessing each array element
}

// --------------------------------------------------------

// * 2️⃣ Reverse loop
console.log("Counting down from 5 to 1:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// --------------------------------------------------------

// * 3️⃣ Skipping values using `continue`
console.log("Odd numbers between 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // * Skip even numbers
  console.log(i); // * Output: 1, 3, 5, 7, 9
}

// --------------------------------------------------------

// * 4️⃣ Breaking the loop using `break`
console.log("Breaking when number is 4:");
for (let i = 1; i <= 10; i++) {
  if (i === 4) break; // * Exit the loop when i is 4
  console.log(i); // * Output: 1, 2, 3
}

// --------------------------------------------------------

// @note: `for` loops are ideal when:
// - You know how many times to repeat
// - You need an index (position) while iterating

// TODO: Practice by printing multiplication tables using for loop
