// 📌 JavaScript Variables

// 🔹 Variables are containers for storing data values.
// 🔹 In JavaScript, we can declare variables using: var, let, and const.

// 1️⃣ var – old way (function-scoped, can be re-declared and updated)
var city = "Mumbai";
console.log(city); // "Mumbai"

var city = "Delhi"; // allowed
console.log(city); // "Delhi"

city = "Pune"; // re-assigned
console.log(city); // "Pune"

// ⚠️ Avoid using var in modern JavaScript due to scope issues.

// 2️⃣ let – block-scoped, can be updated but NOT re-declared in the same block
let age = 25;
console.log(age); // 25

age = 30; // ✅ re-assignment allowed
console.log(age); // 30

// let age = 35; ❌ Error: Cannot re-declare in the same block

// 3️⃣ const – block-scoped, CANNOT be updated or re-declared
const country = "India";
console.log(country); // "India"

// country = "USA"; ❌ Error: Assignment to constant variable
// const country = "UK"; ❌ Error: Identifier 'country' has already been declared

// 🧠 Special Notes:

// 🔸 const for constants (unchanging values)
// 🔸 let for values that change
// 🔸 var is outdated — use only if needed for old code

// 🧪 Examples with block scope
{
  let a = 10;
  var b = 20;
  const c = 30;
  console.log("Inside block:", a, b, c); // 10, 20, 30
}

console.log("Outside block:");
// console.log(a); ❌ Error: a is not defined (block-scoped)
console.log(b); // ✅ var is function/global scoped — 20
// console.log(c); ❌ Error: c is not defined (block-scoped)

// 📝 Variable naming rules:
// - Must begin with a letter, $, or _
// - Cannot start with a number
// - Case-sensitive
// - Use camelCase for readability

let userName = "Rohit"; // ✅ good
let _total = 100; // ✅ valid
// let 1stUser = "John"; ❌ invalid
