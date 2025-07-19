// ! DO...WHILE LOOP IN JAVASCRIPT
// * A do...while loop executes the block of code **at least once** before checking the condition.

// ? Syntax:
// do {
//   // code block
// } while (condition);

let count = 1;

// * 1️⃣ Basic do...while example
do {
  console.log("Count is:", count);
  count++;
} while (count <= 5); // * Runs while count is less than or equal to 5

// --------------------------------------------------------

// * 2️⃣ do...while runs **at least once** even if condition is false
let num = 10;

do {
  console.log("This runs at least once, num =", num);
  num++;
} while (num < 5); // * Condition is false, but still runs one time

// --------------------------------------------------------

// * 3️⃣ User input simulation using do...while
let password = "";
const correctPassword = "admin123";

// TODO: Simulated user input (in real app, use prompt() in browser)
const attempts = ["123", "admin", "admin123"];
let i = 0;

do {
  password = attempts[i]; // * Simulate input
  console.log("Trying password:", password);
  i++;
} while (password !== correctPassword);

console.log("Access Granted!");

// --------------------------------------------------------

// @note: Use `do...while` when:
// - You want to run the loop body at least once no matter what
// - Useful for user input validations, retry logins, menus, etc.

// ! Difference from while loop:
// ? while → checks condition first
// ? do...while → runs first, then checks condition
