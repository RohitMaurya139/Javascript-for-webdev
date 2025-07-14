// 📌 JavaScript Code Execution Explained

// 🔹 JavaScript is a single-threaded, synchronous language.
// 🔹 It executes code line by line, top to bottom (unless interrupted by function calls, loops, etc.)

console.log("1️⃣ Code starts...");

// 🔹 Function declaration gets hoisted (moved to the top in memory phase)
greet(); // ✅ This works because greet() is hoisted

function greet() {
  console.log("2️⃣ Hello from greet()");
}

// 🔹 Variables declared with var are hoisted (but not their values)
console.log("3️⃣ Value of x before declaration:", x); // undefined (not error due to var hoisting)

var x = 10;
console.log("4️⃣ Value of x after declaration:", x); // 10

// let and const are hoisted too, but stay in "temporal dead zone" until initialized
// console.log(y); ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;

// 🔹 Function Execution and Call Stack

function outer() {
  console.log("5️⃣ Inside outer function");

  function inner() {
    console.log("6️⃣ Inside inner function");
  }

  inner(); // Call inner function (pushed to call stack)
}

outer(); // Call outer function (pushed to call stack)

// 🔹 Final step
console.log("7️⃣ Code ends...");
