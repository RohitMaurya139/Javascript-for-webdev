// 📌 In JavaScript, every value is either "truthy" or "falsy" when used in a Boolean context (like if-condition).

// ✅ 1. Falsy Values (7 total)
// These values are considered "false" when converted to Boolean

console.log(Boolean(false)); // ➤ false
console.log(Boolean(0)); // ➤ false
console.log(Boolean(-0)); // ➤ false
console.log(Boolean(0n)); // ➤ false (BigInt zero)
console.log(Boolean("")); // ➤ false (empty string)
console.log(Boolean(null)); // ➤ false
console.log(Boolean(undefined)); // ➤ false
console.log(Boolean(NaN)); // ➤ false

// Example usage of falsy:
if (!0) {
  console.log("Falsy: 0 is considered false");
}

if (!"") {
  console.log('Falsy: "" (empty string) is considered false');
}

// ✅ 2. Truthy Values
// Everything else that is not falsy is truthy

console.log(Boolean(true)); // ➤ true
console.log(Boolean(1)); // ➤ true
console.log(Boolean(-1)); // ➤ true
console.log(Boolean("hello")); // ➤ true
console.log(Boolean([])); // ➤ true (empty array is truthy)
console.log(Boolean({})); // ➤ true (empty object is truthy)
console.log(Boolean(" ")); // ➤ true (string with space)
console.log(Boolean(function () {})); // ➤ true (function is truthy)

// Example usage of truthy:
if ("Rohit") {
  console.log("Truthy: Non-empty string is true");
}

if ([]) {
  console.log("Truthy: Empty array is true");
}

if ({}) {
  console.log("Truthy: Empty object is true");
}

// ✅ 3. Real-world usage of truthy/falsy in conditionals
let username = "";

if (username) {
  console.log("Welcome", username);
} else {
  console.log("Please enter a username."); // ➤ This will run because "" is falsy
}

let age = 25;

if (age) {
  console.log("Age is valid"); // ➤ Runs because 25 is truthy
}

// ✅ 4. Short-circuiting with logical OR `||` (used for default values)
let userInput = null;
let defaultName = userInput || "Guest";
console.log("Hello", defaultName); // ➤ Hello Guest

// ✅ 5. Short-circuiting with logical AND `&&`
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Show admin panel");
} else {
  console.log("Access denied"); // ➤ Runs because false && true is false
}
/* 
----------------------------------------------------------------------
❌ Falsy Values (Evaluate to false):
false                                        
0
-0
0n
""
null
undefined
NaN
-------------------------------------------------------------------------
✅ Truthy Values (Everything else):
true
non-zero numbers
non-empty strings
[]
{}
any function
any object
*/
